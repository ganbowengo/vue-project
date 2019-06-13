<template>
    <div class='label-box'>
        <span class='label-text'>{{label}}</span>
        <div class='label-slot' :style="styles">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'label-slot',
    props: {
        label: {
            type: [String, Number],
            default: ''
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
    }
}
</script>

<style lang="scss">
</style>