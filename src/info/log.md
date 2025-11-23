## 前言

本项目始于 2021 年夏，[星空列车与白的旅行](https://cusky.tk/webgal/hoshizora/)移植项目。

迄今为止，项目已经进行了数次 UI 逻辑和核心逻辑的重构，在此编写一个日志，记录这些时间以来对视觉小说开发的经历和经验。

## UI：响应式布局？

对于视觉小说常见的 UI 布局而言，每一个按钮的大小、位置都是固定的，只需要根据屏幕大小保持比例，使用 scale 属性就能良好的实现这个效果。

不要使用依靠`%` `em` `rem`的响应式布局构建界面，嵌套百分比会使得 CSS 难以阅读，浏览器字体不得小于 12px 的限制则最终使这个方法不能实现目的。

## 幕：概念的基石

视觉小说的基本单元是幕，舞台操作的基本单元是命令，一幕包含若干条命令，在幕结束之后，需要等待用户点击进入下一幕，而在幕结束之前再次点击则会立即结束本幕。

自动模式相当于在幕结束后代替用户进行点击操作，但是如果幕中的其他命令都已执行完毕，语音仍在播放，自动模式会等待语音播放完毕后进入下一幕，用户主动点击则会立即进入下一幕。

快进模式相当于在自动模式的基础上再代替用户点击一次，这样每一幕都会立即结束，呈现出来的就是每一幕的最终状态。

## 存档：道路的分岔口

存档是视觉小说系统的关键功能之一，要如何实现它呢？

或许可以想到快进和读档之间存在某种一致性，快进到存档位置相当于进行了读档，这种方式称为状态演算。

根据存档的字面含义，则可以想到存储当前的游戏状态，通过恢复它完成读档，这种方式称为状态存储。

状态演算从剧本第 0 幕开始，在读档过程中，命令效果可能会导致不必要的开销，状态演算需要消除这些副作用。

外部输入，如用户选择的选项，不属于剧本的一部分，使用状态演算的方式也需要存储它们，并在读档过程中填入。

状态演算的缺点在于从第 0 幕开始计算状态，剧本越长读档速度就越慢，过长的剧本需要通过拆分场景来优化性能。

状态存储需要维护一个状态表，这不能够通过简单的获取当前运行状态来实现。

在读档时需要从存档点所在幕的开头开始，所以需要某种方法获得幕开始和结束时的状态，根据状态表恢复状态也需要编写额外的代码。

状态存储的缺点在于状态表与实际舞台的运行时数据结构是分离的，每新增一个舞台元素，都需要对应的实现它在状态表中的存储和恢复。

## 命令：快进、暂停、生成器

在视觉小说中，有些动作不能快进，例如选择分支，有些动作可以快进，例如位移动画，命令执行队列需要反映这种差异，为了在步进、自动、快进的事件触发时进行正确的行为，还需要知道命令是否执行完毕，于是命令[执行模式](/extend/script.html#实现命令)的特征被提取出来。

在状态演算的实现下，还需要关心哪些状态需要计算，哪些可以跳过计算，可以发现有些效果仅在当前幕内生效，例如对话文字，有些效果则会跨越多幕，例如背景音乐，于是命令[效果作用域](/extend/script.html#性能优化)的特征被提取出来。

可以想到使用 Promise 来统计命令的执行时间，当命令进行一个耗时操作时，就 await 一个代表操作完毕的 Promise。

快进和暂停也是命令功能的重要部分，为了实现快进，需要将命令设置到最终状态，为了实现暂停，需要让命令停止执行后续代码。

如果能够拿到 Promise，并自己决定后续代码的执行时机就再好不过了，正巧，JavaScript 中有生成器函数可以实现这个目的。

使用生成器函数实现暂停和快进，可以避免为了统一控制 Promise 编写大量重复的代码，同时通过减少不必要的异步回调，提高了性能。

<details>
<summary>点击展开/收起代码</summary>

```ts
// Dynamic核心函数,实现了同步/异步转换
async function runGenerator<TRetrun>(
    generator: Generator<Promise<unknown>, TRetrun, void>,
    { rush, stop }: { rush: Promise<unknown>, stop: Promise<unknown> }
): Promise<TRetrun | undefined> {
    let flag: 'Normal' | 'Rush' | 'Stop' = 'Normal'

    while (true) {
        if (flag === 'Stop') return new Promise(noop)
        const { value, done } = generator.next()
        if (!done) {
            if (flag !== 'Rush') {
                flag = await Promise.race([
                    value.then(() => 'Normal' as const),
                    rush.then(() => 'Rush' as const),
                    stop.then(() => 'Stop' as const)
                ])
            }
        } else return value
    }
}
```

</details>

可以进一步发现，将设置命令到最终状态的代码置于统计命令执行时间的 yield 之后是可行的。

当命令正常执行完毕时，这段代码对命令的执行没有影响，当触发快进时，这段代码就起到了设置命令到最终状态的作用。

<details>
<summary>点击展开/收起代码</summary>

```ts
yield sequence.finished
sequence.seek(sequence.duration)
```

</details>

## 组合：等价的量变与质变

视觉小说中有很多效果都是通过命令的组合实现的，而命令也有可能由更基本的命令组合实现。

在对命令进行了性质上的区分之后，定义和优化的需求也要求命令更加原子化。

对于一个命令执行队列，要做的就是统计队列中所有命令的执行情况，当所有命令都执行完毕，命令队列也就执行完毕。

命令使用 Promise 反映执行情况，命令队列通过 Promise.all 统计执行情况，最终也返回一个 Promise。

当命令执行队列与普通命令接收相同的参数，并返回相同的 Promise 时，就可以认为命令执行队列是一个特殊的，运行命令的命令。

由此，命令执行队列也获得了在队列中运行另一个命令执行队列的能力，由于每一个命令都实现了快进和暂停，命令执行队列便也实现了快进和暂停。

## 剧本：抽象的断裂与统一

命令执行队列需要统计命令的执行情况，并且队列本身以异步方式运行，这使得命令无法像普通函数一样直接调用，而必须以某种方式提交 Promise 到队列中。

生成器函数在这时又可以发挥它的作用，通过 yield 收集 Promise，就不再需要命令使用方显式统计 Promise。

命令队列需要等待以阻塞模式运行的命令，命令内部实现决定了命令能否快进，而命令队列实际上只是 await 命令返回的 Promise。

为了在命令队列中获取命令的运行模式，命令还需要带有一些特殊标记，这些标记由命令的使用方指定，再传递到命令队列中。

既然命令队列本身不关心命令的运行模式，通过使用异步生成器函数，就可以抛去标记，使用真实的 await 在命令使用方实现阻塞。

但是，异步生成器函数的性质并没有预期的那样理想，在异步生成器函数中 yield 一个 Promise，不会将这个 Promise 作为普通值返回给命令队列，而是会阻塞的等待 Promise 解析，再将 Promise 的结果返回给命令队列。

为了解决这个问题，命令不再直接解析为一个 Promise，而是解析为一个需要 context 的异步函数，调用这个函数后命令开始运行。

由于命令队列本身也没有 context 可以提供，每个队列都会向执行它的父级队列要求 context ，直到根队列由当前幕提供 context 启动。

<details>
<summary>点击展开/收起代码</summary>

```ts
type StandardResolvedCommand<R> = Function1<GameRuntimeContext, Promise<R>>
type GameFragmentGenerator<R> = AsyncGenerator<StandardResolvedCommand<unknown>, R, unknown>
type GameFragment<R> = Function1<GameRuntimeContext, GameFragmentGenerator<R>>
function Fork<R>(fn: GameFragment<R>): StandardResolvedCommand<R> {
    return async (context) => {
        const generator = fn(context)
        const arr = Array<Promise<unknown>>()
        while (true) {
            const { value, done } = await generator.next(arr.slice(-1)[0])
            if (done) return Promise.all(arr).then(() => value)
            else arr.push(value(context))
        }
    }
}
```

</details>

通过 yield 传入 context，命令调用方也不再需要手动为命令传入 context，但是 await 不受生成器控制，不能自动传入 context。

如果在写 `yield cmd(args)` 的同时还需要写 `await cmd(args)(context)`，这很容易写错，而且 context 按幕更新，手动维护一个 context 变量是相当大的负担。

在当前实现中，实际上 `await yield cmd(args)` 与 `await cmd(args)(context)` 具有相同的含义，只是 TypeScript 不能在生成器函数中表达 yield 的输入类型与输出类型之间的关系，使用 yield 就只能手动指定输出类型，使得这种解决方案也不可用。

但……如果？如果使用编译器把 yield 隐去——总之它也返回与输入类型相同的类型，这样就重新获得了良好的类型提示，顺便每条命令要写一个 yield 的重复性工作也不需要了。

## 事件系统：状态机、回调注册

事件系统最初是为了在幕循环中处理外部输入而创建的，通过使用 await 对代码进行变换，可以更好的描述状态转移过程。

<details>
<summary>点击展开/收起代码</summary>

```ts
async function ActLoop(this: StarNightInstance) {
    // 等待游戏开始事件
    await this.GameEvents.onStart()
    // 不能在开始前结束游戏
    const onGameStop = this.GameEvents.onStop()
    while (true) {
        // 如果用户离开游戏界面,等待用户回来
        if (!this.isGameVisible()) await this.GameEvents.onActiveChange()
        // 开始运行命令队列
        await Fork(value)(context)
        if (this.state.isFast()) {
            // 在快进状态下等待一段时间
            await delay(this.context.config.fastreadspeed())
        } else if (this.state.isAuto()) {
            // 等待额外计时后再等待一段时间，之后如果还处于自动模式则resolve，否则继续等待自动事件
            const onAutoNext = Promise.resolve(output.extime())
                .then(() => delay(this.context.config.autoreadspeed()))
                .then(() => (!this.state.isAuto() ? this.ClickEvents.onAuto() : Promise.resolve()))
            // 在自动状态下等待步进、快进事件和 onAutoNext
            await Promise.race([this.ClickEvents.onStep(), onAutoNext, this.ClickEvents.onFast()])
        } else {
            // 在普通状态下等待步进、自动、快进事件
            await Promise.race([this.ClickEvents.onStep(), this.ClickEvents.onAuto(), this.ClickEvents.onFast()])
        }
        // 游戏实例已销毁时退出
        if (await PromiseX.isSettled(onGameStop)) return
    }
}
```

</details>

后来在实现命令的过程中，又发现需要在游戏运行的特定节点进行操作来实现某些命令行为。

由于多个命令可能共享同一个操作，并且事件总数较多，经过实践，最终也利用事件系统来实现。

通过事件系统注册事件，还可以实现优化：只有在需要某个命令时，才会引入对应的命令文件，这时命令附带的事件就会被自动注册，反之，未使用的命令不会进行不必要的事件注册。

随着各个需求的出现，对应解决需求的事件也被添加到事件系统中。
