import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
    title: '星夜引擎',
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
    dest: './docs',
    bundler: viteBundler(),
    base: '/StarNight-Engine-Doc/',
    theme: recoTheme({
        series: {
            '/guide/': [
                { text: '前言', link: '/guide/preface' },
                { text: '编写剧本', link: '/guide/scenario' },
                { text: '自定义项', link: '/guide/config' },
                { text: '发布游戏', link: '/guide/release' }
            ],
            '/extend/': [
                { text: '扩展命令', link: '/extend/script' },
                { text: '定制界面', link: '/extend/ui' },
                { text: '使用内核', link: '/extend/core' }
            ],
            '/info/': [
                { text: '开发计划', link: '/info/todo' },
                { text: '开发日志', link: '/info/log' }
            ]
        },
        navbar: [
            { text: '首页', link: '/' },
            { text: '基础使用', link: '/guide/preface' },
            { text: '扩展定制', link: '/extend/script' },
            { text: '开发信息', link: '/info/todo' },
            { text: 'Github', link: 'https://github.com/ahzvenol/StarNight-Engine' }
        ]
    })
})
