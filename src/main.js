import { createApp } from 'vue'
import App from '/@/App.vue'
import router from '/@/router'

document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.2 + 'px'

createApp(App).use(router).mount('#app')
