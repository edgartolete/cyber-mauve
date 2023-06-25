import { createRouter, createWebHistory } from 'vue-router'
import Login from './auth/Login.vue'
import Register from './auth/Register.vue'
import Dashboard from './pages/Dashboard.vue'
import Profile from './pages/Profile.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/register', name: 'register', component: Register},
    {path: '/dashboard', name: 'dashboard', component: Dashboard},
    {path: '/login', name: 'login', component: Login},
    {path: '/profile', name: 'profile', component: Profile},
  ]
})

export default router;

