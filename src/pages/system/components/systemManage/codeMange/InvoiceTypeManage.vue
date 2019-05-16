<template>
    <div>
        <SearchCondition :condition='condition'></SearchCondition>
    </div>
</template>

<script>

import SearchCondition from '../../serviceCommon/SearchCondition'
export default {
    data () {
        return {
            condition: [
                {
                    value: '',
                    type: 'input',
                    label: '发票种类代码',
                    placeholder: '请输入'
                },
                {
                    value: '',
                    type: 'input',
                    label: '发票种类名称',
                    placeholder: '请输入'
                },
                {
                    value: '',
                    type: 'input',
                    label: '发票种类简称',
                    placeholder: '请输入'
                },
                {
                    value: '',
                    type: 'select',
                    label: '发票种类代码',
                    placeholder: '请输入'
                },
                {
                    value: '',
                    type: 'datepicker',
                    label: '发票种类代码',
                    placeholder: '请输入'
                }
            ]
        }
    },
    components: {SearchCondition},
    methods: {}
}
</script>

<style lang="scss">
</style>
