import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/vue-til",
      redirect: "/vue-til/login"
    },
    {
      path: "/vue-til/login",
      // 다이나믹 임포트
      // 한번에 전체페이지를 로딩하지 않아 초기 로딩속도 줄여들임,
      // /login으로 진입시에만 loginPage를 로딩함
      component: () => import("@/views/LoginPage.vue")
    },
    {
      path: "/vue-til/signup",
      component: () => import("@/views/SignupPage.vue")
    },
    {
      // "*": routes설정된 페이지를 제외한 모든 페이지에 대한
      path: "/vue-til/*",
      component: () => import("@/views/NotFoundPage.vue")
    }
  ]
});
