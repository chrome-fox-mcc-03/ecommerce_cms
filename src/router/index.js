import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "@/views/LandingPage";
import DashboardPage from "@/views/DashboardPage";
import store from "../store";
import ProductList from "../components/ProductList";
import ProductAdd from "@/components/ProductAdd";
import ProductMagicTCG from "../components/ProductMagicTCG";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "LandingPage",
    component: LandingPage,
    meta: {
      requiresAuth: false,
      title: "TCG CMS - Landing Page"
    }
  },
  {
    path: "/products",
    name: "DashboardPage",
    component: DashboardPage,
    redirect: {
      name: "DashboardProductList"
    },
    meta: {
      requiresAuth: true,
      title: "TCG CMS - Dashboard Page"
    },
    children: [
      {
        path: "",
        name: "DashboardProductList",
        component: ProductList,
        meta: {
          requiresAuth: true,
          title: "TCG CMS - Dashboard Page"
        }
      },
      {
        path: "add",
        name: "DashboardAddProduct",
        component: ProductAdd,
        meta: {
          requiresAuth: true,
          title: "TCG CMS - Add a Product"
        }
      },
      {
        path: "magicTCG",
        name: "DashboardMagicTCG",
        component: ProductMagicTCG,
        meta: {
          requiresAuth: true,
          title: "TCG CMS - Add MagicTCG Products"
        }
      }
    ]
  },
  {
    path : "*",
    meta : {
      requiresAuth : true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user.username) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
