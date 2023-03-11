import { createRouter, createWebHistory } from 'vue-router'
import SystemMain from '../views/SystemMain.vue'
import SystemLogin from '../views/SystemLogin.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SystemMain',
      component: SystemMain,
      redirect: '/home',
      children: []
    },
    {
      path:'/login',
      name: 'SystemLogin',
      component: SystemLogin
    }
  ]
})

export default router
