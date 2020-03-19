import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '../store/index'
import ProductList from '../views/ProductList'
import AddProduct from '../views/AddProduct'

Vue.use(VueRouter)
function isAuthenticated (to, from, next) {
  if (store.getters.isLogin) {
    next()
  } else {
    next({
      path: '/login'
    })
  }
}

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    component: Home,
    beforeEnter: isAuthenticated,
    children: [
      {
        path: '',
        redirect: 'product'
      },
      {
        path: 'product',
        name: 'ProductList',
        component: ProductList
      },
      {
        path: 'addproduct',
        name: 'AddProduct',
        component: AddProduct
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
