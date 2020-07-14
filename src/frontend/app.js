import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

//bootstrap y custom css
import "bootstrap/dist/css/bootstrap.min.css";
import "./public/static/css/style.css";

//vistas
import Nosotros from "./views/Nosotros.vue";
import Viajes from "./views/Viajes.vue";
import Testimonios from "./views/Testimonios.vue";
import Inicio from "./views/Inicio.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Inicio,
    },
    {
      path: "/viajes",
      component: Viajes,
    },
    {
      path: "/nosotros",
      component: Nosotros,
    },
    {
      path: "/testimonios",
      component: Testimonios,
    },
  ],
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
