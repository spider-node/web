/**
 * 基础的配置文件
 */
import {defaultTheme, defineUserConfig} from 'vuepress'

export default defineUserConfig({
    /**
     * 网站语言
     */
    lang: 'zh-CN',
    /**
     * 网站标题
     */
    title: 'spider-node-业务系统首选架构',

    /**
     * 网站叙述
     * description 等同于 README.md 中的 tagline: 【如果两个同时存在，README.md文件中的优先于config.ts】
     */
    // description: '这是我的第一个 VuePress 站点',

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        /**
         * 网站logo [注意：图片需要存放在public下]
         */
        ['link', {rel: 'icon', href: 'images/header-logo.png'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],

    /**
     * 排除文件访问路径
     */
    pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],
    /**
     * 默认主题配置
     */
    theme: defaultTheme({
        /**
         * 导航栏logo [注意：图片需要存放在public下]
         */
        logo: 'images/header-logo.png',

        /**
         * 导航
         */
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '认识spider',
                link: '/know/', // 以"/"结束 默认读取 README.md
            },
            {
                text: '文档',
                link: '/use/', // 以"/"结束 默认读取 README.md
            },
            {
                text: 'spider-ui',
                link: '/uiUse/', // 以"/"结束 默认读取 README.md
            },
            {
                text: '加入我们',
                link: '/choose/', // 以"/"结束 默认读取 README.md
            },
            {
                text: 'github',
                link: 'https://github.com/spider-node/spider-node-community/tree/main', // 以"/"结束 默认读取 README.md
            }
        ],
    }),

})