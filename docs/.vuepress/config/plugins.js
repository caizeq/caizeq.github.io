const musicplayer = require('./vuepress-plugin-musicplayer');
const live2dMdel = require('./vuepress-plugin-live2d-model')
const plugins = [
    // ['@vuepress/pwa', {
    //     serviceWorker: true, //用于缓存页面的内容以供离线使用
    //     updatePopup: true
    // }],
    [ musicplayer, {}],
    [ live2dMdel, {}],
    ['one-click-copy', {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功~~', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
    ['@vuepress/last-updated',{
        transformer: (timestamp) => {
        const dayjs = require('dayjs')
        return dayjs(timestamp,).format('YYYY-MM-DD HH:mm')
        }
    }],
]

module.exports = plugins;