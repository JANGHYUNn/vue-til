import { instance } from './index';

// 회원가입 API
const registerUser = userData => instance.post('signup', userData);

// 로그인 API
const loginUser = loginData => instance.post('login', loginData);

export { registerUser, loginUser };
