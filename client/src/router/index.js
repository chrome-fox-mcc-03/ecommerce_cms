import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage'
import RegisterPage from '../views/RegisterPage'
import DashboardPage from '../views/DashboardPage'
import ProductPage from '../views/ProductPage'
import ProductAddPage from '../views/ProductAddPage'
import ProductGetPage from '../views/ProductGetPage'
import ProductEditPage from '../views/ProductEditPage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'loginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'registerPage',
    component: RegisterPage
  },
  {
    path: '/dashboard',
    name: 'dashboardPage',
    component: DashboardPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/product',
    name: 'ProductPage',
    component: ProductPage,
    children: [
      {
        path: '',
        name: 'ProductGetPage',
        component: ProductGetPage
      },
      {
        path: 'add',
        name: 'ProductAddPage',
        component: ProductAddPage
      },
      {
        path: 'edit',
        name: 'ProductEditPage',
        component: ProductEditPage
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
