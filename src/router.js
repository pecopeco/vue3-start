import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('/@/views/home.vue')
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
