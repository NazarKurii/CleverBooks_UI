import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { usePageStore } from './stores/pageStore'
import { initUser } from './components/scripts/page'

async function initApp() {
  const app = createApp(App)
  const pinia = createPinia()

  app.use(pinia)
  app.use(router)

  axios.defaults.baseURL = 'http://localhost:8080'
  await initUser()
  const page = usePageStore()
  axios.defaults.headers.common.Authorization = page.token
  await page.init()

  app.mount('#app')
}

initApp()
