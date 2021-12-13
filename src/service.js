import axios from 'axios'

const service = axios.create({
    //baseURL会自动加载接口地址
    baseURL: 'http://rap2.taobao.org:38080/app/mock/264406/',
    timeout: 1000,  //指定请求超时的毫秒数，请求花费的时间超过timeout设置的时间，请求则会被中断
    withCredentials: true, //表示跨域请求时是否需要凭证
    headers: {
        'Content-type' : 'application/json;charset=utf-8'
    }
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.token = token
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default service
