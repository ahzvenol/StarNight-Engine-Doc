## 鉴赏

在 `src/store/gallery.ts` 中配置鉴赏。

`cover` 配置该组鉴赏有元素解锁时的封面。

`uncover` 配置该组鉴赏没有元素解锁时的封面。

`items` 包含该组鉴赏的各个元素。

`url` 配置元素的资源路径，应该填写从public文件夹开始的完整路径。

`condition` 配置元素的解锁条件，在命令中使用过的资源路径会自动解锁。

#### 参考示例
```js
export const CG = [
  {
    cover: './static/初遇雪.webp',
    uncover: './static/未解锁.webp',
    items: [
      {
        url: './static/初遇雪.webp',
        condition: '/初遇雪.webp'
      },
      {
        url: './static/雪中漫步.webp',
        condition: '/雪中漫步.webp'
      }
    ]
  },
  {
    cover: './static/梦中花园.webp',
    uncover: './static/未解锁.webp',
    items: [
      {
        url: './static/梦中花园.webp',
        condition: '/梦中花园.webp'
      },
      {
        url: './static/花瓣雨.webp',
        condition: '/花瓣雨.webp'
      }
    ]
  }
]
```

## 默认设置

在 `src/store/default.ts` 中配置默认设置。

## 游戏信息

可以通过全局搜索 `StarNight Engine` 并替换它来设置游戏名称。

可以通过全局搜索 `starnight.org` 并替换它来设置游戏包名。