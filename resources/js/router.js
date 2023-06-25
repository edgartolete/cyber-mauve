import { createRouter, createWebHistory } from 'vue-router'
import Login from './auth/Login.vue'
import Register from './auth/Register.vue'
import Home from './pages/Home.vue'
import Clients from './pages/Client.vue'
import Users from './pages/User.vue'
import Billing from './pages/Billing.vue'
import Account from './pages/Account.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/clients', name: 'clients', component: Clients},
    {path: '/users', name: 'users', component: Users},
    {path: '/billing', name: 'billing', component: Billing},
    {path: '/account', name: 'account', component: Account},
    {path: '/register', name: 'register', component: Register},

    {path: '/login', name: 'login', component: Login},
  ]
})

export default router;

