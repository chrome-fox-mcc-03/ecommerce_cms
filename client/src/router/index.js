import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Product from '../components/Products.vue'
import FormAdd from '../components/FormAdd.vue'
import FormEdit from '../components/FormEdit.vue'
import CategoryProduct from '../views/CategoryProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: 'products',
        name: 'Dashboard',
        component: Product
      },
      {
        path: 'products/:categoryId',
        name: 'CategoryProduct',
        component: CategoryProduct
      },
      {
        path: 'addproduct',
        name: 'AddProduct',
        component: FormAdd
      },
      {
        path: 'editproduct/:id',
        name: 'EditProduct',
        component: FormEdit
      }
    ]
  },
  {
    path: '/categories/:categoryId',
    name: 'CategoryProduct',
    component: CategoryProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
