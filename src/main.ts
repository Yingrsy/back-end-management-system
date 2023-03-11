import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installIcon from './icon'
import './assets/main.css'
import store from './store/index'
import './api/mock'
import Cookie from 'js-cookie'

const app = createApp(App)
store.commit('tab/addMenu',router)
app.use(router).use(installIcon).use(store)
router.beforeEach((to, from) => {
  const token = Cookie.get('token')
  if (!token && to.name !== 'SystemLogin') {
    return {name: 'SystemLogin'}
  } else if (token && to.name === 'SystemLogin') {
    return {name: ''}
  }
})

app.mount('#app')

