<template>
    <Modal
        v-model="modalData.show"
        :title="modalData.title"
        @on-ok="ok"
        @on-cancel="cancel">
        <Form :model="formItem" :label-width="80">
            <FormItem label="Input">
                <Input v-model="formItem.input" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="Select">
                <Select v-model="formItem.select">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                </Select>
            </FormItem>
        </Form>
    </Modal>
</template>

<script>
export default {
    data () {
        return {
            modalData: {
                show: false,
                title: ''
            },
            formItem: {
                input: '',
                Select: ''
            }
        }
    },
    methods: {
        open(row = '') {
            if (row) {
                this.modalData.title = '修改发票种类代码'
            } else {
                this.modalData.title = '添加发票种类代码'
                
            }
            this.modalData.show = true
        },
        ok() {

        },
        cancel() {

        }
    }
}
</script>

<style lang="scss">
</style>