import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import M from 'materialize-css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Admin.vue')
    },
    children: [
      {
        path: '',
        name: 'Items',
        component: () => {
          return import('../components/Items')
        }
      },
      {
        path: ':itemId',
        name: 'ItemDetails',
        component: () => {
          return import('../components/ItemDetail')
        },
        props: true,
        children: [
          {
            path: 'edit',
            name: 'ItemEdit',
            component: () => {
              return import('../components/ItemEdit')
            }
          },
          {
            path: 'delete',
            name: 'ItemDelete',
            props: true,
            component: () => {
              return import('../components/Confirmation')
            }
          }
        ]
      },
      {
        path: 'addItem',
        name: 'ItemCreate',
        component: () => {
          return import('../components/ItemCreate')
        }
      }
    ],
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('token')) {
        M.toast({
          html: '<span>Please login properly!</span>',
          classes: 'large red rounded',
          displayLength: 3000
        })
        next('/')
      } else next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
