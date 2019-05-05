import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import { Button, Table, Input, Select, Page, Icon, Layout, Menu, MenuItem, Sider, Breadcrumb, BreadcrumbItem, Submenu } from 'iview'
import 'iview/dist/styles/iview.css';
import '@/assets/styles/index.scss';

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

new Vue({
    el:'#app',
    router,
    render:(h)=>h(App)
})