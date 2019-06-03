<template>
    <Modal
        v-model="modalData.show"
        :title="modalData.title"
        @on-ok="ok">
        <label-input label='角色名称：' v-model='invoiceInfo.xtjsmc' :width='width'></label-input>
        <label-select label='系统权限：' v-model='invoiceInfo.xtqx' :width='width' 
            :options='xtqxList' :disabled="disabled" @on-change='powerChange'></label-select>
        <label-tree label='系统权限：' v-model='treeData.treeName' :options='treeData.options' @check-change='checkChange' :width='width'></label-tree>
        <label-input label='备注：' v-model='invoiceInfo.bz' :width='width'></label-input>
        <Label label='省局角色专用标志：' :width='width' v-if='isProvinceUser'>
            <RadioGroup v-model="invoiceInfo.sjjsbz">
                <Radio v-for="it in qybz" :label="it.code" :key='it.code'>
                    <span>{{it.name}}</span>
                </Radio>
            </RadioGroup>
        </Label>
        <Label label='启用标志' :width='width'>
            <RadioGroup v-model="invoiceInfo.qybz">
                <Radio v-for="it in qybz" :label="it.code" :key='it.code'>
                    <span>{{it.name}}</span>
                </Radio>
            </RadioGroup>
        </Label>
    </Modal>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: {
        fpzldm : {
            type : Array,
            default:() => []
        }
    },
    data () {
        return {
            width: 320,
            disabled: false,
            isProvinceUser: false,
            xtqxList: [],
            modalData: {
                show: false,
                title: ''
            },
            invoiceInfo: {
                xtjsmc: '',
                xtqx: '',
                xtjsdm: '',
                jbmkmc: '',
                jbmkdm: '',
                bz: '',
                sjjsbz: '0',
                qybz: '',
                saveType: '0'
            },
            treeData: {
                treeName: '',
                treeId: '',
                options : [],
                xtqx1: [],   
                xtqx2: [],   
                xtqx3: []  
            }
        }
    },
    computed: {
        ...mapState('dictionary',['xtqx','qybz'])
    },
    created () {
        this.http.get('/basic/basicCode/isProvinceUser',{}).then(res => {
            if(res.success){
                this.isProvinceUser = res.data[0] || false
            }
        })
        this.http.get('/basic/basicCode/getUserXtqx',{}).then(res => {
            if(res.success){
                let data = res.data[0] || {}
                 if (data.xtqx == 0) {
                    this.xtqxList = [{code: '1', name: '管理员'}]
                } else {
                    this.xtqxList = this.xtqx
                }
            }
        })
    },
    methods: {
        open(row = '') {
            if (row) {
                this.modalData.title = '修改角色'
                this.invoiceInfo = this.globalTool.initAccept(this.invoiceInfo, row)
                this.invoiceInfo.saveType = '1'
                this.updateRoleInit(row)
            } else {
                this.modalData.title = '新增角色'
                this.invoiceInfo = this.globalTool.initEmpty(this.invoiceInfo)
                this.invoiceInfo.qybz = '1'
                this.invoiceInfo.sjjsbz = '0'
                this.treeData.xtqx1 = []
                this.treeData.xtqx2 = []
                this.treeData.xtqx3 = []
                this.treeData.treeName = ''
                this.treeData.treeId = ''
                this.invoiceInfo.saveType = '0'
                this.addRoleInit()
            }
            this.modalData.show = true
            this.disabled = !!row
        },
        ok() {
            let params = this.invoiceInfo
            params.jbmkdm = this.treeData.treeId
            this.http.post('/sys/role/saveRole', params).then(res => {
                 if (res.success) {
                    this.$Message.success(res.message || '操作成功')
                    this.$emit('search')
                }
            }).catch(error => {
                throw error
            })
        },
        powerChange(xtqx) {
            let arr = []
            if (xtqx === '1') {
                arr = this.treeData.xtqx1
            } else if(xtqx === '2') {
                arr = this.treeData.xtqx2
            } else if(xtqx === '3') {
                arr = this.treeData.xtqx3
            }
            if (this.invoiceInfo.sjjsbz === '0') {
                arr = arr.filter(item => item.mkbz !== 10)
            }
            this.treeData.options = arr
            this.treeData.treeName = ''
            this.treeData.treeId = ''
        },
        updateRoleInit(row) {
            let params = {
                xtjsdm : row.xtjsdm,
                xtqx : row.xtqx
            }
            this.http.post('/sys/role/updateRole', params).then(res => {
                if (res.success) {
                    let result = res.data[0] || {}
                    this.treeData.options = this.treeInit(result.menuList)
                    this.checkChange(this.treeData.options)
                }
            })
        },
        addRoleInit() {
            this.http.post('/sys/role/addRole', {}).then(res => {
                if (res.success) {
                    let tree = this.treeInit(res.data)
                    this.treeData.xtqx1 = tree.filter(({xtqx}) => xtqx === '1')
                    this.treeData.xtqx2 = tree.filter(({xtqx}) => xtqx === '2')
                    this.treeData.xtqx3 = tree.filter(({xtqx}) => xtqx === '3')
                    this.treeData.options = this.treeData[`${'xtqx' + this.invoiceInfo.xtqx}`]
                }
            })
        },
        treeInit(data = []) {
            for(let i in data){
                let item = data[i]
                item.title = item.name
                item.expand = item.hide
                item.checked = item.check
                if(item.children){
                    this.treeInit(item.children)
                }
            }
            return data
        },
        checkChange(e = []) {
            let treeTitle = this.checkedInit([], e)
            let treeId = {},treeName = {}
            treeTitle.map(item => {
                treeId[item.id] = ''
                item.pid ? treeId[item.pid] = '' : ''
                treeName[item.title] = ''
            })
            this.treeData.treeName = Object.keys(treeName).join(',')
            this.treeData.treeId = Object.keys(treeId).join(',')
        },
        checkedInit(treeTitle, data = []) {
            for(let key in data){
                let item = data[key]
                treeTitle.push(item)
                if(item.children){
                    this.checkedInit(treeTitle, item.children)
                }
            }
            return treeTitle
        }
    }
}
</script>

<style lang="scss">
</style>