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
        <InvoiceCodeModal ref='InvoiceCodeModal' :fpzldm='fpzldm' @search='query'></InvoiceCodeModal>
    </div>
</template>

<script>

import SearchCondition from '../../serviceCommon/SearchCondition'
import InvoiceCodeModal from './commonModal/InvoiceCodeModal'
import pageMixin from '@system/mixins/systemPageMixin'
import {mapState} from 'vuex'
export default {
    components: { SearchCondition, InvoiceCodeModal },
    mixins: [pageMixin],
    data() {
        return {
            searchInfo: {},
            condition: [
                {
                    index: 1,
                    value: '',
                    name: 'fplxdm',
                    type: 'select',
                    label: '发票种类代码',
                    placeholder: '请选择',
                    options: []
                },
                {
                    index: 2,
                    value: '',
                    name: 'fpjc',
                    type: 'input',
                    label: '发票种类简称',
                    placeholder: '请输入'
                },
                {
                    index: 3,
                    value: '',
                    type: 'input',
                    name: 'fpdm',
                    label: '发票代码',
                    placeholder: '请输入'
                },
                {
                    index: 4,
                    value: '',
                    type: 'input',
                    name: 'fpmc',
                    label: '发票名称',
                    placeholder: '请输入'
                },
                {
                    index: 5,
                    value: '',
                    name: 'ssnf',
                    type: 'select',
                    label: '年份',
                    placeholder: '请选择',
                    options: []
                },
                {
                    index: 6,
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
                        title: '发票代码',
                        key: 'fpdm',
                        type: 'text',
                        width: '200'
                    },
                    {
                        title: '发票名称',
                        key: 'fpmc',
                        type: 'text',
                        width: '200'
                    },
                    {
                        title: '发票种类简称',
                        key: 'fpjc',
                        type: 'text'
                    },
                    {
                        title: '发票种类代码',
                        key: 'fpzldm',
                        type: 'text',
                        width: '120'
                    },
                    {
                        title: '启用标志',
                        key: 'qybz-name',
                        type: 'text',
                        width: '120'
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
            selectedData: [],
            fpzldm: []
        }
    },
    computed: {
        ...mapState('dictionary', ['qybz'])
    },
    created() {
        this.http.get('/sys/fpzldm/searchAllFpzldm', {}).then(res => {
            if (res.success) {
                let resData = res.data
                let invoiceTypeList = []
                resData.map(function (item) {
                    invoiceTypeList.push({
                        name: item.fpzlmc + ' ' + item.fpzldm,
                        code: item.fpzldm
                    })
                })
                this.condition[0].options = invoiceTypeList
                this.fpzldm = invoiceTypeList
            }
        })
        this.condition[4].options = Array.from({length:50}, (v,k) => {return {
            code: k + 2002,
            name: k + 2002 + '年'
        }})
        this.condition[5].options = this.qybz
    },
    methods: {
        query(query) {
            query = query || this.searchInfo
            query.pageSize = this.table.page.size
            query.currentPage = this.table.page.current
            this.http.post('/sys/fpdm/searchFpdm',{
                options: {
                    trans: ['qybz'],
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
            this.$refs.InvoiceCodeModal.open()
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
            this.http.post('/sys/fpdm/deleteFpdm',{
                fpdm: delData.join(',')
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
                    arr.push(item.fpdm)
                }
            }
            return arr
        },
        update(params) {
            this.$refs.InvoiceCodeModal.open(params.row)
        },
        select(row) {
            this.selectedData = row
        }
    }
}
</script>

<style lang="scss">
</style>
