import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installIcon from './icon'
import './assets/main.css'
import store from './store/index'
import './api/mock'

const app = createApp(App)

app.use(router).use(installIcon).use(store)

app.mount('#app')
