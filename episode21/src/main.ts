import Vue from "vue";
import App from "./App.vue";
import Header from "./components/Header.vue";
import DropDownMenu from "./components/DropDownMenu.vue";
import SideBar from "./components/SideBar.vue";

Vue.config.productionTip = false;

Vue.component("Header", Header);
Vue.component("DropDownMenu", DropDownMenu);
Vue.component("SideBar", SideBar);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
