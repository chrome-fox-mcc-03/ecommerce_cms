import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductCreate from '../components/ProductCreate'
import ProductList from '../components/ProductList'
import Dashboard from '../views/Dashboard'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: {
      name: 'Dashboard'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    },
    redirect: {
      name: 'ProductList'
    },
    children: [
      {
        path: 'create',
        component: ProductCreate,
        name: 'ProductCreate'
      },
      {
        path: 'products',
        component: ProductList,
        name: 'ProductList'
      },
      {
        path: 'products/:id',
        component: () => import('../components/ProductEdit.vue'),
        name: 'ProductEdit'
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('../components/Profile.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
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
