import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/common/HeaderMenu.vue'

const routes = [{
    path: '/userRegistration',
    component: Home
}, {
    path: '/',
    redirect: '/userRegistration'
}]

export default new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes
})