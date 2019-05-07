import axios from 'axios'

const BASE_URL = '/frontend'
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.url = BASE_URL + config.url
    let token = sessionStorage.getItem('token')
    if (token) {
        config.headers.author = token
    }else{
        window.location.href = 'login.html'
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.config.url === '/frontend/sys/token') {
        return response
    } else {
        return response.data;
    }
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default axios