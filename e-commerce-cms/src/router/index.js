import Vue from 'vue'
import VueRouter from 'vue-router'
import SigninPage from '../views/SigninPage.vue'
import DashboardPage from '../views/DashboardPage.vue'
import AllProduct from '../components/AllProduct.vue'
import AddForm from '../components/AddForm.vue'
import EditForm from '../components/EditForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SigninPage',
    component: SigninPage
  },
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: DashboardPage,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        component: AllProduct,
        name: 'AllProduct'
      },
      {
        path: 'add',
        component: AddForm,
        name: 'AddForm'
      },
      {
        path: 'edit/:id',
        component: EditForm,
        name: 'EditForm'
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
        path: '/'
      })
    }
  } else {
    next()
  }
})

export default router
