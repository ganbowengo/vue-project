<template>
    <div>
        <SearchCondition :condition='condition' @queryData='getQueryData'></SearchCondition>
        <Table border :columns="table.columns" :data="table.tableData"></Table>
        <div class="fr mt10 mb10">
            <Page 
                :total="table.page.total" 
                :current='table.page.current' 
                :page-size='table.page.size'
                :page-size-opts='table.page.sizeOpts' 
                @on-change='change'
                @on-page-size-change='sizeChange' show-total show-sizer />
        </div>
    </div>
</template>

<script>

import SearchCondition from '../../serviceCommon/SearchCondition'
import {mapState} from 'vuex'
export default {
    data () {
        return {
            searchInfo: {},
            condition: [
                {
                    value: '',
                    name: 'fpzldm',
                    type: 'input',
                    label: '发票种类代码',
                    placeholder: '请输入'
                },
                {
                    value: '',
                    name: 'fpzlmc',
                    type: 'input',
                    label: '发票种类名称',
                    placeholder: '请输入'
                },
                {
                    value: '',
                    type: 'input',
                    name: 'fpzljc',
                    label: '发票种类简称',
                    placeholder: '请输入'
                },
                {
                    value: '',
                    name: 'fplxdm',
                    type: 'select',
                    label: '发票种类代码',
                    placeholder: '请选择',
                    options: []
                },
                {
                    value: '',
                    name: 'qybz',
                    type: 'select',
                    label: '启用标志',
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
            table: {
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '发票种类代码',
                        key: 'fpzldm',
                        type: 'text',
                        width: '160'
                    },
                    {
                        title: '发票种类名称',
                        key: 'fpzlmc',
                        type: 'text'
                    },
                    {
                        title: '发票简称',
                        key: 'fpzljc',
                        type: 'text'
                    },
                    {
                        title: '发票类型代码名称',
                        key: 'fplxdm',
                        type: 'text',
                        width: '200'
                    },
                    {
                        title: '启用标志',
                        key: 'qybz',
                        type: 'text',
                        width: '100'
                    },
                    {
                        title: '操作',
                        type: 'operation',
                        width: '100',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    }
                                }, '修改')
                            ]);
                        }
                    }
                ],
                tableData: [],
                page: {
                    total: 0,
                    current: 1,
                    size: 10,
                    sizeOpts: [10,20,50]
                }
            }
        }
    },
    computed: {
        ...mapState('dictionary', ['fplxdm','qybz'])
    },
    components: { SearchCondition },
    created () {
        this.condition[3].options = this.fplxdm
        this.condition[4].options = this.qybz
    },
    methods: {
        getQueryData (query) {
            this.searchInfo = query
        },
        query (query) {
            query ? this.getQueryData(query) : ''
            query = query || this.searchInfo
            query.pageSize = this.table.page.size
            query.currentPage = this.table.page.current
            this.http.post('/sys/fpzldm/searchFpzldm',{
                options: {
                    trans:[]
                },
                params: query
            }).then(res => {
               this.table.tableData = res.data
               this.table.page.total = res.total
            }).catch(error => {
                throw error
            })
        },
        change (current) {
            this.table.page.current = current
            this.query()
        },
        sizeChange (size) {
            this.table.page.size = size
            this.query()
        }
    }
}
</script>

<style lang="scss">
</style>
