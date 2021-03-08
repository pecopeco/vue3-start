let path = require('path')

module.exports = {
  base: './',
  alias: {
    '/@/': path.resolve(__dirname, 'src')
  },
  open: true,
  proxy: {
    '/api': {
      target: 'http://baidu.com',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  },
  css: {
    preprocessorOptions: {
      styl: {
        additionalData: `@import "@/style/color.styl";`
      }
    },
  }
}