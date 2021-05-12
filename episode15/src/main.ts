import Vue from "vue";
import App from "./App.vue";
import Header from "./components/Header.vue";

Vue.config.productionTip = false;

Vue.component("Header", Header);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
