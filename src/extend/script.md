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

对于 `Math.random` 或者 `prompt` 这类输出不确定的函数，应该将函数结果保存到存档，再在初始化时恢复。

在初始化的过程中加载资源是不必要的，特殊处理它们也是必要的优化，通常会将加载延迟到初始化完毕的时候。

### 具体细节

有四个函数可以用于实现命令，通过 `Args` 定义命令所需的参数，并在 `args` 中访问这些参数，`context` 用于访问游戏实例上下文。

```ts
Dynamic<Args>((context) => function* (args) { /* 命令具体实现 */ })
DynamicBlocking<Args>((context) => function* (args) { /* 命令具体实现 */ })
NonBlocking<Args>((context) => (args) => { /* 命令具体实现 */ })
Blocking<Args>((context) => async (args) => { /* 命令具体实现 */ })
```

`NonBlocking` 定义一个无阻塞的命令，这种命令类型用于即时操作。

如果没有封装的需求，将这类操作代码直接写在剧本当中也是可以的。

`Blocking` 定义一个阻塞的命令，这种命令类型用于需要等待 Promise 结果的操作。

阻塞命令将阻塞它所在的命令执行队列，在初始化时也同样如此，所以阻塞命令应该对初始化状态做特殊处理以避免影响初始化工作。

`Dynamic` 定义一个动态命令，这种命令类型用于具有一定执行时间的操作。

在使用动态命令时，需要将代表命令执行时间的 Promise 通过 `yield` 提交，在 yield 之后定义将命令执行到最终状态的代码。

在提交的 Promise 被 resolve 之后或者命令被快进时，yield 之后的代码将会执行，这也意味着 Promise 只能代表执行时间而不能获取返回值。

`DynamicBlocking` 定义一个动态的阻塞命令，这种命令类型以阻塞的方式运行，但是在快进时可以自动的解除阻塞。

通过以下接口定义命令所需的变量，之后就可以在 `context` 中看到这些变量。

```ts
// 游戏实例数据，通过 context.current 和 context.local 访问
// 游戏实时数据将保存在 context.current 中，旧游戏实例的 context.current 作为新游戏实例的 context.local 传入
interface GameLocalData {}
// 游戏全局数据，通过 context.global 访问
interface GameGlobalData {}
// 游戏实例临时数据，通过 context.temp 访问
interface GameTempData {}
// 游戏外部UI数据，由外部传入，通过 context.ui 访问
interface GameUIExternalData {}
// 游戏内部UI数据，由内部设置，通过 context.ui 访问
interface GameUIInternalData {}
```

除了在 `GameUIExternalData` 中定义的变量由外部传入之外，其余变量都应该在 `StarNight.GameEvents.setup` 事件中进行初始化。

在命令中常用下列这些事件，需要注意事件是在游戏运行过程中被调用的，需要避免进行高开销操作。

```js
/** 游戏实例创建时触发，用于初始化游戏数据 */
StarNight.GameEvents.setup
/** 游戏实例初始化完毕时触发，用于延迟加载 */
StarNight.GameEvents.ready
/** 游戏实例挂起时触发，用于暂停命令执行 */
StarNight.GameEvents.suspend
/** 游戏实例恢复时触发，用于恢复命令执行 */
StarNight.GameEvents.resume
/** 游戏实例终止时触发，用于清理副作用 */
StarNight.GameEvents.exit
/** 一幕开始时触发，用于重置单幕有效的数据 */
StarNight.ActEvents.start
```

### 参考示例

以下是一个简化的 audio 命令，它需要进行这些工作：

-   为音乐轨道定义临时变量并在游戏创建创建音乐轨道。
-   在命令被调用时判断游戏当前状态，决定是否懒加载。
-   在游戏初始化完毕时开始加载和播放音乐。
-   在游戏挂起时暂停播放音乐。
-   在游戏恢复时恢复播放音乐。
-   在游戏终止时彻底卸载音乐。

```ts
import { NonBlocking, StarNight } from '@starnight/core'
```

```ts
declare module '@starnight/core' {
    interface GameTempData {
        audios: Map<string, Howl>
    }
}
```

```ts
StarNight.GameEvents.setup.subscribe(({ temp }) => (temp.audios = new Map()))
StarNight.GameEvents.ready.subscribe(({ temp: { audios } }) => audios.forEach((audio) => audio.load().play()))
StarNight.GameEvents.suspend.subscribe(({ temp: { audios } }) => audios.forEach((audio) => audio.pause()))
StarNight.GameEvents.resume.subscribe(({ temp: { audios } }) => audios.forEach((audio) => !audio.playing() && audio.play()))
StarNight.GameEvents.exit.subscribe(({ temp: { audios } }) => audios.forEach((audio) => audio.unload()))
```

```ts
NonBlocking<{ id: string, src: string }>(
    ({ state, temp: { audios } }) =>
        ({ id, src }) => {
            audios.set(id, Howl({ src, preload: !state.isInitializing() }))
        }
)
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
$执行.我的命令()
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

比如 `动效动画` 命令，它播放一段位移动画，但位移的总和为0，就可以使用 `EffectScope`。

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