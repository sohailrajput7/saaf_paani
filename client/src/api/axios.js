import axios from "axios";
import config from "../config";

const instance = axios.create({
  baseURL: config.baseURLAPI,
});

instance.interceptors.request.use(function (config) {
  const authToken = localStorage.getItem("auth-token");
  config.headers["Authorization"] = `Bearer ${authToken}`;

  return config;
});

instance.interceptors.response.use(function (response) {
  const token = response.data.token;
  if (token) {
    localStorage.setItem("auth-token", token);
  }
  return response;
});

export default instance;
