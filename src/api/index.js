import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

const registerUser = userData => instance.post("signup", userData);

const loginUser = loginData => instance.post("login", loginData);

export { registerUser, loginUser };
