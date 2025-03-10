import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";
import Home from "../view/Home.vue";
import ex1 from "../view/ex1.vue";
import Search from "../view/Search.vue";

const routerHistory = createWebHistory();

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
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
  {
    path: "/ex1",
    name: "ex1",
    component: ex1,
  },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
