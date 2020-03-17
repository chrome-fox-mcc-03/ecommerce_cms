import Vue from 'vue'
import VueRouter from 'vue-router'
import SigninPage from '../views/SigninPage.vue'
import DashboardPage from '../views/DashboardPage.vue'
import AllProduct from '../components/AllProduct.vue'
import AddForm from '../components/AddForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signin/admin',
    name: 'SigninPage',
    component: SigninPage
  },
  {
    path: '/',
    name: 'DashboardPage',
    component: DashboardPage,
    children: [
      {
        path: 'all',
        component: AllProduct,
        name: 'AllProduct'
      },
      {
        path: 'add',
        component: AddForm,
        name: 'AddForm'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
