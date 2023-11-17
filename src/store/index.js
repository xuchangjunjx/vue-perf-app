import Vue from "vue";
import Vuex from "vuex";
import broadcast from "./broadcast";
import storage from "./storage";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    userInfo: {
      userName: "",
      token: "",
    },
  },
  getters: {
    token: state => state.userInfo.token,
    userName: state => state.userInfo.userName,
  },
  mutations: {
    SET_INFO(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {},
  modules: {},
  plugins: [broadcast],
});
storage(store);
export default store;
