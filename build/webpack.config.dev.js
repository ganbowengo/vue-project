/**
 * 
 * author ganbowen
 * description 开发环境
 * created 2019/05/03 14:27:18
 * 
 */
'use strict'

const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')
const apiMocker = require('webpack-api-mocker')
const mocker = path.resolve(__dirname, '../mock/mock-config.js')
const proxy = {
    '/frontend': {
        target: 'http://192.168.2.231:8000',
        secure: false,
        pathRewrite: {
            '^/': '/' //调用'http://192.168.2.231:8000/search'，直接写‘/api/search’即可
        }
    }
}
const MOCK = true
module.exports = merge(baseConfig, {
    mode: 'development',
    //运行的配置
    devtool: 'cheap-module-eval-source-map', // 可以在开发环境看到源文件
    devServer: {
        before(app) {
            if (MOCK) {
                apiMocker(app, mocker, {
                    proxy,
                    changeHost: true
                })
            }
        },
        open: true,
        compress: true,
        clientLogLevel: 'warning',
        host: '0.0.0.0',
        port: '8090',
        inline: true,
        hot: true,
        openPage: 'login.html',
        proxy
        // proxy: {
        //     '/proxy': {
        //         target: 'http://your_api_server.com',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/proxy': ''
        //         }
        //  }
        // 假设你主机名为 localhost:8080 , 请求 API 的 url 是 http：//your_api_server.com/user/list
        // '/proxy'：如果点击某个按钮，触发请求 API 事件，这时请求 url 是http：//localhost:8080/proxy/user/list 。
        // changeOrigin：如果 true ，那么 http：//localhost:8080/proxy/user/list 变为 http：//your_api_server.com/proxy/user/list 。但还不是我们要的 url 。
        // pathRewrite：重写路径。匹配 /proxy ，然后变为'' ，那么 url 最终为 http：//your_api_server.com/user/list 。

    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    plugins:[
        new webpack.DefinePlugin({
            MOCK
        })
    ]
})