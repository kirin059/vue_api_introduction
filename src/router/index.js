import Vue from "vue";
import VueRouter from "vue-router";
import One from "../views/Two.vue";
import Two from "../views/Two.vue";
import Three from "../views/Three.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/one",
  },
  {
    path: "/one",
    name: "One",
    component: One,
  },
  {
    path: "/two",
    name: "Two",
    component: Two,
  },
  {
    path: "/three",
    name: "Three",
    component: Three,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
