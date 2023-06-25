import { createRouter, createWebHistory } from 'vue-router'
import Login from './pages/Login.vue'
import Home from './layout/Main.vue'
import NotFound from './pages/NotFound.vue';
import TestLogin from './pages/TestLogin.vue';
import { useSessionStore } from './stores/sessionStore.js'





const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'home', component: Home, meta: {requiresAuth: true}},
    {path: '/login', name: 'login', component: Login},
    {path: '/:any', name: 'any', component: NotFound},
    {path: '/auto-login', name: 'auto-login', component: TestLogin},
  ]
})
router.beforeEach((to, from, next) => {

  let session = useSessionStore()
  const isLoggedIn = session.isLoggedIn;// Replace this with your authentication logic to determine if the user is logged in or not
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Route requires authentication
    if (isLoggedIn) {
      // User is logged in, proceed to the requested route
      next();
    } else {
      // User is not logged in, redirect to the login page
      next('/login');
    }
  } else {
    // Route does not require authentication
    if (isLoggedIn) {
      // User is logged in, redirect to the home page
      next('/');
    } else {
      // User is not logged in, proceed to the requested route
      next();
    }
  }
});

export default router;

