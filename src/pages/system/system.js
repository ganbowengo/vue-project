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
import globalTool from '@/assets/utils/global'
import store from './vuex'
import initCommonUi from '@system/common-ui'

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
    Radio
} from 'iview'
// import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/assets/styles/index.scss'
import '@/assets/styles/ivu-style-reset.scss'

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

// Vue.use(iView)
Vue.prototype.http = http
Vue.prototype.globalTool = globalTool
initCommonUi()
export default new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
})
