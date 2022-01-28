import { createRouter, createWebHistory } from 'vue-router'
import routes from './modules/root'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
