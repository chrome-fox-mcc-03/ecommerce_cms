import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import MainPage from '../views/MainPage.vue'
import Product from '../components/Product.vue'
import AddProduct from '../components/AddProduct.vue'
import EditProduct from '../components/EditProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Login'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.token) {
        next({ path: '/mainpage' })
      } else {
        next()
      }
    }
  },
  {
    path: '/mainpage',
    name: 'MainPage',
    component: MainPage,
    meta: {
      requiresAuth: true
    },
    redirect: {
      name: 'Product'
    },
    children: [
      {
        path: 'product',
        name: 'Product',
        component: Product
      },
      {
        path: 'addproduct',
        name: 'AddProduct',
        component: AddProduct
      },
      {
        path: 'editproduct/:id',
        name: 'EditProduct',
        component: EditProduct
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
