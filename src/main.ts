import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { useUserStorage } from './stores/userStore'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

axios.defaults.baseURL = 'http://localhost:8080'

axios.defaults.headers.common.Authorization = useUserStorage().token

app.mount('#app')
