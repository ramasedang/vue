import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/localClock',
    name: 'localClock',
    component: () => import(/* webpackChunkName: "localClock" */ '../views/AboutView.vue')
  },
  {
    path: '/countdown',
    name: 'countdown',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
