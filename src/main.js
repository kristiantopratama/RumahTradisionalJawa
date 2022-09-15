import { createApp } from 'vue'
import store from './store'
import { createPinia } from 'pinia'

import './assets/style.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store)

app.mount('#app')
