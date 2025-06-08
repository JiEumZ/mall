import axios from "axios";

export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: "http://supermall:3000",
    // baseURL: "http://192.168.0.119:3000",
    Timeout: 5000,
  });

  // 2. axios拦截器
  // 请求拦截器
  instance.interceptors.request.use(
    (config) => {
      console.log(config);
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  // 响应拦截器
  instance.interceptors.response.use(
    (res) => {
      console.log("res", res);
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );

  // 3. 发送真正的网络请求  返回的是promise
  return instance(config);
}
