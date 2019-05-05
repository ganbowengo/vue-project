import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/index.scss';

import { Button, Input } from 'iview'
import 'iview/dist/styles/iview.css';

Vue.component('Button', Button)
Vue.component('Input', Input)
new Vue({
    el:'#app',
    render:(h)=>h(App)
})