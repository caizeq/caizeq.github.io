const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  name: 'vuepress-plugin-live2dModel',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ],
  globalUIComponents: 'Live2dModel',
});