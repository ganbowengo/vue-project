import Vue from 'vue'
import VueRouter from 'vue-router'

const systemCodeInvoiceType = () => import('../components/systemManage/codeMange/InvoiceTypeManage')
const systemCodeInvoiceCode = () => import('../components/systemManage/codeMange/InvoiceCodeManage')
const roleModal = () => import('../components/systemManage/powerManage/roleManage')
const businessLog = () => import('../components/systemManage/systemMonitor/businessLog')

Vue.use(VueRouter)

const routes = [{
    path: '/systemCodeInvoiceType',
    component: systemCodeInvoiceType
}, {
    path: '/systemCodeInvoice',
    component: systemCodeInvoiceCode
}, {
    path: '/roleManage',
    component: roleModal
}, {
    path: '/businessLog',
    component: businessLog
}, {
    path: '/',
    redirect: '/systemCodeInvoiceType'
}]

export default new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes
})