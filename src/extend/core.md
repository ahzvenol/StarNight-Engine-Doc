## 功能介绍

`@starnight/core` 实现了视觉小说运行的核心机制，它与其他部分的实现基本解耦。

`ClickEvents` 中定义了步进、自动和快进三个基本动作，通过 `publish` 触发。

`script`剧本、`config`设置、`local`存档数据、`global`全局数据，以及部分`ui`数据，都由外部传入。

需要传入的内容取决于引入的命令，每个命令都定义了自身运行需要的数据，并通过 TypeScript 反映到代码提示中。

在存档时，需要保存的数据是实例的 `current` 属性，根据特定的需求，也可以对当前的游戏画面进行保存来实现存档缩略图。

通过将 `StarNight.useReactive` 赋值为一个可用的 [useReactive 实现](https://github.com/ahzvenol/micro-reactive-w/blob/main/packages/wrapper/README_ZH.md)来实现响应式。

这个函数用于把数据包装成 [MICRO REACTIVE](https://github.com/ahzvenol/micro-reactive-w) 风格的数据，如果没有进行赋值，默认实现为非响应式的。

命令会修改全局数据和 UI 数据，通过响应式监听就可以及时的存储数据和更新视图。
