import axios from 'axios';
import { setInterceptors } from './common/interceptors.js';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// 액시오스 초기화 함수
function createInstanceWitdAush(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    // 토큰은 항상 헤더 Authorization에 실어준다
  });

  return setInterceptors(instance);
}

export const instance = createInstance();
export const posts = createInstanceWitdAush('posts');
