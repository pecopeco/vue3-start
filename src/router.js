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
      path: '/about',
      name: 'about',
      component: () => import('/@/views/about.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('/@/views/my.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('/@/views/detail.vue')
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
