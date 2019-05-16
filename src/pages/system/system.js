/**
 * 
 * author ganbowen
 * description system 页面的主文件
 * created 2019/05/08 14:33:57
 * 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import http from '@/assets/js/http'
import store from './vuex'

import { Button, Table, Input, Select, Page, Icon, Layout, Menu, MenuItem, Sider, Breadcrumb, BreadcrumbItem, Submenu, Modal, DatePicker } from 'iview'
import 'iview/dist/styles/iview.css';
import '@/assets/styles/index.scss';

Vue.prototype.http = http

Vue.component('Button', Button)
Vue.component('Table', Table)
Vue.component('Input', Input)
Vue.component('Select', Select)
Vue.component('Page', Page)
Vue.component('Icon', Icon)
Vue.component('Layout', Layout)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Sider', Sider)
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('Submenu', Submenu)
Vue.component('BreadcrumbItem', BreadcrumbItem)
Vue.component('Modal', Modal)
Vue.component('DatePicker', DatePicker)

new Vue({
    el:'#app',
    router,
    store,
    render:(h)=>h(App)
})