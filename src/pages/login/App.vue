<template>
    <div id="app">
        <Form class="login" :model="loginInfo" :label-width="80">
            <FormItem label="用户名">
                <Input v-model="loginInfo.userName" placeholder='用户名' />
            </FormItem>
            <FormItem label="密码">
                <Input v-model="loginInfo.password" type='password' placeholder='密码'/>
            </FormItem>
            <FormItem>
                <Button type='primary' @click='login' :long='true'>登录</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
import md5 from 'md5'

export default {
    name: 'App',
    data(){
        return {
            loginInfo: {
                userName: '11123456789',
                password: '12345678W@',
                validateCode: ''
            }
        }
    },
    methods: {
        login(){
            let parms = this.loginInfo 
            parms.password = md5(parms.password)
            this.http.post('/sys/login',parms).then(res => {
                if (res.success) {
                    let data = res.data && res.data[0] || {}
                    this.saveUserInfo(data)
                    this.getToken()
                }
            }).catch(error => {
                throw error
            })
        },
        saveUserInfo(data = {}){
            Object.keys(data).forEach(key => {
                sessionStorage.setItem(key, data[key])
            })
        },
        //获取token
        getToken() {
            let loginInfo = this.loginInfo
            delete loginInfo.validateCode
            this.http.post('/sys/token', loginInfo).then(res => {
                let token = res.headers.author
                if(token){
                    sessionStorage.setItem('token', token)
                    window.location.href = 'system.html'
                }
            }).catch(error => {
                throw error
            })
        }
    }
}
</script>

<style lang="scss">
    .login{
        width: 400px;
        height: 200px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform:translate(-50%,-50%);
    }
</style>