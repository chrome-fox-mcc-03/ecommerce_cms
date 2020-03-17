import Vue from 'vue'
import VueRouter from 'vue-router'
import AllLanding from '../views/AllLanding.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AllLanding',
    component: AllLanding
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
