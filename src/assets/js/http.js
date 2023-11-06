/*
 * @Descripttion: axios 封装文件
 * @Author: ganbowen
 * @Date: 2020-01-04 11:18:36
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-08-05 17:57:40
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
const NULL_TOKEN_URL = ['/sys/token', '/sys/login']
const jumpLogin = () => {
    // window.location.href = 'login.html'
}

axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    let token = window.sessionStorage.getItem('token')
    if (token) { // mock 开启时不判断是否有token
        config.headers.author = token
    } else {
        if (NULL_TOKEN_URL.indexOf(config.url) < 0) {
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
        let result = response.data
        if (!result.success) {
            VUE_UI_OBJ.$Message.error(result.errorMsg)
        } else {
            let optionsConfig = response.config.options
            if (optionsConfig) {
                if (result && result.data) {
                    result.data = transDictionary(result.data, optionsConfig.trans, optionsConfig.trnasType)
                }
            }
        }
        return result
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
