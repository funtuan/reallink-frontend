import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/Shopcode',
    name: 'Shopcode',
    component: () => import('../views/Shopcode.vue')
  },
  {
    path: '/contributes',
    name: 'Contributes',
    component: () => import('../views/Contributes.vue')
  },
  {
    path: '/download/:code/:secret',
    name: 'Download',
    component: () => import('../views/QRCode/Download.vue')
  },
  {
    path: '/ibon/:code',
    name: 'Ibon',
    component: () => import('../views/QRCode/Ibon.vue')
  },
  {
    path: '/t/:code',
    name: 'Terms',
    component: () => import('../views/Terms/Index.vue')
  },
  {
    path: '/shopTerm',
    name: 'ShopTerms',
    component: () => import('../views/Terms/Shop.vue')
  },
  {
    path: '/survey/:code',
    name: 'Survey',
    component: () => import('../views/Survey/Index.vue'),
  },
  {
    path: '/complete/:code',
    name: 'Complete',
    component: () => import('../views/Survey/Complete.vue')
  },
  {
    path: '/fast/:code',
    name: 'Fast',
    component: () => import('../views/Survey/Fast.vue')
  },
  {
    path: '/shop-signup',
    name: 'ShopSignup',
    component: () => import('../views/ShopSignup/Index.vue')
  },
  {
    path: '/dashboard/:code/:secret',
    name: 'Dashboard',
    component: () => import('../views/Dashboard/Index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
