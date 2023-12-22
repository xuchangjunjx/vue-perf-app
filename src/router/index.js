import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    // name: "home-main",
    //之前的两兄弟用这个包一下
    component: () => import("../views/home/main.vue"),
    // 说明下面2个都归main.vue罩着了
    children: [
      {
        // 空path，即访问/默认就是这个页面
        path: "/",
        name: "page-a",
        component: () => import("../views/home/page-a.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/about.vue"),
      },
      {
        path: "/charts",
        name: "charts",
        alias: ["/app/charts3"],
        component: () => import("../views/charts/dashboard.vue"),
      },
      {
        path: "/charts2",
        name: "charts2",
        component: () => import("../views/charts/dashboard.vue"),
      },
      {
        path: "/markdown",
        name: "markdown",
        component: () => import("../views/marked/index.vue"),
      },
      {
        path: "/svg-icons",
        name: "svg-icons",
        component: () => import("../views/svg-icons.vue"),
      },
      {
        path: "/child",
        component: () => import("../views/home/child-router.vue"),
        // 谁是谁的小弟，谁又是谁的大哥
        children: [
          {
            path: "",
            redirect: "page1",
          },
          {
            path: "page1",
            name: "child-page1",
            component: () => import("../views/home/child-router/page1.vue"),
          },
          {
            path: "page2",
            name: "child-page2",
            component: () => import("../views/home/child-router/page2.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    name: "not-found",
    component: () => import("../views/not-found.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 从哪来 到哪去
router.beforeEach((from, to, next) => {
  next();
});

export default router;
