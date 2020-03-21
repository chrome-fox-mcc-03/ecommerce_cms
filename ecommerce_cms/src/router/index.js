import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import ListProduct from '../views/ListProduct.vue'
import UploadPage from '../views/UploadPage.vue'
import UpdatePage from '../views/UpdatePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
    meta: {
      requiresLogout: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: {
      requiresLogout: true
    }
  },
  {
    path: '/product',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'productList',
        component: ListProduct
      },
      {
        path: 'add',
        name: 'uploadPage',
        component: UploadPage
      },
      {
        path: 'edit/:id',
        name: 'updatePage',
        component: UpdatePage
      }
    ],
    meta: {
      requiresAuth: true
    }
  }
  // {
  //   path: '/dogs',
  //   name: 'dogs',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/DogList.vue'),
  //   children: [
  //     {
  //       path: '',
  //       name: 'Dog Profile',
  //       component: () => import(/* webpackChunkName: "about" */ '../components/DogProfile.vue')
  //     }
  //   ] //children bakal di load didalam komponen DogList kalo ada router-view
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else if (to.matched.some(record => record.meta.requiresLogout)) {
    if (!localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/product'
      })
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
