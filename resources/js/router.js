import { createRouter, createWebHistory } from 'vue-router'
import Login from './auth/Login.vue'
import Register from './auth/Register.vue'
import Home from './pages/Home.vue'
import Dashboard from './layout/Main.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/dashboard', name: 'dashboard', component: Dashboard},
    {path: '/register', name: 'register', component: Register},
    {path: '/login', name: 'login', component: Login},
  ]
})

export default router;

