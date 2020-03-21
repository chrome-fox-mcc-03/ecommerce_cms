import Vue from 'vue'
import VueRouter from 'vue-router'
// import LandingPage from '../views/LandingPage.vue'
import VueToastify from 'vue-toastify'

Vue.use(VueToastify)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AdminPanel',
    component: () => import('../views/AdminPanel'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('../components/Chart'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../components/Products'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/add',
    name: 'CreatePanel',
    component: () => import('../components/CreatePanel'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'RegisterPanel',
    component: () => import('../components/RegisterPanel'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'LoginPanel',
    meta: {
      requiresAuth: false
    },
    component: () => import('../components/LoginPanel')
  },
  {
    path: '/products/:id',
    name: 'DetailProduct',
    component: () => import('../components/DetailProduct'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'edit',
        name: 'EditPanel',
        meta: {
          requiresAuth: true
        },
        component: () => import('../components/EditPanel')
      },
      {
        path: 'delete',
        name: 'DeleteConfirmation',
        meta: {
          requiresAuth: true
        },
        component: () => import('../components/DeleteConfirmation')
      }
    ]
  },
  {
    path: '/edit',
    name: 'EditPanel',
    meta: {
      requiresAuth: true
    },
    component: () => import('../components/EditPanel')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.access_token && to.path === '/login') {
      next({
        name: 'AdminPanel'
      })
    } else if (localStorage.access_token && to.path !== '/login') {
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
