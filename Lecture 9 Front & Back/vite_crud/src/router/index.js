import { createRouter, createWebHistory } from "vue-router";

import Users from "../views/Users.vue";
import AddUser from "../views/AddUser.vue";
import UpdateUser from "../views/UpdateUser.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";

import { getAuth } from "firebase/auth";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/users",
      name: "Users",
      component: Users,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/adduser",
      name: "AddUser",
      component: AddUser,
    },
    {
      path: "/updateuser/:userId",
      name: "UpdateUser",
      component: UpdateUser,
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn,
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/users",
    },
    {
      path: "/",
      redirect: "/users",
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = getAuth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next("/signin");
  } else if (!requiresAuth && currentUser) {
    next("/users");
  } else {
    next();
  }
});

export default router;
