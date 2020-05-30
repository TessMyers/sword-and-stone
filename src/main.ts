import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import VTooltip from 'v-tooltip';


Vue.config.productionTip = false;
// Vue.use(VTooltip);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
