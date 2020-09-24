import { createApp } from 'vue'
import App from '/@/App.vue'
import router from '/@/router'
import store from '/@/store'
import mixin from '/@/mixin'
import Vant from 'vant'
import 'vant/lib/index.css'

import navBar from '/@/components/navBar.vue'


window.api =
  process.env.NODE_ENV !== 'production'
  ? '/api'
  : process.env.VUE_APP_MODE === 'test'
  ? 'https://test.baidu.com'
  : 'https://baidu.com'

document.body.addEventListener('touchstart', () => {})
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.2 + 'px'

mixin.methods.setHttp()

const app = createApp(App)

app.use(Vant)
app.use(router)
app.use(store)
app.mixin(mixin)
app.component('navBar', navBar)

app.mount('#app')
