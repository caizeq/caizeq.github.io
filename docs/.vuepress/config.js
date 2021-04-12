const plugins = require('./config/plugins');
const themeConfig = require('./config/theme');
module.exports = {
  // 项目路径
  base: '/caizq/',
  title: '个人博客',
  description: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
  head: [
    ['link', { rel: 'icon', href: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJxiaNo3EpfoFJay1BGroZemgeZDQSVlEORKT6fyc1AA1ZFicR8vg5FG1zKa9iaalWB3uZCVSPiaR8Jgg/132' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', {
        name: 'keywords',
        content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown'},
    ],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ['script', { async: 'async', src: 'https://hm.baidu.com/hm.js?662dade0b3fe9911e80442e86935e233'}],
  ],
  themeConfig,
  plugins
};