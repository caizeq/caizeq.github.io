const path = require('path'); // 路径模块
const utilsRoot = path.join(__dirname, '..', '..','..', 'utils/modules');
const docsRoot = path.join(__dirname,'..', '..');
const readFile = require(utilsRoot + '/readFile');

const 指南 = readFile(docsRoot + '/指南');


const themeConfig = {
  editLinks: true,
  smoothScroll: true,
  lastUpdated: '最后更新时间',
  nav: [{
        text: '指南',
        link: '/指南/10.基础/01.介绍',
      }
  ],
  
  sidebar: {
    '/指南/': 指南,
  },
};

module.exports = themeConfig;
