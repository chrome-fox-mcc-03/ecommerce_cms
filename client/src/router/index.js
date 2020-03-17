import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ListProducts from '../views/ListProducts'
import AddProduct from '../views/AddProduct'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/login',
  name: 'Login',
  component: Login
}, {
  path: '/register',
  name: 'Register',
  component: Register
}, {
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard,
  meta: {
    requiresAuth: true
  },
  children: []
}, {
  path: '/products',
  name: 'ListProducts',
  component: ListProducts,
  meta: {
    requiresAuth: true
  }
}, {
  path: '/products/add',
  name: 'AddProducts',
  component: AddProduct,
  meta: {
    requiresAuth: true
  }
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log(to.matched.some(record => record.meta.requiresAuth))
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login'
        // query: {
        //   redirect: to.fullPath
        // }
      })
    }
  } else {
    next()
  }
})

export default router
