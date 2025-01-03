## 配置CG鉴赏
打开`userData`文件夹中的`config.txt`,找到cg配置项,它看起来大概像这样
```js
cg: {
    type: "head",
    unlockMode: "allWatched",
    content: [
        ['evcg01', 'a', 'b', 'c', 'c2', 'd', 'e'],
        ['evcg02', 'a', 'b', 'c', 'c2', 'd', 'e']
    ]
}
```
`type`参数可以选择`"head"`或者`"full"`,意思是使用简写或者不使用简写<br/>
如果选择head,示例配置第一行对应的cg是`evcg01a,evcg01b,evcg01c,evcg01c2,evcg01d,evcg01e`<br/>
如果选择full,示例配置对应的cg是`evcg01,b,c,c2,d,e`<br/>
`unlockMode`参数可以选择`"allWatched"`、`"oneByone"`或者`manual`,分别对应<br/>
| 参数        | 功能         |
| -----------|:-------------:|
| allWatched | 这一组cg都在游戏中显示过后,解锁这组cg|
| oneByone   | 这组cg中的某个在游戏中显示过后,解锁这个cg,以此类推|
| manual     | 关闭自动cg解锁,你需要使用[解锁cg](#解锁cg)命令手动解锁cg|
`content`参数对应cg图片的名称,就是你在剧本中使用过的同名图片,不需要带后缀<br/>
`[]`中是一组cg,第一个`[]`对应UI中的第一个cg位置<br/>
## 配置全局字体
只需要向`userData`文件夹中放入字体文件,并在`config.txt`中找到对应配置项进行配置,示例如下
```js
font: Hannari.ttf
```
如果你向对不同的界面配置不同的字体,你需要去学习[编写UI](../extend/ui)