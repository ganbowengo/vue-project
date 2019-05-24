<template>
    <Modal
        v-model="modalData.show"
        :title="modalData.title"
        @on-ok="ok"
        @on-cancel="cancel">
        <label-input label='发票类型代码及名称：' v-model='invoiceInfo.fplxdm' :width='width'></label-input>
        <label-input label='发票种类代码：' v-model='invoiceInfo.fpzldm' :width='width' :disabled="disabled"></label-input>
        <label-input label='发票种类名称：' v-model='invoiceInfo.fpzlmc' :width='width'></label-input>
        <label-input label='发票种类简称：' v-model='invoiceInfo.fpzljc' :width='width'></label-input>
        <label-input label='启用标志：' v-model='invoiceInfo.qybz' :width='width'></label-input>
    </Modal>
</template>

<script>
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
    methods: {
        open(row = '') {
            if (row) {
                this.modalData.title = '修改发票种类代码'
                this.invoiceInfo = this.globalTool.initAccept(this.invoiceInfo, row)
            } else {
                this.modalData.title = '添加发票种类代码'
                this.invoiceInfo = this.globalTool.initEmpty(this.invoiceInfo)
            }
            this.modalData.show = true
            this.disabled = !!row
        },
        ok() {
            console.log('this.invoiceInfo', this.invoiceInfo)
        },
        cancel() {

        }
    }
}
</script>

<style lang="scss">
</style>