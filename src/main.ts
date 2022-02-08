import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import piniaStore from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPersistedState } from 'pinia-persistedstate-plugin'

const app = createApp(App)

piniaStore.use(<any>createPersistedState({ storage: window.sessionStorage }))
app.use(router)
app.use(piniaStore)
app.use(ElementPlus)
app.mount('#app')
