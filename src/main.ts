import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import { initUser } from './components/scripts/user'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

axios.defaults.baseURL = 'http://localhost:8080'
await initUser()
app.mount('#app')
