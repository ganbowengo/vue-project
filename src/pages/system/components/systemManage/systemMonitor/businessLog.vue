<template>
    <div>
        <SearchCondition :condition='condition' @queryData='getQueryData'></SearchCondition>
    </div>
</template>

<script>

import pageMixin from '@system/mixins/systemPageMixin'
export default {
    mixins: [pageMixin],
    data() {
        return {
            searchInfo: {},
            powerTree: [],
            condition: [
                {
                    index: 1,
                    value: '',
                    name: 'startDate',
                    type: 'datepicker',
                    label: '时间',
                    dateType: 'datetime',
                    placeholder: '请输入'
                },
                {
                    index: 2,
                    value: '',
                    name: 'method',
                    type: 'select',
                    label: '业务类型',
                    placeholder: '请选择',
                    options: []
                },
                {
                    type: 'button',
                    label: '查询',
                    color: 'primary',
                    fn: this.query
                }
            ],
            selectedData: [],
        }
    },
    methods: {
        query(query) {
            query = query || this.searchInfo
            console.log('query',query)
            this.http.post('/sys/log/statBizLog',{
                params: query
            }).then(res => {
                if(res.success){
                    console.log('res',res)
                }
            }).catch(error => {
                throw error
            })
        }
    }
}
</script>

<style lang="scss">
</style>
