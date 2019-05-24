<template>
    <div class='label-box'>
        <span class='label-text'>{{label}}</span>
        <Input 
            :value="inputValue" 
            class="label-input"
            :type="type" 
            :placeholder="placeholder" 
            :disabled="disabled"
            :maxlength="maxlength"
            :minlength="minlength"
            :clearable="clearable"
            :readonly="readonly"
            :size="size"
            :style='styles'
            @on-focus="handleFocus" 
            @on-blur="handleBlur" 
            @on-change="handleChange" 
            @input="handleInput" 
            @on-enter="handleEnter"
            >
        </Input>
    </div>
</template>

<script>
export default {
    name: 'label-input',
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            default: ''
        },
        label: {
            type: [String, Number],
            default: ''
        },
        placeholder: {
            type: String,
            default: '请输入'
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
        maxlength: {
            type: Number
        },
        minlength: {
            type: Number
        },
        readonly: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        },
        width: {
            type: [String, Number]
        }
    },
    computed: {
        styles() {
            let style = {}
            if (this.width) style = {width: this.width + 'px'}
            return style
        }
    },
    data () {
        return {
            inputValue: this.value
        }
    },
    methods: {
        handleChange(event) {
            this.$emit('on-change', event, this.value)
        },
        handleFocus(event) {
            this.$emit('on-focus', event, this.value)
        },
        handleBlur(event) {
            this.$emit('on-blur', event, this.value)
        },
        handleEnter(event) {
            this.$emit('enter', event, this.value)
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