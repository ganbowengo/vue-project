<template>
    <Label :label='label' :width='width' v-click-outside="clickOutside">
        <div>
            <Dropdown trigger="custom" :visible="visible" :style='{width: width + "px"}' class='tree-dropdown'>
                <Input 
                    :value="inputValue" 
                    @on-focus="handleFocus" 
                    :placeholder="placeholder"
                />
                <Tree slot="list" :data="options" :show-checkbox='showCheckbox' :multiple='multiple' @on-check-change='checkChange'></Tree>
            </Dropdown>
        </div> 
    </Label>
</template>

<script>
import clickOutside from '@/assets/utils/clickOutside'
export default {
    name: 'label-tree',
    directives: {clickOutside},
    props: {
        value: {
            type: [String, Number, Array],
            default: ''
        },
        name: {
            type: String
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        disabled:{
            type: Boolean,
            default: false
        },
        multiple:{
            type: Boolean,
            default: true
        },
        showCheckbox: {
            type: Boolean,
            default: true
        },
        options: {
            type: [Array],
            default: () => []
        },
        width: {
            type: [String, Number]
        },
        label: {
            type: [String, Number],
            default: ''
        }
    },
    data () {
        return {
            inputValue: this.value,
            visible:false
        }
    },
    methods: {
        clickOutside() {
            this.visible = false
        },
        checkChange(e) {
            this.$emit('check-change', e)
        },   
        handleFocus() {
            this.visible = true
        },
        handleInput(event) {
            this.$emit('input', event, this.value)
        }
    },
    watch: {
        value(val) {
            this.inputValue = val
        }
    }
}
</script>

<style lang="scss">
</style>