import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    name: 'Register',
    component: () => import()
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import()
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name === from.name && to.name === 'Register' && to.name === 'Login') {
    next()
  } else {
    if (localStorage.access_token) {
      next()
    } else {
      '/'
    }
  }
})

export default router;
