import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index.js';
import store from '@/store/index.js';
import { formatDate } from '@/utils/filters';

//전역 필터 생성
Vue.filter('formatDate', formatDate);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
