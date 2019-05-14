/**
 * 
 * author ganbowen
 * description login 页面的主文件
 * created 2019/05/08 14:33:57
 * 
 */
import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/index.scss';
import http from '@/assets/js/http'

import { Button, Input, Form, FormItem } from 'iview'
import 'iview/dist/styles/iview.css';

Vue.prototype.http = http
Vue.component('Button', Button)
Vue.component('Input', Input)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
new Vue({
    el:'#app',
    render:(h)=>h(App)
})