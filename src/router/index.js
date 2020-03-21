import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import RegisterForm from '../components/RegisterForm.vue'
import ListProducts from '../views/ListProducts.vue'
import Home from '../views/Home.vue'
import AddProductForm from '../components/AddProductForm.vue'
import EditProductForm from '../components/EditProductForm.vue'
import Dashboard from '../components/Dashboard.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
    // children: [
    //   {
    //     path: '/register',
    //     name: 'RegisterForm',
    //     component: RegisterForm
    //   }
    // ]
  },
  {
    path: '/register',
    name: 'RegisterForm',
    component: RegisterForm
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/products',
    name: 'ListProducts',
    component: ListProducts,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: Dashboard,
        name: 'Dashboard'
      },
      {
        path: '/addProductForm',
        component: AddProductForm,
        name: 'AddProductForm'
      },
      {
        path: '/editProductForm',
        component: EditProductForm,
        name: 'EditProductForm'
      }
    ]
  },
  // {
  //   path: '/products/addProductForm',
  //   name: 'AddProductForm',
  //   component: AddProductForm,
  //   meta: { requiresAuth: true }
  // },
  // {
  //   path: '/products/editProductForm',
  //   name: 'EditProductForm',
  //   component: EditProductForm,
  //   meta: { requiresAuth: true }
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { requiresAuth: true }
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
        path: '/'
      })
    }
  } else {
    next()
  }
})

export default router
