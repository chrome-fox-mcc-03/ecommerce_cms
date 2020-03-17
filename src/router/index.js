import Vue from 'vue'
import VueRouter from 'vue-router'
import ListUser from '../views/ListUser'
import ListProduct from '../views/ListProduct'
import Dashboard from '../views/Dashboard'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/users',
    name: 'ListUser',
    component: ListUser,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('access_token')
      if (token) {
        next()
      } else {
        this.$router.push('/login')
      }
    }
  },
  {
    path: '/products',
    name: 'ListProduct',
    component: ListProduct,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('access_token')
      if (token) {
        next()
      } else {
        this.$router.push('/login')
      }
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('access_token')
      if (token) {
        next()
      } else {
        this.$router.push('/login')
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
