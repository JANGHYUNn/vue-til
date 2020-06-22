import store from '@/store/index.js';

export function setInterceptors(instance) {
  instance.interceptors.request.use(
    function(config) {
      config.headers.Authorization = store.state.token;
      //   console.log(config);
      return config;
    },
    function(error) {
      console.log(error);
    },
  );

  instance.interceptors.response.use(
    function(config) {
      return config;
    },
    function(error) {
      console.log(error);
    },
  );
  console.log(instance);
  return instance;
}
