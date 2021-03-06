// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuetify from "vuetify";
const App = () => import("./App");
import * as firebase from "firebase";
import router from "./router";
import { store } from "./store";
import { firebaseApp } from "./firebase";
import "../node_modules/firebaseui/dist/firebaseui.css";

const AlertCmp = () => import("./components/Shared/Alert.vue");

Vue.use(Vuetify);
Vue.config.productionTip = false;

Vue.component("app-alert", AlertCmp);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App },
  created() {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoSignIn", user);
        if (this.$router.currentRoute.query.redirect) {
          this.$router.replace(this.$router.currentRoute.query.redirect);
        } else {
          this.$router.replace("/");
        }
      }
    });
  },
});
