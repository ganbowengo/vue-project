<template>
    <Label :label='label' :width='width'>
        <Select 
            :value="inputValue" 
            :placeholder="placeholder" 
            :disabled="disabled"
            :clearable="clearable"
            :size="size"
            @input='handleInput'
            @on-change="handleChange" 
            >
            <Option v-for='item in options' :value="item.code" :label='item.name' :key='item.code'></Option>
        </Select>
    </Label>
</template>

<script>
export default {
    name: 'label-input',
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
        clearable:{
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'default'
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
            inputValue: this.value
        }
    },
    methods: {
        handleChange(event) {
            this.$emit('on-change', event)
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