/**
 * 
 * author ganbowen
 * description axios 封装文件
 * created 2019/05/4 14:33:09
 * 
 */
import axios from 'axios'
import Vue from 'vue'
import { transDictionary } from '../utils/trans'
import { Message } from 'iview'
Vue.prototype.$Message = Message

const VUE_UI_OBJ = new Vue()
const BASE_URL = '/frontend'
const STATUS_LIST = [401, 403, 500]
const MESSAGE_LIST = ['没有访问权限!', 'token错误，请重新登录！', 'token为空，请重新登录！', 'token失效，请重新登录！', 'token验签错误，请重新登录！', 'token超时，请重新登录！']
const NULL_TOKEN_URL = ['/sys/token','/sys/login']
const jumpLogin = () => { 
    window.location.href = 'login.html' 
}
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    let token = sessionStorage.getItem('token')
    if (token) { // mock 开启时不判断是否有token
        config.headers.author = token
    } else {
        if(NULL_TOKEN_URL.indexOf(config.url) < 0){
            jumpLogin()
        }
    }
    config.url = BASE_URL + config.url
    if (config.data && config.data.options) {
        config.options = config.data.options
        config.data = config.data.params
    }
    return config
}, error => Promise.reject(error))

axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    if (response.config.url === '/frontend/sys/token') {
        if (MOCK) {
            response.headers.author = response.headers.author || 'mock'
        }
        return response
    } else {
        if (!response.data.success) {
            VUE_UI_OBJ.$Message.error(response.data.errorMsg)
        } else {
            if (response.config.options) {
                let result = response.data
                if (result && result.data) {
                    response.data.data = transDictionary(result.data, response.config.options.trans)
                }
            }
        }
        return response.data
    }
}, error => {
    // 对响应错误做点什么
    let response = error.response || {}
    let data = response.data || {}
    if (STATUS_LIST.indexOf(response.status) > -1 && MESSAGE_LIST.indexOf(data.message) > -1) {
        VUE_UI_OBJ.$Message.error(data.message)
        jumpLogin()
    }
    return Promise.reject(error)
})

export default axios