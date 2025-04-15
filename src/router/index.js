import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/corp.vue'),
    },
    {
      path: '/subreal',
      name: 'subreal',
      component: () => import('../pages/subreal.vue'),
    },
    {
      path: '/subzavod',
      name: 'subzavod',
      component: () => import('../pages/subzavod.vue'),
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
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../pages/menu.vue'),
    },
  ],
})

export default router
