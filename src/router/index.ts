import { createRouter, createWebHistory } from 'vue-router'
import SystemMain from '../views/SystemMain.vue'
import SystemHome from '../views/SystemHome.vue'
import GoodsManage from '../views/GoodsManage.vue'
import UserManage from '../views/UserManage.vue'
import SystemSetting from '../views/other/SystemSetting.vue'
import PageTwo from '../views/other/PageTwo.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SystemMain',
      component: SystemMain,
      children: [
        {
          path: 'home',
          name: 'SystemHome',
          component: SystemHome
        },
        {
          path: 'goods',
          name: 'GoodsManage',
          component: GoodsManage
        },
        {
          path: 'user',
          name: 'UserManage',
          component: UserManage
        },
        {
          path: 'setting',
          name: 'SystemSetting',
          component: SystemSetting
        },
        {
          path: 'page2',
          name: 'PageTwo',
          component: PageTwo
        }
      ]
    },
  ]
})

export default router
