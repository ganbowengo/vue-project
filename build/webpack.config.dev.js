'use strict'

const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
    mode: 'development',
    //运行的配置
    devServer: {
        open: true,
        compress: true,
        clientLogLevel: 'warning',
        host: '0.0.0.0',
        port: '8090',
        inline: true,
        hot: true,
        openPage: 'login.html',
        proxy: {
            '/api': {
                target: 'http://www.baidu.com',
                secure: false,
                pathRewrite: {
                    '^/api': '/' //调用'http://www.baidu.com/search'，直接写‘/api/search’即可
                }
            }
        }
    },
    //文件映射 
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src')
        }
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
    }
})