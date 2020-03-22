import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import Home from '../views/Home.vue'
import Edit from '../components/Edit.vue'
import Products from '../views/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: Products,
    beforeEnter: (to, from, next) => {
      if (!localStorage.token) {
        next('/login')
        store.commit('SHOW_ERROR', 'Please login to access all books')
      } else {
        next()
      }
    }
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/Login.vue')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('../views/Register.vue')
      },
      {
        path: '',
        name: 'HomePage',
        component: () => import('../components/HomePage.vue')
      }
    ]
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit,
    beforeEnter: (to, from, next) => {
      if (!localStorage.token) {
        next('/login')
      } else {
        next()
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
