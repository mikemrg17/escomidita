import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) return { el: to.hash, behavior: "smooth" }
    window.scrollTo(0, 0)
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LogInView.vue') 
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
  ]
})

export default router
