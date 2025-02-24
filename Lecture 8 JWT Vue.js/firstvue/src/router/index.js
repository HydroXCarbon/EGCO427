import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";
import Home from "../view/Home.vue";

const routerHistory = createWebHistory();

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/hello",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/home",
  },
  {
    path: "/",
    redirect: "/home",
  },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
