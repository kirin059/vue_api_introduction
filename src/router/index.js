import Vue from "vue";
import VueRouter from "vue-router";
import One from "../views/One.vue";
import Two from "../views/Two.vue";
import Three from "../views/Three.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
