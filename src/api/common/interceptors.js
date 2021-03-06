import store from '@/store/index.js';

export function setInterceptors(instance) {
  instance.interceptors.request.use(
    function(config) {
      config.headers.Authorization = store.state.token;
      //   console.log(config);
      return config;
    },
    function(error) {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    function(config) {
      return config;
    },
    function(error) {
      return Promise.reject(error);
    },
  );
  return instance;
}
