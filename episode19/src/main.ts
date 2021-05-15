import Vue from "vue";
import App from "./App.vue";
import Header from "./components/Header.vue";
import DropDownMenu from "./components/DropDownMenu.vue";

Vue.config.productionTip = false;

Vue.component("Header", Header);
Vue.component("DropDownMenu", DropDownMenu);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
