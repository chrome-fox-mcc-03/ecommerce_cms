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
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Admin.vue')
    },
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
