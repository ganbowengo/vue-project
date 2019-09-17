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
        <roleModal ref='roleModal' :fpzldm='fpzldm' @search='query'></roleModal>
    </div>
</template>

<script>

import roleModal from './commonModal/roleModal'
import pageMixin from '@system/mixins/systemPageMixin'
export default {
    components: { roleModal },
    mixins: [pageMixin],
    data() {
        return {
            searchInfo: {},
            powerTree: [],
            condition: [
                {
                    index: 1,
                    value: '',
                    name: 'xtjsmc',
                    type: 'input',
                    label: '角色名称',
                    placeholder: '请输入'
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
                        title: '角色名称',
                        key: 'xtjsmc',
                        type: 'text',
                        width: '200'
                    },
                    {	
                        title: '系统权限',
                        key: 'xtqx-name',
                        type: 'text',
                        width: '200'
                    },
                    {
                        title: '启用标志',
                        key: 'qybz-name',
                        type: 'text'
                    },
                    {
                        title: '备注',
                        key: 'bz',
                        type: 'text'
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
                                        size: 'small',
                                        disabled: params.row.swjgdm !== sessionStorage.getItem('orgCode')
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
    methods: {
        query(query) {
            query = query || this.searchInfo
            query.pageSize = this.table.page.size
            query.pageNo = this.table.page.current
            this.http.post('/sys/role/queryRole',{
                options: {
                    trans: ['xtqx','qybz'],
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
            this.$refs.roleModal.open()
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
            this.http.post('/sys/role/deleteRole',{
                xtjsdm: delData.join(',')
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
                    arr.push(item.xtjsdm)
                }
            }
            return arr
        },
        update(params) {
            this.$refs.roleModal.open(params.row)
        },
        select(row) {
            this.selectedData = row
        }
    }
}
</script>

<style lang="scss">
</style>
