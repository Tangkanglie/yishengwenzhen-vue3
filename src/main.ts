import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import './styles/style.css'

const app = createApp(App)
app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)

app.mount('#app')
