import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  // 路由模式配置
  history: createWebHistory(import.meta.env.BASE_URL),
  // 路由配置
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    // 首页相关路由
    {
      path: "/home",
      component: () => import("@/views/HomeRouterExit.vue"),
      children: [
        {
          // 首页
          path: "/home",
          name: "home",
          component: () => import("@/views/Home/IndexView.vue"),
          meta: {
            // 开启路由缓存
            keepAlive: true,
          },
        },
        {
          // 商品列表
          path: "/shopList",
          name: "home-shopList",
          component: () => import("@/views/Home/ShopListView.vue"),
        },
      ],
    },
    // 账号相关路由
    {
      path: "/account",
      redirect: "/account/login",
      component: () => import("@/views/AccountRouterExit.vue"),
      children: [
        // 登录
        {
          path: "/account/login",
          name: "account-login",
          component: () => import("@/views/Account/LoginView.vue"),
        },
        // 注册
        {
          path: "/account/SignUp",
          name: "account-signUp",
          component: () => import("@/views/Account/SignUpView.vue"),
        },
      ],
    },
    // demo相关路由
    {
      path: "/demo",
      redirect: "/demo/stores",
      component: () => import("@/views/DemoRouterExit.vue"),
      children: [
        {
          path: "/demo/stores",
          name: "demo-stores",
          component: () => import("@/views/Demo/StoresDemo.vue"),
        },
      ],
    },

    // 404 注意所有路由定义都要在此行之前 否则无法正确匹配
    {
      path: "/404",
      name: "404",
      meta: {
        noAuth: true,
      },
      component: () => import("@/views/404Error.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      redirect: "/404",
      meta: {
        noAuth: true,
      },
    },
  ],
  // 路由跳转后重置位置
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
