import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import Vant from 'vant'
import 'vant/lib/index.css'

import navBar from '@/components/navBar.vue'

document.body.addEventListener('touchstart', () => {})
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.2 + 'px'

const app = createApp(App)

app.use(Vant)
app.use(router)
app.use(store)
app.component('navBar', navBar)

app.mount('#app')
