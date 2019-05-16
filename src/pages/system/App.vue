<template>
    <div id="app" class="layout">
        <Layout>
            <headerMenu></headerMenu>
            <Layout>
                <Sider hide-trigger :width='240' :style="{background: '#fff'}">
                    <sliderMenu></sliderMenu>
                </Sider>
                <Layout>
                    <Breadcrumb class='breadcrumb'>
                        <BreadcrumbItem v-for='item,index in menuName' :key='index'>{{item}}</BreadcrumbItem>
                    </Breadcrumb>
                    <Content class='content'>
                       <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import headerMenu from './components/common/HeaderMenu.vue'
    import sliderMenu from './components/common/SiderMenu.vue'
    export default {
        components:{headerMenu, sliderMenu},
        computed:{
            ...mapGetters('menu',['menuName'])
        },
        created() {
            this.breadcrumb()
        },
        methods: {
            ...mapActions('menu',['breadcrumb'])
        }
    }
</script>

<style lang="scss" scoped>
    .layout,.ivu-layout,.ivu-menu {
        height: 100%;
        overflow: auto;
    }
    .breadcrumb {
        border-bottom: 1px solid #c4cfea;
        padding: 15px 10px;
        background: #fff;
    }
    .content {
        padding: 10px;
        height: 100%;
        background: #fafcff;
    }
</style>