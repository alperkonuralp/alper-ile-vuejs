import Vue from "vue";
import App from "./App.vue";
import Deneme from "./Deneme.vue";

import "./main.scss";

Vue.config.productionTip = false;

Vue.component("Deneme-Component", Deneme);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
