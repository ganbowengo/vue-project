import Vue from 'vue'
import VueRouter from 'vue-router'

import systemCodeInvoiceType from '../components/systemManage/codeMange/InvoiceTypeManage'
import systemCodeInvoiceCode from '../components/systemManage/codeMange/InvoiceCodeManage'

Vue.use(VueRouter)

const routes = [{
    path: '/systemCodeInvoiceType',
    component: systemCodeInvoiceType
}, {
    path: '/systemCodeInvoice',
    component: systemCodeInvoiceCode
}, {
    path: '/',
    redirect: '/systemCodeInvoiceType'
}]

export default new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes
})
