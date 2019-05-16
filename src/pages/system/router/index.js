import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import systemCodeInvoiceType from '../components/systemManage/codeMange/InvoiceTypeManage'

const routes = [{
    path: '/systemCodeInvoiceType',
    component: systemCodeInvoiceType
}, {
    path: '/',
    redirect: '/userRegistration'
}]

export default new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes
})