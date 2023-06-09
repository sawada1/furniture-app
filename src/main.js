import { createApp } from 'vue'
import'./sass/main.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

createApp(App).use(store).use(router).mount('#app')
