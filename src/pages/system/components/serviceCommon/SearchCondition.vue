<template>
    <div class="">
        <template v-for='item in condition'>
            <div v-if='item.type === "input"' class="search-box">
                <Input v-model="item.value" :placeholder='item.placeholder'>
                    <span slot="prepend">{{item.label}}</span>
                </Input>
            </div>
            <div v-else-if='item.type === "select"' class="search-box box-select">
                <label>{{item.label}}</label>
                <Select v-model="item.value" :placeholder='item.placeholder'></Select>
            </div>
            <div v-else='item.type === "datepicker"' class="search-box box-select">
                <label>{{item.label}}</label>
                <DatePicker v-model="item.value" style='width:100%;'></DatePicker>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        condition: {
            type : Array,
            default: () => []
        }
    },
    data () {
        return {}
    },
    methods: {}
}
</script>

<style lang="scss">
</style>

