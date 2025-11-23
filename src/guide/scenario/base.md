::: tip 注意
剧本是基于 JavaScript 的，但无需担心 —— 即使没有相关基础，只需花几分钟学习[基础语法](./code)即可轻松上手剧本编写。
:::

游戏的剧本应该放置于 `scenario` 文件夹中，游戏的资源应该放置于 `public/static` 文件夹中。

## 命令

使用命令操作舞台中的元素，基本格式是：`模式.命令名称(命令参数)`

`模式` 表示命令的执行方式，分为以下两种：

-   `$` 表示执行本条命令并立即继续向下执行
-   `$$` 表示等待本条命令完成再继续向下执行

不同命令支持的模式不同，有些可以选择两种模式之一，有些只能使用其中一种模式。

## 对话

对话是视觉小说中最高频的结构，所以拥有特殊简化的语法。

一条对话由三个部分组成，`` 角色`对话文本` + "对话配音" ``，如果没有配音文件，可以省略配音部分。

使用`$character`创建角色，下面的示例使用常量`noi`来保存这个角色，之后这个角色的对话就都可以使用`noi`简写。

```ts
const noi = $character("诺瓦")
noi`……我将踏上一段愉快的旅程。` + '/noi0001.flac'
```

对话默认以 `$` 模式运行，可以通过在对话前添加 `$:` 或 `$$:`，指定对话的执行模式。

### 文本样式

对话文本实际上被作为 [HTML](./code#html) 解析。

可以使用 `HTML标签` 或 `style属性` 来实现自定义的文本样式。

```ts
noi`<span style="color: red">这是一条<b>重要</b>的消息，需要你<i>特别</i>留意。</span>`
```

推荐通过辅助函数简化自定义文本样式的书写。

```ts
noi`${color`red``这是一条 ${b`重要`} 的消息，需要你 ${i`特别`} 留意。`}`
```

只需将下面的代码复制到剧本中即可使用辅助函数。

<details>
<summary>点击展开/收起代码</summary>

```ts
const build = (strings: TemplateStringsArray, values: any[]) =>
    strings.reduce((acc, str, i) => acc + str + (i < values.length ? values[i] : ''), '')

/**
 * 将文本显示为加粗文本。
 */
const b = (strings: TemplateStringsArray, ...values: any[]) => `<b>${build(strings, values)}</b>`;

/**
 * 将文本显示为斜体文本。
 */
const i = (strings: TemplateStringsArray, ...values: any[]) => `<i>${build(strings, values)}</i>`;

/**
 * 将文本显示为下划线文本。
 */
const u = (strings: TemplateStringsArray, ...values: any[]) => `<u>${build(strings, values)}</u>`;

/**
 * 将文本显示为删除线文本。
 */
const s = (strings: TemplateStringsArray, ...values: any[]) => `<s>${build(strings, values)}</s>`;

/**
 * 将文本显示为自定义颜色文本。
 * @example
 * color`red``这是一段红色文本`
 */
const color =
    (strings0: TemplateStringsArray, ...values0: any[]) =>
    (strings1: TemplateStringsArray, ...values1: any[]) =>
        `<span style="color: ${build(strings0, values0)}">${build(strings1, values1)}</span>`;

/**
 * 将文本显示为自定义样式文本。
 * @example
 * style`opacity: 0;``这是一段透明文本`
 */
const style =
    (strings0: TemplateStringsArray, ...values0: any[]) =>
    (strings1: TemplateStringsArray, ...values1: any[]) =>
        `<span style="${build(strings0, values0)}">${build(strings1, values1)}</span>`;

/**
 * 将文本显示为注音文本。
 * @example
 * ruby`zhù yīn``注音`
 */
const ruby =
    (strings0: TemplateStringsArray, ...values0: any[]) =>
    (strings1: TemplateStringsArray, ...values1: any[]) =>
        `<ruby>${build(strings1, values1)}<rt>${build(strings0, values0)}</rt></ruby>`;
```

</details>

## 幕

幕是剧情的基本单元，由若干条命令组成，幕中的命令执行完毕后，将等待用户点击进入下一幕。

对话如果没有指定执行模式，将自动划分出新的一幕；使用 `$action` 可以手动划分出新的一幕。

为了演出效果的方便，在一幕之中，没有创建对话之前，不会显示游戏的 UI 界面。

在划分第 1 幕之前，称为第 0 幕，可以用于设置舞台的初始状态。

```ts
$.设置背景({ 资源路径: '/黑色背景.webp' }) // 第0幕
noi`……我将踏上一段愉快的旅程。` // 第1幕
$.设置背景({ 资源路径: '/白色背景.webp' }) // 第1幕
noi`……与你一同的旅程。` // 第2幕
$.设置背景({ 资源路径: '/夜空背景.webp' }) // 第2幕
$action // 第3幕
$$.转场动画("BlindH8") // 第3幕；不显示 UI
$:noi`无论何时……都与你一起……` // 第3幕；显示 UI
```

## 剧本

剧本文件的命名格式为 `*.scenario.(js|ts|jsx|tsx)`，例如 `story.scenario.ts`。

`.scenario` 表示这是一个剧本文件，`.ts` 后缀表示所使用的 JavaScript 方言。

可以在剧本中使用除了 `export` 外的全部 JavaScript 功能，比如变量、分支和循环。

同时也可以选择启用某种方言特性，比如通过 TypeScript 使用类型标注。

剧情将从入口文件 `scenario/index.scenario.(mjs|js|mts|ts|jsx|tsx)` 开始。

### 拆分剧本

在剧本中使用 `$include` 将指定剧本的内容嵌入。

```ts
// scenario/index.scenario.tsx
$.设置背景({ 资源路径: '/黑色背景.webp' }) // 第0幕
noi`……我将踏上一段愉快的旅程。` // 第1幕
$include('./example.scenario.tsx')
$.设置背景({ 资源路径: '/夜空背景.webp' }) // 第2幕
```

```ts
// scenario/example.scenario.tsx
$.设置背景({ 资源路径: '/白色背景.webp' }) // 第1幕
noi`……与你一同的旅程。`  // 第2幕
```

### 调试剧本

在剧本中使用 `$debugger` 让剧情从指定位置开始。

```ts
noi`……我将踏上一段愉快的旅程。`
noi`……与你一同的旅程。`
$debugger // 剧情将从这里开始
noi`无论何时……都与你一起……`
```

### 剧情分支

在剧本中使用[分支语句](./code#分支)实现剧情分支。

下面的示例通过[用户选择](./api#用户选择)命令获取用户选择的选项，通过其他命令可以获取用户提供的更多信息。

```ts
const chosen = $$.用户选择([
                { 标签: '*そのまま渡す', 描述文本: '直接给她' },
                { 标签: '*振ってから渡す', 描述文本: '晃晃再给她' }
            ])
if (chosen === '*そのまま渡す') { /* 选择'直接给她'的分支剧情 */ }
else if (chosen === '*振ってから渡す') { /* 选择'晃晃再给她'的分支剧情 */ }
```

### 系统变量

在剧本中使用 `$store` 获取包括设置，存档在内的全部游戏数据。

```ts
system`当前游戏名称为：${$store.system.name}`
```

在剧本中使用 `$context` 获取游戏实例当前的运行时数据。

```ts
system`当前游戏状态为：${$context.state.now()}`
```

## 参数

命令有一些常见的参数命名,以下说明它们代表的含义。

### 标识符

标识符，或者说 ID，用于后续操作时引用这个元素。

### 作用目标

操作元素的命令需要这个参数，填入目标的标识符。

### 持续时间

持续时间参数的单位为毫秒，具体作用参看命令说明。

### 资源路径

`public/static` 文件夹中的资源，填写时由 `/` 开头。

比如 `public/static/咕.mp3` ，填写为 `/咕.mp3` 。
