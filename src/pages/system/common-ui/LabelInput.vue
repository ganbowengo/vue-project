<template>
    <div class='label-box'>
        <span>{{label}}</span>
        <Input 
            v-model="value" 
            :type="type" 
            :placeholder="placeholder" 
            :disabled="disabled"
            :maxlength="maxlength"
            :minlength="minlength"
            :clearable="clearable"
            :readonly="readonly"
            :size="size"
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
    name: 'LabelInput',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            default: ''
        },
        inputValue: {
            type: [String, Number],
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        disabled:{
            type: Boolean,
            default: false
        }
    },
    data () {
        return {}
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
        inputValue(val) {
            this.value = val
        }
    }
}
</script>

<style lang="scss">
</style>