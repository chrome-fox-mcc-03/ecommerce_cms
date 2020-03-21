import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: {
      name: 'Login',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('../components/dashboard/table/tabs.vue'),
      },
      {
        path: 'editproduct',
        name: 'editproduct',
        // component: EditProduct,
        component: () => import('../components/dashboard/form/EditProduct.vue'),
        props: true,
      },
      {
        path: 'product',
        name: 'ProductForm',
        component: () => import('../components/dashboard/form/AddProduct.vue'),
      },
      {
        path: 'category',
        name: 'CategoryForm',
        component: () => import('../components/dashboard/form/AddCategory.vue'),
      },
      {
        path: 'editcategory',
        name: 'editcategory',
        component: () => import('../components/dashboard/form/EditCategory.vue'),
        props: true,
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = localStorage.getItem('access_token');

    if (token) {
      next();
    } else {
      next({
        path: '/login',
      });
    }
  } else {
    next();
  }
});

export default router;
