import { RouteRecordRaw } from 'vue-router'

/** 公共路由 */
export const basicRoutes: RouteRecordRaw[] = [
  {
    name: 'Login',
    path: '/',
    component: () => import('@/views/login/index.vue')
  },
  { path: '/:path(.*)*', redirect: '/' }
]
