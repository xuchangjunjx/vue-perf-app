import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
/*是否有请求正在刷新token*/
window.isRefreshing = false;
/*被挂起的请求数组*/
let refreshSubscribers = [];
/*挂起请求到数组中*/
function subscribeTokenRefresh(cb) {
  refreshSubscribers.push(cb);
}
// 执行被挂起的请求
function onRrefreshed(token) {
  refreshSubscribers.map(cb => cb(token));
}

// 获取token
function getToken() {
  return "1234567";
}
let config = {
  baseURL: "/api",
  timeout: 60 * 1000,
  withCredentials: true,
};
const _axios = axios.create(config);
function refreshToken() {
  window.isRefreshing = true;
  return _axios.get("/refreshToken");
}
// http request 拦截器
_axios.interceptors.request.use(config => {
  // 模拟token过期
  let tokenExpired = config.url != "/refreshToken";
  if (tokenExpired) {
    // 一瞬间可能有多个请求 我们需要把请求都挂起
    if (!window.isRefreshing) {
      // 去调用接口 获取新token
      refreshToken().then(res => {
        console.log("refreshToken", res);
        window.isRefreshing = false;
        // 拿到新token 传递给被挂起的请求，并执行
        onRrefreshed("new-token");
        // 清空被挂起的q请求
        refreshSubscribers = [];
      });
    }
    let retry = new Promise(resolve => {
      subscribeTokenRefresh(token => {
        config.headers.Authorization = token;
        resolve(config);
      });
    });
    return retry;
  }
  // 不是过期 就走其他逻辑
  config.headers.Authorization = getToken();
  return config;
});
export { _axios };
export default {
  // 万物皆可install
  install(Vue) {
    Vue.prototype.axios = _axios;
  },
};
