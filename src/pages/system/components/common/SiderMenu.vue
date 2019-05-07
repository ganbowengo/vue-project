<template>
    <Menu 
        ref='siderMenu'         
        :active-name="activeName" 
        :open-names="openNames" accordion @on-select='breadcrumb'>
        <Submenu v-for='itemFrist in menuList' :name="itemFrist.name" :key='itemFrist.id'>
            <template slot="title">
                <Icon type="ios-analytics" />
                {{itemFrist.name}}
            </template>
            <template v-for='itemSecond in itemFrist.children'>
                <Submenu v-if='itemSecond.children' :name="itemFrist.name + ',' + itemSecond.name">
                    <template slot="title">{{itemSecond.name}}</template>
                    <MenuItem  v-for='itemThrid in itemSecond.children' :to='itemThrid.url' :name="itemFrist.name + ',' + itemSecond.name + ',' + itemThrid.name" :key='itemThrid.id'>{{itemThrid.name}}</MenuItem>
                </Submenu>
                <MenuItem v-if='!itemSecond.children' :name="itemFrist.name + ',' + itemSecond.name" :to='itemSecond.url'>{{itemSecond.name}}</MenuItem>
            </template>
        </Submenu>
    </Menu>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        data () {
            return {
                menuList: [],
                activeName: '',
                openNames: ['fxgl']
            }
        },
        computed: mapGetters('menu',['menuName']),
        created () {
            let userCode = sessionStorage.getItem('userCode') || ''
            this.http.post('/sys/user/queryUserPowerMenu',{swrydm: userCode}).then(res => {
                this.menuList = res.data
                this.$nextTick(_=>{
                    this.setMenu()
                })
            }).catch(error => {
                throw error
            })
        },
        methods: {
            ...mapActions('menu',['breadcrumb']),
            setMenu(){
                let open_names = this.menuName || []
                let active_name = this.menuName.join(',')
                if(open_names || active_name){
                    let s = open_names.slice(0,-1)
                    this.openNames = [s[0]]
                    if(s[1]){
                        this.openNames = [s[0],s[0]+','+s[1]]
                    }
                    this.activeName = active_name
                    this.$nextTick(()=>{
                        this.$refs.siderMenu.updateOpened();
                        this.$refs.siderMenu.updateActiveName()
                    })
                }
            }
        },
        watch: {
            $route(val){
                console.log(val)
            }
        }
    }
</script>

