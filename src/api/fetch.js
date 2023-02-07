import axios from "axios";
import qs from "qs";
import { showLoadingToast, closeToast, showNotify } from "vant";

// 当前请求队列长度
let reqLength = 0;

const fetch = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: import.meta.env.VITE_BASE_REQTIMEOUT,
});

fetch.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 添加请求拦截器
fetch.interceptors.request.use(
  function (config) {
    // 携带token
    // 在发送请求之前做些什么
    requestHeapDetection(true); //t
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
fetch.interceptors.response.use(
  // 2xx 范围内的状态码都会触发该函数。
  function (response) {
    // console.log(response);
    requestHeapDetection(false);
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    if (error.message.includes("timeout")) {
      showNotify({
        type: "warning",
        message: "当前服务状态拥挤，或网络环境不佳，请稍后重试。",
      });
    } else {
      console.log(`${error.response.status}:${error.response.statusText}`);
    }
    requestHeapDetection(false);
    return Promise.reject(error);
  }
);

// 请求队列
function requestHeapDetection(state) {
  if (state) {
    reqLength = reqLength + 1;
    SetloadingState();
    return;
  } else {
    reqLength = reqLength - 1;
    SetloadingState();
  }
  if (reqLength === 0) {
    // 卸载请求状态
    closeToast();
  }
}

// 设置请求状态
function SetloadingState() {
  showLoadingToast({
    message: "加载中...",
    forbidClick: true,
    duration: 0,
  });
}

export default {
  get(url, params = {}) {
    return fetch({
      method: "get",
      url,
      params,
    });
  },
  post(url, params = {}, header) {
    // post请求在某些情况下可能需要携带额外的header
    if (header) {
      return fetch({
        method: "post",
        url,
        data: qs.stringify(params),
        headers: header,
      });
    } else {
      return fetch({
        method: "post",
        url,
        data: qs.stringify(params),
      });
    }
  },
  put(url, params = {}) {
    return fetch({
      method: "put",
      url,
      data: qs.stringify(params),
    });
  },
  delete(url, params = {}) {
    return fetch({
      method: "delete",
      url,
      params,
    });
  },
};
