<template>
    <Modal
        v-model="modalData.show"
        :title="modalData.title"
        @on-ok="ok">
        <label-select label='发票种类代码及名称：' v-model='invoiceInfo.fpzldm' :width='width' :options='fpzldm'></label-select>
        <label-input label='发票代码：' v-model='invoiceInfo.fpdm' :width='width' :disabled="disabled"></label-input>
        <label-input label='发票名称：' v-model='invoiceInfo.fpmc' :width='width'></label-input>
        <label-input label='发票简称：' v-model='invoiceInfo.fpjc' :width='width'></label-input>
        <Label label='启用标志：' :width='width'>
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
            modalData: {
                show: false,
                title: ''
            },
            invoiceInfo: {
                fpzldm: '',
                fpdm: '',
                fpmc: '',
                fpjc: '',
                qybz: ''
            }   
        }
    },
    computed: {
        ...mapState('dictionary',['fplxdm','qybz'])
    },
    methods: {
        open(row = '') {
            if (row) {
                this.modalData.title = '修改发票代码'
                this.invoiceInfo = this.globalTool.initAccept(this.invoiceInfo, row)
            } else {
                this.modalData.title = '添加发票代码'
                this.invoiceInfo = this.globalTool.initEmpty(this.invoiceInfo)
                this.invoiceInfo.qybz = '1'
            }
            this.modalData.show = true
            this.disabled = !!row
        },
        ok() {
            let params = this.invoiceInfo
            let url = '/sys/fpdm/addFpdm'
            if (this.disabled) {
                url = '/sys/fpdm/updateFpdm'
            }
            this.http.post(url,params).then(res => {
                if (res.success) {
                    this.$Message.success(res.message || '操作成功')
                    this.$emit('search')
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