(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{281:function(t,a,s){"use strict";s.r(a);var r=s(13),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"快速开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),a("p",[t._v("下载"),a("a",{attrs:{href:""}},[t._v("星夜引擎的发行版")]),a("br"),a("br"),t._v("\n解压文件,打开userData文件夹中的config.txt,配置你的游戏信息")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Game_name:咸鱼生活 //你的游戏名称,会显示在浏览器的标签页上\nGame_key:996icu_xco //如果在同一域名同一目录下有多个游戏,则需要配置此项,不理解则请忽略\nTitle_img:Title2.png; //起始页的背景，文件放在/image 文件夹\nTitle_bgm:夏影.mp3; //起始页的背景音乐，文件放在/audio 文件夹\n")])])]),a("p",[t._v("复制以下内容到同一文件夹下的script.txt")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('----\n@显示对话 名称:咸鱼 文字:"Hello World!"\n@更改背景 文件:saltlife.jpg\n@放置立绘 名称:咸鱼 文件:saltfish\\fish.jpg x:640 y:640\n----\n')])])]),a("p",[t._v("运行WebGal.exe,会自动打开浏览器(如果没有请手动"),a("a",{attrs:{href:"localhost:8888"}},[t._v("打开")]),t._v(")"),a("br"),t._v('\n点击"开始游戏",显示如下:'),a("s",[t._v("一张图片,之后截")])]),t._v(" "),a("h2",{attrs:{id:"需要了解的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需要了解的概念"}},[t._v("#")]),t._v(" 需要了解的概念")]),t._v(" "),a("h4",{attrs:{id:"命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令:")]),t._v(" "),a("p",[t._v('参考接下来的"命令"部分,操作某个元素(如音乐,图片等)的指令就称为命令')]),t._v(" "),a("h4",{attrs:{id:"幕"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#幕"}},[t._v("#")]),t._v(" 幕:")]),t._v(" "),a("p",[t._v("一次点击被称为一幕,在一幕中可以有任意多个命令,在玩家进行点击操作后,对应幕中的命令将会执行"),a("br"),t._v("\n如果第二次点击时命令还未执行完毕,则会将命令全部执行而不会进入下一幕")]),t._v(" "),a("h4",{attrs:{id:"删除线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除线"}},[t._v("#")]),t._v(" 删除线:")]),t._v(" "),a("p",[t._v("你可能会在文档中看到不少删除线,这不代表删除了,而是代表"),a("strong",[t._v("还没做")]),a("br"),t._v("\n之后找到更好的方式会修改掉")]),t._v(" "),a("h2",{attrs:{id:"剧本基本格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#剧本基本格式"}},[t._v("#")]),t._v(" 剧本基本格式")]),t._v(" "),a("p",[t._v("星夜引擎的剧本格式非常简单,如下所示")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("命令名称")])]),t._v(" 命令参数"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("参数值 命令参数"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("参数值 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//注释")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("命令名称")])]),t._v(" 命令参数"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("参数值 命令参数"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("参数值\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n")])])]),a("p",[a("code",[t._v("----")]),t._v("用于分割不同的幕"),a("br"),t._v(" "),a("code",[t._v("//")]),t._v("用于注释,在它之后的内容会被引擎忽略"),a("br"),t._v("\n举个实际栗子")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("更改背景")])]),t._v(" 文件"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("saltlife"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jpg\n"),a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("放置立绘")])]),t._v(" 名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("咸鱼 文件"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("saltfish\\fish"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jpg x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("显示对话")])]),t._v(" 名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("咸鱼 文字"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"啊这...\\n摸了!"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//完工,睡觉")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n")])])]),a("p",[a("code",[t._v("saltfish\\fish.jpg")]),t._v("代表引擎目录下 saltfish文件夹中的fish.jpg"),a("br"),t._v(" "),a("code",[t._v('""')]),t._v("代表一段连续文本,如果文本含有空格或"),a("a",{attrs:{href:"#%E5%BC%95%E5%8F%B7%E7%9A%84%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF"}},[t._v("容易引起歧义的时候")]),t._v('则需要用""包裹'),a("br"),t._v("\n在文本中使用"),a("code",[t._v("\\n")]),t._v("来换行,如果想在"),a("code",[t._v('""')]),t._v("包裹的文本中使用"),a("code",[t._v('"')]),t._v(",则需要写成"),a("code",[t._v('\\"')]),a("br"),a("br"),t._v("\n命令参数的顺序是随意的,所以这样也是正确的(...表示省略的上下文)"),a("br"),t._v("\n不过,推荐使用一个固定的参数顺序")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("...\n@放置立绘 文件:saltfish\\fish.jpg x:640 名称:咸鱼 y:640\n...\n")])])]),a("p",[t._v("一行只能有一条命令,"),a("s",[t._v("或用 ; 分割")]),a("br")]),t._v(" "),a("h2",{attrs:{id:"命令参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令参数"}},[t._v("#")]),t._v(" 命令参数")]),t._v(" "),a("p",[t._v("星夜引擎提供的命令具有统一的参数名称,所有命令参数及其含义如下所示"),a("br"),t._v("\n接下来的"),a("a",{attrs:{href:"#%E5%91%BD%E4%BB%A4-2"}},[t._v("命令")]),t._v("只会提到这些参数,你可以先看一看这些参数,也可以直接进入"),a("a",{attrs:{href:"#%E5%91%BD%E4%BB%A4-2"}},[t._v("命令")]),t._v("的学习")]),t._v(" "),a("h3",{attrs:{id:"文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本"}},[t._v("#")]),t._v(" 文本")]),t._v(" "),a("p",[t._v("一段文本,这个参数只在"),a("a",{attrs:{href:"#%E5%AF%B9%E8%AF%9D%E5%92%8C%E8%AF%AD%E9%9F%B3"}},[t._v("对话和语音")]),t._v("命令中出现"),a("br"),t._v("\n这个参数是一个文本值")]),t._v(" "),a("h3",{attrs:{id:"名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名称"}},[t._v("#")]),t._v(" 名称")]),t._v(" "),a("p",[t._v("给当前命令操作的元素命名,如"),a("a",{attrs:{href:"#%E6%94%BE%E7%BD%AE%E7%AB%8B%E7%BB%98"}},[t._v("放置立绘")]),a("br"),t._v("\n也可能直接显示在游戏上,"),a("a",{attrs:{href:"#%E6%98%BE%E7%A4%BA%E5%AF%B9%E8%AF%9D"}},[t._v("显示对话")]),a("br"),t._v("\n这个参数是一个文本值")]),t._v(" "),a("h3",{attrs:{id:"目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),a("p",[t._v('在一个命令为元素命名后,使用这个参数来明确"我要操作目标元素"'),a("br"),t._v("\n这个参数是一个文本值")]),t._v(" "),a("h3",{attrs:{id:"文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[t._v("#")]),t._v(" 文件")]),t._v(" "),a("p",[t._v("告诉命令要使用哪个文件,或者,如果你想更详细的区分文件类型,你也可以使用"),a("br"),t._v(" "),a("code",[t._v("音频:xxx")]),t._v(" "),a("code",[t._v("视频:xxx")]),t._v(" "),a("code",[t._v("图片:xxx")]),t._v(" 它们完全等价于 "),a("code",[t._v("文件:xxx")]),a("br"),t._v("\n但它们也只是起到一个标注作用,并不会去校验这个文件到底是什么类型"),a("br"),t._v(" "),a("s",[t._v("或许以后会更新校验功能,并在IDE提示中发挥作用")]),a("br"),t._v("\n这个参数是一个文本值")]),t._v(" "),a("h3",{attrs:{id:"坐标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#坐标"}},[t._v("#")]),t._v(" 坐标")]),t._v(" "),a("p",[t._v("相对于游戏画面左上角的坐标,在如"),a("a",{attrs:{href:"#%E6%94%BE%E7%BD%AE%E7%AB%8B%E7%BB%98"}},[t._v("放置立绘")]),t._v("等图像操作的命令中应用"),a("br"),t._v("\n包含 "),a("code",[t._v("x:xxx")]),t._v(" 和 "),a("code",[t._v("y:xxx")]),t._v(" 两个"),a("br"),t._v("\n这个参数是一个数字")]),t._v(" "),a("h3",{attrs:{id:"时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间"}},[t._v("#")]),t._v(" 时间")]),t._v(" "),a("p",[t._v("持续时间,淡入时间,等待时间等等,都属于这个参数"),a("br"),t._v("\n这个参数的格式如 "),a("code",[t._v("时间:5s")]),t._v(" ,代表5秒"),a("br"),t._v("\n如果需要一分钟以上的时长比如一分三十秒,则需要手动换算为90s"),a("br"),t._v("\n不可省略"),a("code",[t._v("s")]),a("br"),t._v("\n这个参数是一个文本值")]),t._v(" "),a("h3",{attrs:{id:"缓动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓动"}},[t._v("#")]),t._v(" 缓动")]),t._v(" "),a("p",[t._v("缓动函数是一种算法,用于设置淡入淡出等效果"),a("br"),t._v("\n可用的缓动函数请参考"),a("a",{attrs:{href:"https://www.xuanfengge.com/easeing/easeing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("缓动函数速查表"),a("OutboundLink")],1),a("br"),t._v("\n你需要填入的值是链接展示的缓动函数之一,如"),a("code",[t._v("easeInSine")]),a("br"),t._v(" "),a("s",[t._v("暂时不支持直接使用贝塞尔曲线")]),a("br"),t._v("\n这个参数是一个文本值")]),t._v(" "),a("h2",{attrs:{id:"命令-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令-2"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),a("h3",{attrs:{id:"对话和语音"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对话和语音"}},[t._v("#")]),t._v(" 对话和语音")]),t._v(" "),a("h4",{attrs:{id:"命令名称-对话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令名称-对话"}},[t._v("#")]),t._v(" 命令名称"),a("code",[t._v("@对话")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("功能")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("文本")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在对话框中展示文本")])]),t._v(" "),a("tr",[a("td",[t._v("名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在对话框中展示人物名称")])]),t._v(" "),a("tr",[a("td",[t._v("文件")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("播放人物语音")])])])]),t._v(" "),a("p",[t._v("一幕中只允许有一条对话"),a("br"),t._v("\n或参考"),a("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E7%AD%89%E5%BE%85%E5%A4%84%E7%90%86%E7%89%B9%E6%AE%8A%E6%83%85%E5%86%B5"}},[t._v("特殊情况")]),a("br"),t._v("\n使用演示")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("对话")])]),t._v(" 名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("鸽子 文字"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("咕咕咕 文件"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("咕"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mp3\n")])])]),a("p",[t._v("其中"),a("code",[t._v("名称")]),t._v("和"),a("code",[t._v("文件")]),t._v("是可空参数,所以你也可以这样写")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("对话")])]),t._v(" 文字"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("咕咕咕\n")])])]),a("p",[t._v("如果你省略了名称参数,它将继承前一幕的名称"),a("br"),t._v("\n如果你想将对话框中的人物名称设置为空,则需要这样写: "),a("code",[t._v('名称:""')]),a("br"),t._v("\n之后不再重复演示可空参数的用法"),a("br"),t._v(" "),a("code",[t._v("文件")]),t._v("参数的其他写法"),a("a",{attrs:{href:"#%E6%96%87%E4%BB%B6"}},[t._v("参考")])]),t._v(" "),a("h3",{attrs:{id:"更改背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改背景"}},[t._v("#")]),t._v(" 更改背景")]),t._v(" "),a("h3",{attrs:{id:"放置立绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#放置立绘"}},[t._v("#")]),t._v(" 放置立绘")]),t._v(" "),a("h3",{attrs:{id:"关闭立绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭立绘"}},[t._v("#")]),t._v(" 关闭立绘")]),t._v(" "),a("h3",{attrs:{id:"移动图片元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动图片元素"}},[t._v("#")]),t._v(" 移动图片元素")]),t._v(" "),a("h3",{attrs:{id:"抖动图片元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抖动图片元素"}},[t._v("#")]),t._v(" 抖动图片元素")]),t._v(" "),a("h3",{attrs:{id:"播放背景音乐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#播放背景音乐"}},[t._v("#")]),t._v(" 播放背景音乐")]),t._v(" "),a("h3",{attrs:{id:"播放环境音"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#播放环境音"}},[t._v("#")]),t._v(" 播放环境音")]),t._v(" "),a("h3",{attrs:{id:"播放视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#播放视频"}},[t._v("#")]),t._v(" 播放视频")]),t._v(" "),a("h3",{attrs:{id:"跳转选项与跳转标识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳转选项与跳转标识"}},[t._v("#")]),t._v(" 跳转选项与跳转标识")]),t._v(" "),a("h3",{attrs:{id:"等待"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#等待"}},[t._v("#")]),t._v(" 等待")]),t._v(" "),a("h4",{attrs:{id:"使用等待处理特殊情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用等待处理特殊情况"}},[t._v("#")]),t._v(" 使用等待处理特殊情况")]),t._v(" "),a("h2",{attrs:{id:"拆分剧本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拆分剧本"}},[t._v("#")]),t._v(" 拆分剧本")]),t._v(" "),a("p",[t._v("在script.txt的第一行中标识脚本顺序,举例")]),t._v(" "),a("div",{staticClass:"language-haskell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-haskell"}},[a("code",[t._v("咕咕咕"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("txt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("gugu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("txt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" 场景"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("txt")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" 场景"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("txt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" 场景"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("txt")]),t._v("\n")])])]),a("p",[t._v("可以使用空格使格式更整齐,也可以不使用空格"),a("br"),t._v("\n之后不要在script.txt中写其他字符了,否则可能会引发错误")]),t._v(" "),a("h2",{attrs:{id:"使用ide提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用ide提示"}},[t._v("#")]),t._v(" 使用IDE提示")]),t._v(" "),a("p",[t._v("只需要安装"),a("a",{attrs:{href:""}},[t._v("VSCode")]),t._v(",并在VSCode中安装"),a("a",{attrs:{href:""}},[t._v("插件")]),t._v(",即可使用提示功能"),a("br"),t._v("\n在剧本中输入@即可获得所有命令的提示,"),a("s",[t._v("暂时不支持宏命令")]),t._v(",用↑↓键选择一个命令,按Enter键输入"),a("br"),t._v("\n这时光标会自动移动到第一个参数处并给出可能的提示,输入参数的值,按Tab键即可切换到下一个参数"),a("br"),t._v('\n如果你同时有其他代码编写需求,可以把剧本的格式从.txt改为.sne,并在插件中设置"代码提示"'),a("br"),t._v("\n这个插件还提供一定的语法高亮和错误检查功能"),a("br"),a("br"),t._v("\n另外,VSCode本身也支持一些方便的快捷键,具体可以查找"),a("a",{attrs:{href:"https://www.baidu.com/s?wd=vscode%E5%B8%B8%E7%94%A8%E5%BF%AB%E6%8D%B7%E9%94%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度"),a("OutboundLink")],1),a("br"),t._v("\n猜测可能常用以下快捷键")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("向上/向下移动行 Alt+ ↑ / ↓\n向上/向下复制行 Shift+Alt + ↓ / ↑\n在文件内查找替换 Ctrl + F\n")])])]),a("h2",{attrs:{id:"命令调用链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令调用链"}},[t._v("#")]),t._v(" 命令调用链")]),t._v(" "),a("h2",{attrs:{id:"别名-宏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#别名-宏"}},[t._v("#")]),t._v(" 别名(宏)")]),t._v(" "),a("p",[t._v("在userData文件夹中的macro.txt配置宏,你应该会看到很多已经配置好的宏"),a("br"),t._v("\n新建一个空白行以编写你自己的宏")]),t._v(" "),a("h3",{attrs:{id:"配置与使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置与使用"}},[t._v("#")]),t._v(" 配置与使用")]),t._v(" "),a("p",[t._v("宏在剧本中有非常丰富的应用场景,星夜引擎的宏定义方式如下")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("结果字符串 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" 原字符串 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//宏支持注释")]),t._v("\n烤"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("串 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" 羊肉"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("串 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//宏支持插值表达式")]),t._v("\n")])])]),a("p",[t._v("一行定义一个宏,如果宏中需要换行使用"),a("code",[t._v("\\n")]),a("br"),t._v(" "),a("code",[t._v("=>")]),t._v("两侧的空格是必须的"),a("br"),t._v(" "),a("s",[t._v("虽然 => 的语法限制可以避免大多数错误,但是仍然不允许在宏中定义一个 => ,用字符串包裹宏会产生更多问题,还在研究处理中")]),a("br"),t._v("\n以上两个宏应用在剧本中会产生这样的效果")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//你看到的剧本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("对话")])]),t._v(" 文字"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("结果字符串\n"),a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("对话")])]),t._v(" 文字"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("烤白薯串\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//编译结果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("对话")])]),t._v(" 文字"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("原字符串\n"),a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("对话")])]),t._v(" 文字"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("羊肉白薯串\n")])])]),a("p",[t._v("如果宏要操作一个被"),a("code",[t._v('""')]),t._v("包裹的文本,需要使用插值语法"),a("code",[t._v("{{}}")])]),t._v(" "),a("div",{staticClass:"language-wiki extra-class"},[a("pre",{pre:!0,attrs:{class:"language-wiki"}},[a("code",[t._v('@对话 文字:"结果字符串'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("{{结果字符串}}")]),t._v('"\n')])])]),a("p",[t._v("这段剧本的编译结果为")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('@对话 文字:"结果字符串原字符串"\n')])])]),a("p",[t._v('宏在"'),a("a",{attrs:{href:"#%E5%AE%8F%E5%9C%A8%E5%BC%95%E6%93%8E%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8"}},[t._v("宏在引擎中的应用")]),t._v('"中还有丰富的使用实例')]),t._v(" "),a("h3",{attrs:{id:"使用英文命令和英文参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用英文命令和英文参数"}},[t._v("#")]),t._v(" 使用英文命令和英文参数")]),t._v(" "),a("p",[t._v("只需在macro.txt中删除"),a("code",[t._v("//中文转换")]),t._v("以下的所有预定义宏即可,如果你已经对宏有足够的了解,也可以按需删除")]),t._v(" "),a("h3",{attrs:{id:"使用其他风格的命令语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用其他风格的命令语法"}},[t._v("#")]),t._v(" 使用其他风格的命令语法")]),t._v(" "),a("p",[t._v("星夜引擎提供了一些其他风格的命令语法,要注意的是,这些语法风格并不能被"),a("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8IDE%E6%8F%90%E7%A4%BA"}},[t._v("代码提示插件")]),t._v("很好的识别"),a("br"),t._v("\n下载对应的宏定义并复制到macro.txt即可使用")]),t._v(" "),a("h4",{attrs:{id:"webgal风格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webgal风格"}},[t._v("#")]),t._v(" WebGAL风格")]),t._v(" "),a("p",[t._v("格式:"),a("code",[t._v("command:content -parameter1 -parameter2 ......;")]),a("br"),t._v("\n这个风格不支持自定义的参数顺序,但是也不需要关心参数的名称"),a("br")]),t._v(" "),a("h3",{attrs:{id:"宏在引擎中的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏在引擎中的应用"}},[t._v("#")]),t._v(" 宏在引擎中的应用")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("这是一个扩展内容")])]),t._v(" "),a("h2",{attrs:{id:"引号的使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引号的使用场景"}},[t._v("#")]),t._v(" 引号的使用场景")])])}),[],!1,null,null,null);a.default=e.exports}}]);