<template>
    <Modal
        v-model="show"
        title="关于">
        <p>系统名称：{{sysName}}</p>
        <p>版本：{{version}}</p>
        <div slot="footer"></div>
    </Modal>
</template>

<script>
export default {
    data () {
        return {
            show: false,
            sysName:'增值税发票税控系统',
            version:'2.0.0'
        }
    },
    mounted () {
        this.about()
    },
    methods: {
        about () {
            this.http.post('/sys/xtcsManagement/selectFileName',
                {
                    xtcsslh:'05'
                }
            ).then(res => {
                if(res.success){
                    let result = res.data[0]
                    this.sysName = result.xtcsmc
                    this.version = result.xtcsz
                }
            }).catch(error => {
                throw error
            })
        }
    }
}
</script>

<style lang="scss">
</style>
