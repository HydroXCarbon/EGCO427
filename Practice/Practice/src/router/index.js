import { createRouter, createWebHistory } from "vue-router";
import CityList from "../components/CityList.vue";
import Info from "../components/Info.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/cities",
      name: "CityList",
      component: CityList,
      meta: {requiresAuth: true},
    },
    {
      path: "/info/:city",
      name: "Info",
      component: Info,
      meta: {requiresAuth: true},
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn,
    },
    {
      path: "/signup",
      name: "Signp",
      component: SignUp,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      redirect: "/signin",
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth) {
    if (await getCurrentUser()) {
      console.log("You are authorized to access this area.");
      next();
    } else {
      console.log("You are not authorized to access this area.");
      next("signin");
    }
  } else {
    next();
  }
});

export default router;
