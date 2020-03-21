import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import landingPage from '../components/LandingPage.vue'
import History from '../components/History.vue'
import addProduct from '../components/addProduct.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'Product',
        name: 'Product',
        component: landingPage
      },
      {
        path: 'History',
        name: 'History',
        component: History
      },
      {
        path: 'AddProduct',
        name: 'AddProduct',
        component: addProduct
      },
      {
        path: 'Register',
        name: 'register',
        component: register
      }
    ],
    beforeEnter: (to, from, next) => {
      if (!localStorage.token) {
        router.push('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/Login',
    name: 'login',
    component: login,
    beforeEnter: (to, from, next) => {
      if (localStorage.token) {
        router.push('/admin/product')
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
