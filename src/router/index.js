import Vue from 'vue'
import VueRouter from 'vue-router'
import AllLanding from '../views/AllLanding.vue'
import ProductDashboard from '../views/ProductDashboard.vue'
import ProductList from '../views/ProductList.vue'
import ProductAdd from '../components/ProductAdd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AllLanding',
    component: AllLanding
  },
  {
    path: '/products',
    name: 'ProductsParent',
    component: ProductDashboard,
    children: [
      {
        path: 'add',
        component: ProductList,
        name: 'ProductList'
      },
      {
        path: 'add',
        component: ProductAdd,
        name: 'ProductAdd'
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
