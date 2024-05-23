import { createApp } from 'vue'
import pinia from '../src/stores/index'

import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import './styles/style.css'

const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount('#app')
