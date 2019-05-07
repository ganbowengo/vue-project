import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/index.scss';
import http from '@/assets/js/http'

import { Button, Input, Form, FormItem } from 'iview'
import 'iview/dist/styles/iview.css';
require('&/mock/mock-config.js')

Vue.prototype.http = http
Vue.component('Button', Button)
Vue.component('Input', Input)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
new Vue({
    el:'#app',
    render:(h)=>h(App)
})