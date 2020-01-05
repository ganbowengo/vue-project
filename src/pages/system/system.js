/*
 * @Descripttion: system 页面的主文件
 * @Author: ganbowen
 * @Date: 2020-01-04 11:18:36
 * @LastEditors  : ganbowen
 * @LastEditTime : 2020-01-05 12:32:05
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import http from '@/assets/js/http'
import globalTool from '@/assets/utils/global'
import store from './vuex'
import initCommonUi from '@system/common-ui'
import SearchCondition from '@system/components/serviceCommon/SearchCondition'

import {
    Button,
    Table,
    Input,
    Select,
    Page,
    Icon,
    Layout,
    Menu,
    MenuItem,
    Sider,
    Breadcrumb,
    BreadcrumbItem,
    Submenu,
    Modal,
    DatePicker,
    Option,
    Message,
    Form,
    FormItem,
    RadioGroup,
    Radio,
    Tree,
    Dropdown
} from 'iview'
// import 'iview/dist/styles/iview.css'
import '@/assets/styles/index.scss'
import '@/assets/styles/ivu-style-reset.scss'

Vue.prototype.http = http
Vue.prototype.globalTool = globalTool
Vue.prototype.$Message = Message
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
Vue.component('Option', Option)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('RadioGroup', RadioGroup)
Vue.component('Radio', Radio)
Vue.component('Tree', Tree)
Vue.component('Dropdown', Dropdown)
Vue.component('SearchCondition', SearchCondition)

initCommonUi()
export default new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
})
