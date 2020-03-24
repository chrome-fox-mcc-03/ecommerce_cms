import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Dashboard from '../views/Dashboard.vue'
import Store from '../views/Store.vue'
import Product from '../components/Product.vue'
import Customer from '../components/Customer.vue'
import Home from '../components/Home.vue'
import Analystic from '../components/Analystic.vue'
import Order from '../components/Order.vue'
import DetailItem from '../components/DetailItem.vue'
import ListItem from '../components/ListItem.vue'
import IdItem from '../components/IdItem.vue'
import FormCreate from '../components/FormCreate.vue'
import FormEdit from '../components/FormEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/store',
    component: Store,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'product',
        component: Product,
        children: [
          {
            path: '',
            component: ListItem
          },
          {
            path: 'create',
            component: FormCreate
          },
          {
            path: ':id',
            component: IdItem,
            props: true,
            children: [
              {
                path: '',
                component: DetailItem,
                props: true
              },
              {
                path: 'edit',
                component: FormEdit,
                props: true
              }
            ]
          }
        ]
      },
      {
        name: 'Customer',
        path: 'customer',
        component: Customer
      },
      {
        name: 'Order',
        path: 'order',
        component: Order
      },
      {
        name: 'Analystic',
        path: 'analystic',
        component: Analystic
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
