import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      // 다이나믹 임포트
      // 한번에 전체페이지를 로딩하지 않아 초기 로딩속도 줄여들임,
      // /login으로 진입시에만 loginPage를 로딩함
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
      meta: {
        auth: true,
      },
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
      meta: {
        auth: true,
      },
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
      meta: {
        auth: true,
      },
    },
    {
      // "*": routes설정된 페이지를 제외한 모든 페이지에 대한
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log('인증이 필요합니다.');
    next('/login');
    return;
  }
  console.log(to);
  next();
});

export default router;
