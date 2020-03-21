import Vue from 'vue'
import VueRouter from 'vue-router'
import AllLanding from '../views/AllLanding.vue'
import ProductDashboard from '../views/ProductDashboard.vue'
import ProductList from '../views/ProductList.vue'
import ProductAdd from '../components/ProductAdd.vue'
import ProductEdit from '../components/ProductEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AllLanding',
    component: AllLanding
  },
  {
    path: '/products',
    component: ProductDashboard,
    meta: {
      authentication: true
    },
    children: [
      {
        path: '',
        component: ProductList,
        name: 'ProductList'
      },
      {
        path: 'add',
        component: ProductAdd,
        name: 'ProductAdd'
      },
      {
        path: 'edit/:id',
        component: ProductEdit,
        name: 'ProductEdit'
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
  if (to.matched.some(record => record.meta.authentication)) {
    const token = localStorage.getItem('token')
    if (token) next()
    else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})

export default router
