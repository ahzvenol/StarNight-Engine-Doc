## 创作者工具

Node.js 的替代品 [Bun](https://github.com/oven-sh/bun)是一个单文件程序，它在项目中放置真实的包而不是符号链接。

这意味着 Bun 不需要安装就可以使用，如果携带 node_modules，在离线设备上也能运行项目。它使得以源码分发引擎成为可能。

通过源码分发来接入现代工具链的好处是显著的，因为所有工具都是为处理源代码而设计的，面对编译后的产物，缺乏合适的处理方案。

创作者工具需要实现内置 Bun 可执行文件，通过图形化界面调用 Bun 运行 package.json 中的 scripts，让零基础用户也能轻松启动和构建项目。

[Microsoft VS Code](https://code.visualstudio.com/)是一款免费的代码编辑器，拥有一流的插件生态，可以为剧本编写提供丰富的智能提示和其他便捷功能。

创作者工具需要实现内置 VS Code 和实用插件，添加剧本、配置等常见文件“在编辑器中打开”的图形化快捷方式，简化用户自行配置编辑器和了解项目结构的时间成本。

## Apk 打包工具

Apk 打包流程与 Android Studio 深度绑定，同时需要下载数量众多，体积庞大的依赖项。

对于本项目而言，常规用例不需要改动安卓层面的代码，简化繁琐的 Apk 打包流程是有意义的。

具体实现已经有可用的[参考](https://github.com/OpenWebGAL/webgal-apk-build-tool)，只需要将它重构为通用的打包工具，开发中的分支在这个[仓库](https://github.com/ahzvenol/apk-build-tool)。

## 剧本多语言支持

通过编译器从代码中提取文本，生成 `.po` 文件交由翻译人员处理，是前端流行的多语言解决方案。

只需要引入一个这样的[库](https://github.com/wuchalejs/wuchale)，将它应用于剧本，在切换语言时自动存档并重新运行剧本，就可以实现基本的多语言支持。

## 更好的命令组合性

剧本通过提取 `src` 字段分析资源，变量插值的资源路径是不可预测的，但是对于常量插值，如果能将常量内联到字符串再进行分析，还有进一步优化的空间。

通过函数封装多个命令时，无法传递阻塞状态，如果在剧本中非阻塞的调用带有阻塞的函数，会发生未定义行为，如果能将将函数内联展开，可以避免这种意外。

## UI 可视化编辑工具

UI 可视化编辑的理想方案，是类似于[网页设计软件](https://www.figma.com)，但是能直接修改现有代码中样式的工具。

实现这样一个工具的工作量不是本项目能够具备的，不过，现在已经有了这样一个开源工具 [Onlook](https://github.com/onlook-dev/onlook)。

比较可惜，它现在还只支持 React 项目，不过同为 JSX，可以期待今后会有对 Solidjs 的支持。

## 集成 GeckoView

虽然 Web 跨平台技术十分火热，但是令人惊讶的是在移动端并没有一个成熟的集成内核方案。

iOS 强制要求使用系统提供的 WebKit 内核，对此的确没有什么可以做的。

安卓山头林立的定制 WebView 则对 Web 应用提出了严峻的兼容性要求，为了保证游戏能够在全部用户的设备上正常运行，集成内核是必要的。

目前已经做了一些工作，发布在这个[仓库](https://github.com/ahzvenol/WebTemplate)中，但是还需要更多的测试和反馈。

另外一种内核选择是[X5 内核](https://www.cnblogs.com/xiangyuecn/p/13450916.html)，它相比 GeckoView 体积小得多，不过我没能成功使用它。

将 GeckoView 融入现有跨平台生态是更远大的目标，其中一个方向是[与 Capacitor 集成](https://github.com/Web-Media-Foundation/infrastructure/tree/master/packages/capacitor-geckoview)。

## 剧本图形化编辑工具

对于 JavaScript/TypeScript 这种广泛使用的编程语言，有成熟的代码分析工具链可以利用。

如果未来有图形化编辑工具的开发计划，或许可以通过识别命令特征，从语言服务器获取代码提示，再交由图形化界面展示的思路实现。
