import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      meta: { headerPhone: '+7(4722) 33-38-38' },
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
