<template>
    <div>
        <SearchCondition :condition='condition' @queryData='getQueryData'></SearchCondition>
        <div class="mb10">
            <Button type='primary' @click='add'>新增</Button>
            <Button type='primary' @click='del'>删除</Button>
        </div>
        <Table border :columns="table.columns" @on-selection-change='select' :data="table.tableData"></Table>
        <div class="fr mt10 mb10">
            <Page 
                :total="table.page.total" 
                :current='table.page.current' 
                :page-size='table.page.size'
                :page-size-opts='table.page.sizeOpts' 
                @on-change='change'
                @on-page-size-change='sizeChange' show-total show-sizer />
        </div>
        <InvoiceTypeModal ref='InvoiceTypeModal' @search='query'></InvoiceTypeModal>
    </div>
</template>

<script>

import SearchCondition from '../../serviceCommon/SearchCondition'
import InvoiceTypeModal from './commonModal/InvoiceTypeModal'
import pageMixin from '@system/mixins/systemPageMixin'
import { mapState } from 'vuex'
export default {
    components: { SearchCondition, InvoiceTypeModal },
    mixins: [pageMixin],
    data() {
        return {
            searchInfo: {},
            condition: [
                {
                    index: 1,
                    value: '',
                    name: 'fpzldm',
                    type: 'input',
                    label: '发票种类代码',
                    placeholder: '请输入'
                },
                {
                    index: 2,
                    value: '',
                    name: 'fpzlmc',
                    type: 'input',
                    label: '发票种类名称',
                    placeholder: '请输入'
                },
                {
                    index: 3,
                    value: '',
                    type: 'input',
                    name: 'fpzljc',
                    label: '发票种类简称',
                    placeholder: '请输入'
                },
                {
                    index: 4,
                    value: '',
                    name: 'fplxdm',
                    type: 'select',
                    label: '发票种类代码',
                    placeholder: '请选择',
                    options: []
                },
                {
                    index: 5,
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
                        key: 'fplxdm-name',
                        type: 'text',
                        width: '200'
                    },
                    {
                        title: '启用标志',
                        key: 'qybz-name',
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
                                    },
                                    on: {
                                        click: () => {
                                            this.update(params)
                                        }
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
            },
            selectedData: []
        }
    },
    computed: {
        ...mapState('dictionary', ['fplxdm','qybz'])
    },
    created() {
        this.condition[3].options = this.fplxdm
        this.condition[4].options = this.qybz
    },
    methods: {
        query(query) {
            query = query || this.searchInfo
            query.pageSize = this.table.page.size
            query.currentPage = this.table.page.current
            this.http.post('/sys/fpzldm/searchFpzldm',{
                options: {
                    trans: ['fplxdm','qybz'],
                    trnasType: true
                },
                params: query
            }).then(res => {
                if(res.success){
                    this.table.tableData = res.data
                    this.table.page.total = res.total
                }
            }).catch(error => {
                throw error
            })
        },
        add() {
            this.$refs.InvoiceTypeModal.open()
        },
        del() {
            let delData = this.delInit()
            if(delData && delData.length === 0){
                this.$Message.warning('删除的数据不能为空')
                return
            } else if(delData === false){
                this.$Message.warning('所选数据包含已启用')
                return
            }
            this.http.post('/sys/fpzldm/deleteFpzldm',{
                fplxdm: delData.join(',')
            }).then(res => {
                if(res.success){
                    this.$Message.success(res.message || '操作成功')
                    this.query()
                }
            }).catch(error => {
                throw error
            })
        },
        delInit() {
            let arr = []
            for(let item of this.selectedData){
                if(item.qybz === '1'){
                    return false
                }else{
                    arr.push(item.fpzldm)
                }
            }
            return arr
        },
        update(params) {
            this.$refs.InvoiceTypeModal.open(params.row)
        },
        select(row) {
            this.selectedData = row
        }
    }
}
</script>

<style lang="scss">
</style>
