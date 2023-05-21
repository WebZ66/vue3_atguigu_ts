import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { constRoutes } from './constRoutes'

//创建路由器
let router = createRouter({
  history: createWebHistory(),
  routes: constRoutes,
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})

export default router
