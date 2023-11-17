import dateFormat from "./format";
const filters = { dateFormat };
export default {
  install(Vue) {
    Object.keys(filters).forEach(el => {
      Vue.filter(el, filters[el]);
    });
  },
};
