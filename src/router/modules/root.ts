import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routers: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
  },
  {
    path: '/LoginIndex',
    name: 'LoginIndex',
    component: () => import('@/views/login/LoginIndex.vue'),
  },
]

export default routers
