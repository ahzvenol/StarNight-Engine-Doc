module.exports = {
    title: 'StarNight Engine',
    head: [['link', { rel: 'icon', href: '/favicon.png', type: 'image/png', sizes: '16x16' }]],
    port: 8888,
    locales: {
        // 站点多语言配置
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
            title: 'StarNight Engine',
            description: ''
        }
    },
    // base: '/StarNight-Engine-Doc/',
    themeConfig: {
        displayAllHeaders: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '基础使用', link: '/guide/preface' },
            { text: '扩展定制', link: '/extend/script' },
            { text: '开发日志', link: '/info/todo' },
            { text: 'Github', link: 'https://github.com/ahzvenol/StarNight-Engine' }
        ],
        sidebar: {
            '/guide/': [
                { title: '前言', path: '/guide/preface' },
                {
                    title: '编写剧本',
                    collapsable: false,
                    children: [
                        { title: '基础入门', path: '/guide/scenario/base' },
                        { title: '实用技巧', path: '/guide/scenario/tips' },
                        { title: '参考示例', path: '/guide/scenario/example' },
                        { title: '命令手册', path: '/guide/scenario/api' },
                        { title: 'JavaScript 基础', path: '/guide/scenario/code' }
                    ]
                },
                { title: '自定义项', path: '/guide/config' },
                { title: '发布游戏', path: '/guide/release' }
            ],
            '/extend/': [
                { title: '扩展命令', path: '/extend/script' },
                { title: '定制界面', path: '/extend/ui' },
                { title: '使用内核', path: '/extend/core' }
            ],
            '/info/': [
                { title: '开发计划', path: '/info/todo' },
                { title: '开发经验', path: '/info/log' }
            ]
        }
    }
}
