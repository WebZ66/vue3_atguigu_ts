import { RouteRecordRaw } from 'vue-router'

export const constRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login'
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    name: 'Home'
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404'
  },
  //任意路由，即都没匹配上
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any'
  }
]
