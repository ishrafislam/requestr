import { createApp } from 'vue'
import { createConvexVue } from 'convex-vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const convexVue = createConvexVue({
  url: import.meta.env.VITE_CONVEX_URL,
})

app.use(convexVue)
app.use(router)
app.mount('#app')
