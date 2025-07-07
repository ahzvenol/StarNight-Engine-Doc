module.exports = {
    title: '星夜引擎',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png', sizes: '16x16' }]
    ],
    port: 8888,
    locales: { // 站点多语言配置
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
            title: 'StarNight Engine',
            description: ''
        }
    },
    dest: './docs',
    base: '/StarNight-Engine-Doc/',
    extraWatchFiles: [],
    // theme: '@vuepress-theme-default', // 主题
    themeConfig: {
        search: false, // 禁用默认的搜索框
        nextLinks: true, // 显示上一篇链接
        prevLinks: true,
        // sidebar: 'auto', // 自动显示
        // sidebar: [ // 全部显示
        //     '/guide/',
        //     '/config/base/',
        //     'config/high/'
        // ],
        sidebar: {
            '/guide/': [
                { title: '前言 · 关于引擎', path: '/guide/preface' },
                { title: '编写剧本', path: '/guide/scenario' },
                { title: '自定义项', path: '/guide/config' },
                { title: '发布游戏', path: '/guide/release' },
            ],
            '/extend/': [
                { title: '定制命令', path: '/extend/script' },
                { title: '定制UI', path: '/extend/ui' },
            ],
            '/info/': [
                { title: '开发计划', path: '/info/todo' },
                { title: '开发日志', path: '/info/log' },
            ]
        },
        sidebarDepth: 2, // 最大的深度为 2
        search: true,
        // navbar: true, // 禁用导航栏
        displayAllHeaders: true, // 显示所有页面的标题链接 默认值：false 
        locales: { // 默认主题多语言配置
            '/': {
                // selectText: '选择语言',
                // label: '简体中文',
                nav: [
                    { text: '首页', link: '/' },
                    { text: '基础使用', link: '/guide/' },
                    { text: '扩展定制', link: '/extend/' },
                    { text: '开发信息', link: '/info/' },
                    { text: 'Github', link: 'https://github.com/ahzvenol/StarNight-Engine' },
                    // {
                    //     text: '更多',
                    //     items: [{
                    //             text: '加入讨论群',
                    //             items: [
                    //                 { text: ''},
                    //             ]
                    //         },
                    //         {
                    //             text: '关注开发者',
                    //             items: [
                    //                 { text: 'Bilibili', link: '' },
                    //                 { text: 'Github', link: '' },
                    //             ]
                    //         },
                    //     ]
                    // }
                ],
                // lastUpdated: false, // string | boolean
            },
        }
    }
}