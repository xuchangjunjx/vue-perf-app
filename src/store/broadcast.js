const notifyMicroApp = payload => {
  // 通知子应用同步数据
};
export default store => {
  store.subscribe(mutation => {
    let { payload } = mutation;
    if (payload.broadcast) {
      notifyMicroApp(payload);
    }
  });
};
