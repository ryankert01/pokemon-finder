import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about/:slug",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/pokemon-finder"),
  routes,
});

export default router;
