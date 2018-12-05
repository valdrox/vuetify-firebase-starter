import Vue from "vue";
import Router from "vue-router";
const Home = () => import("@/components/Home");
const Profile = () => import("@/components/User/Profile");
const Auth = () => import("@/components/User/Auth");

import AuthGuard from "./auth-guard";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: { requiresAuth: true },
    },
    {
      path: "/auth",
      name: "Auth",
      component: Auth,
    },
  ],
  mode: "history",
});

router.beforeEach(AuthGuard);

export default router;
