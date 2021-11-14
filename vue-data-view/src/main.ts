import Vue from "vue";
import App from "./App.vue";
import './main.scss';
import Deneme from "./Deneme.vue";

Vue.config.productionTip = false;

Vue.component('Deneme', Deneme);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
