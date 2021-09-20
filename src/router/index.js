import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/pages/Main";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../pages/Cart"),
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: () => import("../pages/Catalog"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
