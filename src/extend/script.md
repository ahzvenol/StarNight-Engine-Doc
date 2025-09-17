::: tip 注意
阅读本篇教程需要具备基本的 JavaScript 编程能力
:::

::: tip 注意
本篇教程使用 TypeScript 进行教学，如果使用 JavaScript，可以省略关于类型的步骤。
:::

## 实现命令

实现命令所需的内容位于 `@starnight/core`。

### 基本原则

在星夜中，读档的本质是高速快进，命令实现就是围绕解决快进和读档中的问题进行的。

为命令传入固定的输入，应该得到固定的输出，否则每次读取存档就会得到不同的结果。

资源加载在初始化过程中是不必要的，需要特殊处理它们，通常会将加载延迟到初始化完毕的时候。

### 命令类型

有四个函数可以用于实现命令，通过 `Args` 定义命令所需的参数，并在 `args` 中访问这些参数，`context` 用于访问游戏实例上下文。

```ts
Dynamic<Args>((context) => function* (args) { /* 命令具体实现 */ })
DynamicBlocking<Args>((context) => function* (args) { /* 命令具体实现 */ })
NonBlocking<Args>((context) => (args) => { /* 命令具体实现 */ })
Blocking<Args>((context) => async (args) => { /* 命令具体实现 */ })
```

-   **`NonBlocking`**：定义不阻塞执行队列的命令，适用于无需跟踪执行时间的即时操作。

    符合 `NonBlocking` 性质的代码也可以作为普通函数直接写入剧本，但仍然要注意特殊处理资源加载。

-   **`Dynamic`**：定义可选阻塞或不阻塞执行队列的命令，适用于需要跟踪执行时间的操作。

    通过 `yield` 提交代表操作完毕的 Promise ，这个表达式不会返回 Promise 的结果。

    Promise resolve 或者触发快进时，yield 之后的代码将会执行，通过在这里定义设置最终状态的代码来实现命令效果的快进。

-   **`Blocking`**：定义阻塞执行队列的命令，适用于需要等待 Promise 结果的操作。

    通过 `await` 等待 Promise 的结果，但需要确保初始化状态下没有耗时 await。

-   **`DynamicBlocking`**：实现方式与 `Dynamic` 一致，但是限制命令只能以阻塞执行队列的方式运行。

执行队列就像这样：

```
时间轴：→
NonBlocking: ┴───────────────────────────┴
NonBlocking: ┴────────────┴
Blocking   : ┴───────────────────────┴
NonBlocking: ────────────────────────┴───┴
NonBlocking: ────────────────────────┴────────┴
Blocking   : ────────────────────────┴─────────────┴
NonBlocking: ──────────────────────────────────────┴────────┴
```

### 数据定义

通过以下接口定义命令所需的数据，之后就可以在 `context` 中看到这些数据。

-   `GameLocalData`:  
    游戏本地数据，通过 `context.current` 和 `context.local` 访问。  
    游戏实时数据存储在 `context.current` 中，需要存档的数据保存在这里。  
    旧游戏实例的 `context.current` 作为新游戏实例的 `context.local` 传入。

-   `GameGlobalData`:  
    游戏全局数据，通过 `context.global` 访问。

-   `GameTempData`:  
    游戏实例临时数据，通过 `context.temp` 访问。

-   `GameUIExternalData`:  
    游戏外部 UI 数据，由外部传入，通过 `context.ui` 访问。

-   `GameUIInternalData`:  
    游戏内部 UI 数据，由内部设置，通过 `context.ui` 访问。

除 `GameUIExternalData` 由外部传入外，其余数据都需要在 `StarNight.GameEvents.setup` 事件中进行初始化。

### 游戏事件

在命令中常用下列这些事件，需要注意应当避免在事件回调中进行高开销操作。

-   `StarNight.GameEvents.setup`：游戏实例创建时触发，用于初始化游戏数据
-   `StarNight.GameEvents.ready`：游戏实例初始化完毕时触发，用于延迟加载
-   `StarNight.GameEvents.suspend`：游戏实例挂起时触发，用于暂停命令执行
-   `StarNight.GameEvents.resume`：游戏实例恢复时触发，用于恢复命令执行
-   `StarNight.GameEvents.exit`：游戏实例终止时触发，用于清理命令效果
-   `StarNight.ActEvents.start`：一幕开始时触发，用于重置单幕有效的数据

### 参考示例

#### Wait

以下是一个简化的 wait 命令，它可以让它之后的命令等待指定的时间后再执行，实现它需要进行这些工作：

-   分析命令功能，它需要阻塞所在的执行队列，但不需要等待 Promise 结果。
-   定义命令为 `DynamicBlocking`，通过`Dynamic`的机制自动实现快进解除阻塞。
-   通过 `yield` 提交代表命令执行时间的 Promise，它的执行时间就是传入的 duration。

```ts
DynamicBlocking<number>(
    () =>
        function* (duration) {
            yield new Promise((res) => setTimeout(res, duration))
        }
)
```

#### Audio

以下是一个简化的 audio 命令，具有播放音乐的功能，实现它需要进行这些工作：

-   为音乐轨道定义临时数据并在游戏创建时初始化数据。

```ts
declare module '@starnight/core' {
    interface GameTempData {
        audios: Map<string, Howl>
    }
}
StarNight.GameEvents.setup.subscribe(({ temp }) => (temp.audios = new Map()))
```

-   在游戏初始化完毕时开始加载和播放音乐。
-   在游戏挂起时暂停播放音乐。
-   在游戏恢复时恢复播放音乐。
-   在游戏终止时彻底卸载音乐。

```ts
StarNight.GameEvents.ready.subscribe(({ temp: { audios } }) => audios.forEach((audio) => audio.load().play()))
StarNight.GameEvents.suspend.subscribe(({ temp: { audios } }) => audios.forEach((audio) => audio.pause()))
StarNight.GameEvents.resume.subscribe(({ temp: { audios } }) => audios.forEach((audio) => !audio.playing() && audio.play()))
StarNight.GameEvents.exit.subscribe(({ temp: { audios } }) => audios.forEach((audio) => audio.unload()))
```

-   播放音乐是一个即时操作，所以定义命令为 `NonBlocking`。
-   在命令被调用时判断游戏当前状态，决定是否延迟资源加载。

```ts
NonBlocking<{ id: string, src: string }>(
    ({ state, temp: { audios } }) =>
        ({ id, src }) => {
            audios.set(id, Howl({ src, preload: !state.isInitializing() }))
        }
)
```

## 绑定 UI

命令通常需要与 UI 交互，使用 `GameUIInternalData` 定义命令的 UI 相关数据。

通过使用 `HTMLElement` 或 `Reactive<T>` 实现在数据变动时更新 UI。

Reactive 意为响应式数据，使用 `StarNight.useReactive` 创建，它的使用方式如下：

```ts
// 创建响应式对象
const primitive = useReactive(1)
const reference = useReactive({ children: { number: 1 } })
// 读取响应式对象
primitive()
// 解构响应式对象
const { number } = reference.children
// 修改响应式对象
// 通过直接传入新值
reference({ children: { number: 2 } })
// 通过传入函数，获取到当前值并返回新值
number((i) => i + 1)
```

### 参考示例

#### Iframe

以下是一个简化的 iframe 命令，具有嵌入页面的功能，实现它需要进行这些工作：

-   为命令所需的信息定义响应式数据并在游戏创建时初始化数据。

```ts
declare module '@starnight/core' {
    interface GameUIInternalData {
        iframe: Reactive<null | ({ src: string } & { resolve: (arg0: unknown) => void })>
    }
}
StarNight.GameEvents.setup.subscribe(({ ui }) => (ui.iframe = StarNight.useReactive(null)))
```

-   需要等待嵌入页面返回结果，所以定义命令为 `Blocking`。
-   嵌入页面的输出不是确定的，通过 `System.input` 存档输出，并确保不会阻塞初始化。

```ts
export const iframe = Blocking<IframeInput, unknown>(
    (context) =>
        async ({ src }) => {
            const { ui: { iframe } } = context
            const { promise, resolve } = Promise.withResolvers<unknown>()
            iframe(() => ({ src, resolve }))
            const res = await System.input(() => promise)(context)
            iframe(() => null)
            return res
        }
)
```

-   创建 `Iframe` UI 组件，编写 UI 组件的样式。

```scss
.Game_Iframe {
    position: absolute;
    width: 100%;
    height: 100%;
}
```

-   在 UI 中绑定响应式数据，通过 iframe 标签加载页面，处理页面输入并回传结果。

```tsx
export const Iframe: Component = () => {
    return (
        <div class={styles.Game_Iframe}>
            <iframe
                class={styles.Game_Iframe}
                src={ui().iframe()!.src}
                onMessage={(event) => ui().iframe()!.resolve(event.data)}
            />
        </div>
    )
}
```

-   在 游戏的根 UI 组件 `Game` 中使用 `Iframe` 组件。

```tsx
export const Game: Component = () => {
    /* ...... */
    return (
        <Content>
            {/* ...... */}
            <Show when={ui().iframe() !== null}>
                <Iframe />
            </Show>
        </Content>
    )
}

```

## 使用命令

命令需要配合[模式前缀](/guide/scenario.html#命令)才能被剧本正确的识别和解析。

最简单的办法是找到目标语言的 `api` 文件，将命令引入其中并导出：

```ts
// src\scripts\custom.ts
import { NonBlocking } from '@starnight/core'

export const cmd = NonBlocking( /* ... */ )
```

```ts
// src\scripts\translations\ChineseSimplified\api.ts
import { Api } from '@/scripts/Translate'
import { cmd } from '@/scripts/custom'

export const 我的命令 = Api(cmd)
```

这样就可以在剧本中使用了

```ts
// scenario\index.scenario.tsx
$.我的命令()
```

## 性能优化

除了对于加载资源的必要优化之外，还可以通过分析命令产生的效果，进一步减少不必要的运行开销。

有三个内置函数可以利用：

```ts
/** 只在本幕内产生效果的命令，由此不需要初始化 */
function ActScope
/** 只在执行过程中产生效果的命令，这样的命令应当也是 ActScope 的 */
function EffectScope
/** 不产生任何效果的虚拟命令。 */
function VirtualScope
```

比如 `对话` 命令，前一幕的对话并不会继承到后一幕继续显示，就可以使用 `ActScope`。

比如 `动效动画` 命令，它播放一段位移动画，但位移的总和为 0，就可以使用 `EffectScope`。

如果这三个内置函数的定义都不符合命令的实际效果，也可以通过判断游戏状态手动进行优化。

比如 `Backlog` 命令，记录条数超过最大长度后，最早的记录将被移除，所以在超出范围的幕运行这个命令是没有意义的。

```
 ⎡─────── 被覆盖（无效） ───────⎤ ⎡─── 记录范围（5） ───⎤
 0    1    2    3    4    5    6    7    8    9   目标
─┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴─▶
```

```ts
if (游戏当前幕 <= 初始化目标幕 - Backlog最大长度) return
```
