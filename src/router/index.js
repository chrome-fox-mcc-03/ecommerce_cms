import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateItem from '../components/CreateItem.vue'
import ProductContainer from '../components/ProductContainer'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: {
      requiresAuth: true
    },
    redirect: {
      name: 'ProductContainer'
    },
    children: [
      {
        path: 'create',
        component: CreateItem,
        name: 'CreateItem'
      },
      {
        path: 'products',
        component: ProductContainer,
        name: 'ProductContainer'
      }
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      requiresAnon: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      requiresAnon: true
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "login" */ '../views/Logout.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('logout/dashboard : ngecek credential')
    if (localStorage.getItem('cms_client')) {
      const { token } = JSON.parse(localStorage.getItem('cms_client'))
      if (token) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    } else {
      next({
        path: '/login'
      })
    }
  } else if (to.matched.some(record => record.meta.requiresAnon)) {
    console.log('login/register: cek if already login')
    if (localStorage.getItem('cms_client')) {
      const { token } = JSON.parse(localStorage.getItem('cms_client'))
      if (token) {
        next({ name: 'Dashboard' })
      } else {
        next()
      }
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
