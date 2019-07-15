import axios from 'axios'
// 功能确定
// 模块梳理
// 架构基础
// 功能构建

export default function (arr) {
    function _myaxios() {
        this.vueob = null
    }

    _myaxios.prototype.v = function (ob) {
        this.vueob = ob
    }

    // 生成请求
    _myaxios.prototype.getAxios = function (config) {
        let _url = config.url
        let _type = config.type
        let _data = config.data
        // 当前的扩展性更好
        let factory = {
            get: function () {
                return axios.get(_url)
            },
            post: function () {
                return axios.post(_url, _data)
            }
        }
        return factory[_type]
    }

    // 发送请求
    _myaxios.prototype.sendAxios = function (config) {
        let _axios = this.getAxios(config)
        if (this.status || !config.isBlock) {
            !config.isBlock ? this.status = false : ''
            _axios().then(res => {
                this.status = true
                config.success == 'default' ? this.handleAxios(config.dataname, res.data) : config.success.call(this.vueob, res)
            }, err => {
                this.status = true
                config.success == 'default' ? this.handleAxios(config.dataname, err.data) : config.success.call(this.vueob, err)
            })
        }
    }

    // 处理请求
    _myaxios.prototype.handleAxios = function (dataname, data) {
        this.vueob[dataname] = data
    }


    // 初始化模块
    let _a = new _myaxios()
    arr.forEach(item => {
        _a[item.name] = function (config = {}) {
            _a.sendAxios({
                url: item.url,
                type: config.type || 'get',
                success: config.success || 'default',
                data: config.data || {},
                dataname: config.dataname || item.name,
                isBlock: config.isBlock || true
            })
        }
    });
    return _a
}