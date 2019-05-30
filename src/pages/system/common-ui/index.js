/**
 *
 * author ganbowen
 * description 公共基础组件封装入口文件
 * created 2019/05/23 11:02:05
 *
 */
import Vue from 'vue'
import Label from './Label.vue'
import LabelInput from './LabelInput.vue'
import LabelDatepicker from './LabelDatepicker.vue'
import LabelSelect from './LabelSelect.vue'
import LabelTree from './LabelTree.vue'

export default function initCommonUi () {
    Vue.component('Label', Label)
    Vue.component('LabelInput', LabelInput)
    Vue.component('LabelDatepicker', LabelDatepicker)
    Vue.component('LabelSelect', LabelSelect)
    Vue.component('LabelTree', LabelTree)
}
