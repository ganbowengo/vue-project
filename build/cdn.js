/*
 * @Descripttion: cdn配置
 * @Author: ganbowen
 * @Date: 2020-01-05 10:54:19
 * @LastEditors  : ganbowen
 * @LastEditTime : 2020-01-05 11:38:07
 */
module.exports = {
    cdnBaseHttp: 'https://cdn.bootcss.com',
    externalConfig: [
        { name: 'vue', scope: 'Vue', js: 'vue.min.js' },
        { name: 'vue-router', scope: 'VueRouter', js: 'vue-router.min.js' },
        { name: 'axios', scope: 'axios', js: 'axios.min.js' },
        { name: 'vuex', scope: 'Vuex', js: 'vuex.min.js' },
        { name: 'iview', scope: 'iview', js: 'iview.min.js', css: 'styles/iview.css' }
    ],
    getModulesVersion() {
        let mvs = {};
        let regexp = /^npm_package_.{0,3}dependencies_/gi;
        for (let m in process.env) { // 从node内置参数中读取，也可直接import 项目文件进来
            if (regexp.test(m)) { // 匹配模块
                // 获取到模块版本号
                mvs[m.replace(regexp, '').replace(/_/g, '-')] = process.env[m].replace(/(~|\^)/g, '');
            }
        }
        return mvs;
    },
    getExternalModules(config) {
        let externals = {}; // 结果
        let dependencieModules = this.getModulesVersion(); // 获取全部的模块和版本号
        config = config || this.externalConfig; // 默认使用utils下的配置
        config.forEach(item => { // 遍历配置
            if (item.name in dependencieModules) {
                let version = dependencieModules[item.name];
                // 拼接css 和 js 完整链接
                item.css = item.css && [this.cdnBaseHttp, item.name, version, item.css].join('/');
                item.js = item.js && [this.cdnBaseHttp, item.name, version, item.js].join('/');
                externals[item.name] = item.scope; // 为打包时准备
            } else {
                throw new Error('相关依赖未安装，请先执行npm install ' + item.name);
            }
        });
        return externals;
    }
}