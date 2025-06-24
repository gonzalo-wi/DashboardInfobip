import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // si estás usando Vue Router
import './assets/index.css' // 👈 importante para cargar Tailwind

const app = createApp(App)
app.use(router) // si usás Vue Router
app.mount('#app')