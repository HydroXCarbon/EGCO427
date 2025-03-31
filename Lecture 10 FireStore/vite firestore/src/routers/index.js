import { createRouter, createWebHistory } from "vue-router";

import MovieList from "../views/MovieList.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/movies",
      name: "movies",
      component: MovieList,
      meta: {
        requiresAuth: true,
      },
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
      redirect: "/movies",
    },
    {
      path: "/",
      redirect: "/movies",
    },
  ],
});

const getCurrentUser = () =>{
  return new Promise((resolve, reject)=> {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user)=>{
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth) {
    if(await getCurrentUser()){
      console.log("You are authorized to access this area.");
      next()
    } else {
      console.log("You are not authorized to access this area.")
      next('signin')
    }
  } else {
    next()
  }
})

export default router;
