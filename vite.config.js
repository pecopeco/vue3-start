import vue from '@vitejs/plugin-vue'
let path = require('path')

// https://vitejs.dev/config/
export default {
  base: './',
  alias: {
    '@': path.resolve(__dirname, 'src')
  },
  open: true,
  proxy: {
    '/api': {
      target: 'http://baidu.com',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  },
  plugins: [vue()]
}
