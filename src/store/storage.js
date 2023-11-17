export default function (store) {
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("my_state", JSON.stringify(store.state));
  });
  window.addEventListener("load", () => {
    const storeCache = localStorage.getItem("my_state");
    if (storeCache) {
      store.replaceState(JSON.parse(storeCache));
    }
  });
}
