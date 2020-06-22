import axios from 'axios';
import { setInterceptors } from './common/interceptors.js';

// 액시오스 초기화 함수
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // 토큰은 항상 헤더 Authorization에 실어준다
  });

  return setInterceptors(instance);
}

const instance = createInstance();

// 회원가입 API
const registerUser = userData => instance.post('signup', userData);

// 로그인 API
const loginUser = loginData => instance.post('login', loginData);

// 학습 노트 데이터 조회 API
const fetchPosts = () => instance.get('posts');

export { registerUser, loginUser, fetchPosts };
