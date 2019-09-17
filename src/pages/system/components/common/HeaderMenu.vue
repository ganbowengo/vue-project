<template>
    <div>
        <Header class="header">
            <h1>发票管理系统</h1>
            <div class="logout">
                <span @click="logout">退出</span>
                <em>|</em>
                <span @click="about">关于</span>
            </div>
        </Header>
        <about-modal ref='AboutModal'></about-modal>
    </div>
</template>

<script>
import AboutModal from './modal/AboutModal'
export default {
    components: {AboutModal},
    methods: {
        logout () {
            this.http.get('/sys/logout', {}).then(res => {
                if (res.success) {
                    window.location.href = 'login.html'
                }
            }).catch(error => {
                throw error
            })
        },
        about () {
            this.$refs.AboutModal.show = true
        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        // 图片引入方式 background: #0e3aaa url('~@/assets/img/headerbg.jpg') no-repeat 0 0;
        background: #0e3aaa;
        width: 100%;
        background-size: auto 100%;
        height: 70px;
        line-height: 70px;
        font-size: 14px;
        display: flex;
        padding: 0 20px;
        justify-content: space-between;
        h1{
            color:#fff;
        }
    }
    .logout{
        color: #fff;
        padding-right: 20px;
        width: 180px;
        float: right;
        span{
            cursor: pointer;
            &:hover{
                color: #6cb0f1;
            }
        }
    }
</style>


