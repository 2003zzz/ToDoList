import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import store from './store/index.js'
import Home from './Pages/Home.vue'
import About from './Pages/About.vue';
import Telephone from './Pages/Telephone.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', name: 'home', component: Home },  
        { path: '/about', name: 'about', component: About },
        { path: '/telephone', name: 'telephone', component: Telephone },
    ]
  })

const app = createApp(App)
.use(store)
.use(router)

app.mount('#app')
