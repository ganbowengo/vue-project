/*
 * @Descripttion: login 页面的主文件
 * @Author: ganbowen
 * @Date: 2020-01-04 11:18:36
 * @LastEditors  : ganbowen
 * @LastEditTime : 2020-01-05 11:51:35
 */
import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/index.scss'
import http from '@/assets/js/http'

import { Button, Input, Form, FormItem, Message } from 'iview'
// import 'iview/dist/styles/iview.css'

Vue.prototype.http = http
Vue.prototype.$Message = Message
Vue.component('Button', Button)
Vue.component('Input', Input)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)


export default new Vue({
    el: '#app',
    render: (h) => h(App)
})
console.log(new Vue({
    el: '#app',
    render: (h) => h(App)
}))