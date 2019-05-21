<template>
    <div class="serch-box">
        <template v-for='item in condition'>
            <div v-if='item.type === "input"' class="search-box">
                <Input v-model="item.value" :placeholder='item.placeholder'>
                    <span slot="prepend">{{item.label}}</span>
                </Input>
            </div>
            <div v-else-if='item.type === "select"' class="search-box box-select">
                <label>{{item.label}}</label>
                <Select v-model="item.value" :placeholder='item.placeholder'>
                    <Option v-for='it in item.options' :value='it.code' :label='it.name' :key='it.code'></Option>
                </Select>
            </div>
            <div v-else-if='item.type === "datepicker"' class="search-box box-select">
                <label>{{item.label}}</label>
                <DatePicker v-model="item.value" style='width:100%;'></DatePicker>
            </div>
            <div v-else='item.type === "button"' class="search-box box-button">
                <Button :type='item.color' @click="handleClick(item.fn)">{{item.label}}</Button>
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
    methods: {
        handleClick (fn) {
            let query = this.setSearchInfo(this.condition)
            fn(query)
        },
        setSearchInfo (condition) {
            let query = {}
            for(let item of condition){
                item.name ? query[item.name] = item.value : ''
            }
            return query
        }
    },
    watch : {
        condition : {
            handler (val) {
                let query = this.setSearchInfo(val)
                this.$emit('queryData',query)
            },
            deep: true
        }
    }
}
</script>

<style lang="scss">
    .serch-box{
        border-bottom: 1px solid #ddd;
        margin-bottom: 10px;
        .box-button{
            border: 0;
        }
    }
</style>

