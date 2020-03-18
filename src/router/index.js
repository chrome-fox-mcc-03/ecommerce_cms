import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import ListUser from '../views/ListUser'
import ListProduct from '../views/ListProduct'
import Dashboard from '../views/Dashboard'
import Login from '../views/Login'
import CreateProduct from '../views/CreateProduct'
import DetailProduct from '../views/DetailProduct'
import EditProduct from '../views/EditProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('access_token')
      if (!token) {
        next()
      } else {
        router.push({ path: '/' })
      }
    }
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
  },
  {
    path: '/products/create',
    name: 'CreateProduct',
    component: CreateProduct,
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
    path: '/products/:id',
    name: 'DetailProduct',
    component: DetailProduct,
    children: [
      {
        path: 'edit',
        name: 'EditProduct',
        component: EditProduct
      }
    ],
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
