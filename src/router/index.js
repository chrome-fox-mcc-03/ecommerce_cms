import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateItem from '../components/CreateItem.vue'
import EditItem from '../components/EditItem.vue'
import DeleteItem from '../components/DeleteItem.vue'
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
      },
      {
        path: 'edit/:id',
        component: EditItem,
        name: 'EditItem'
      },
      {
        path: 'delete/:id',
        component: DeleteItem,
        name: 'DeleteItem'
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = 'CMS 01'
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const storage = JSON.parse(localStorage.getItem('cms_client'))
    if (storage) {
      const { token } = storage
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
