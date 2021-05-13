import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import('../views/QRCode/Download.vue')
  },
  {
    path: '/i-bon',
    name: 'Ibon',
    component: () => import('../views/QRCode/Ibon.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/Terms/Index.vue')
  },
  {
    path: '/survey',
    name: 'Survey',
    component: () => import('../views/Survey/Index.vue'),
  },
  {
    path: '/complete',
    name: 'Complete',
    component: () => import('../views/Survey/Complete.vue')
  },
  {
    path: '/shop-signup',
    name: 'ShopSignup',
    component: () => import('../views/ShopSignup/Index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
