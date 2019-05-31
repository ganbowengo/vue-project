import Vue from 'vue'
import VueRouter from 'vue-router'

const systemCodeInvoiceType = () => import('../components/systemManage/codeMange/InvoiceTypeManage')
const systemCodeInvoiceCode = () => import('../components/systemManage/codeMange/InvoiceCodeManage')

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
