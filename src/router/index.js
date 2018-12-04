import Vue from "vue";
import Router from "vue-router";
const Home = () => import("@/components/Home");
const Profile = () => import("@/components/User/Profile");
const Auth = () => import("@/components/User/Auth");

import AuthGuard from "./auth-guard";

Vue.use(Router);

export default new Router({
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
      beforeEnter: AuthGuard,
    },
    {
      path: "/auth",
      name: "Auth",
      component: Auth,
    },
  ],
  mode: "history",
});
