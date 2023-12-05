import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import filters from "./filters";
import ElementUI from "element-ui";
import request from "./request";
import "@/style/global.less";
import "element-ui/lib/theme-chalk/index.css";
import "./components/icons";
import "./components/icons/assets";


Vue.use(ElementUI);
Vue.use(filters);
Vue.use(request);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
