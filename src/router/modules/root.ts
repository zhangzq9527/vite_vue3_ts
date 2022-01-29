import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routers: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
  },
]

export default routers
