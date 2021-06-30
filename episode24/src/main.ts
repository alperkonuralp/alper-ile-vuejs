import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import Label from "./components/Label.vue";
Vue.component("Label", Label);

import TextBox from "./components/TextBox.vue";
Vue.component("TextBox", TextBox);

import DropDownList from "./components/DropDownList.vue";
Vue.component("DropDownList", DropDownList);

import ComponentContainer from "./components/ComponentContainer.vue";
Vue.component("ComponentContainer", ComponentContainer);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
