import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/corp.vue'),
    },
    {
      path: '/corp',
      name: 'corp',
      component: () => import('../pages/corp.vue'),
    },
    {
      path: '/real',
      name: 'real',
      component: () => import('../pages/real.vue'),
    },
    {
      path: '/zavod',
      name: 'zavod',
      component: () => import('../pages/zavod.vue'),
    },
  ],
})

export default router
