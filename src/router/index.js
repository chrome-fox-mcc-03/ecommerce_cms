import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import LogInPage from '../views/LogInPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import Dashboard from '../views/Dashboard.vue'
import NewProduct from '../views/NewProduct.vue'
import ProductList from '../views/ProductList.vue'
import EditProduct from '../views/EditProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: {
      requireLogin: false
    }
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
    meta: {
      requireLogin: false
    }
  },
  {
    path: '/login',
    name: 'LogInPage',
    component: LogInPage,
    meta: {
      requireLogin: false
    }
  },
  {
    path: '/home',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requireLogin: true
    },
    redirect: {
      name: 'ProductList'
    },
    children: [
      {
        path: 'list',
        component: ProductList,
        name: 'ProductList',
        meta: {
          requireLogin: true
        }
      },
      {
        path: 'new',
        component: NewProduct,
        name: 'NewProduct',
        meta: {
          requireLogin: true
        }
      },
      {
        path: 'productDetail/:id',
        component: EditProduct,
        name: 'DetailProduct',
        meta: {
          requireLogin: true
        }
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
  if (!localStorage.getItem('token') && to.meta.requireLogin) {
    next({ name: 'LogInPage' })
  } else if (localStorage.getItem('token') && !to.meta.requireLogin) {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router
