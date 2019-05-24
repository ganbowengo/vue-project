<template>
    <Modal
        v-model="modalData.show"
        :title="modalData.title"
        @on-ok="ok">
        <label-select label='发票类型代码及名称：' v-model='invoiceInfo.fplxdm' :width='width' :options='fplxdm'></label-select>
        <label-input label='发票种类代码：' v-model='invoiceInfo.fpzldm' :width='width' :disabled="disabled"></label-input>
        <label-input label='发票种类名称：' v-model='invoiceInfo.fpzlmc' :width='width'></label-input>
        <label-input label='发票种类简称：' v-model='invoiceInfo.fpzljc' :width='width'></label-input>
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
import {mapState} from 'vuex'
export default {
    data () {
        return {
            width: 320,
            disabled: false,
            modalData: {
                show: false,
                title: ''
            },
            invoiceInfo: {
                fplxdm: '',
                fpzldm: '',
                fpzlmc: '',
                fpzljc: '',
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
                this.modalData.title = '修改发票种类代码'
                this.invoiceInfo = this.globalTool.initAccept(this.invoiceInfo, row)
            } else {
                this.modalData.title = '添加发票种类代码'
                this.invoiceInfo = this.globalTool.initEmpty(this.invoiceInfo)
                this.invoiceInfo.qybz = '1'
            }
            this.modalData.show = true
            this.disabled = !!row
        },
        ok() {
            let params = this.invoiceInfo
            let url = '/sys/fpzldm/addFpzldm'
            if (this.disabled) {
                url = '/sys/fpzldm/updateFpzldm'
            }
            this.http.post(url,{ params }).then(res => {
                 if (res.success) {
                    popup.success(res.message || '操作成功')
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