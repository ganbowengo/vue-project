/**
 *
 * author ganbowen
 * description 基础配置
 * created 2019/05/03 14:30:18
 *
 */
'use strict'
const os = require('os')
const fs = require('fs')
const path = require('path')
const conf = require('./conf')
const cdn = require('./cdn')
const webpack = require('webpack')
const HappyPack = require('happypack') // 多线程打包
const { VueLoaderPlugin } = require('vue-loader') // 处理.vue文件
const HtmlWebpackPlugin = require('html-webpack-plugin') //动态生成HTML模板
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // css分离打包处理
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length }) // 获取cpu数量
const cssLoader = new MiniCssExtractPlugin({
    use: [
        'happypack/loader?id=css'
    ]
})
const externalConfig = JSON.parse(JSON.stringify(cdn.externalConfig))  // 读取配置
const externalModules = cdn.getExternalModules(externalConfig) // externalConfig 修改成cdn的路径 返回忽略的资源配置
const resolve = conf.resolve

// 生成happypack plugin
const creatHappypack = (id, loaders) => new HappyPack({
    id,
    loaders,
    threadPool: happyThreadPool
})

// 找到所有的入口
const entrys = () => {
    let map = {}
    fs.readdirSync(resolve('src/pages')).forEach(filename => {
        map[filename] = ['@babel/polyfill', conf.join(`src/pages/${filename}/${filename}.js`)]
    })
    return map
}
// 设置出口的HTML
const html = fs.readdirSync(resolve('src/pages')).map(pathName => new HtmlWebpackPlugin({
    title: `--${pathName.toUpperCase()}--`,
    template: 'index.html',
    filename: `${pathName}.html`,
    chunks: ['common', 'manifest', 'vendor', pathName],
    minify: {
        collapseWhitespace: false // 压缩选项
    },
    cdnConfig: externalConfig // cdn配置
}))

module.exports = {
    entry: entrys,
    output: {
        path: resolve('dist'),
        filename: 'static/js/[name]-[hash:8].js',
        chunkFilename: 'static/js/[name]-[hash:8].js'
    },
    // 文件映射
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            '@system': resolve('src/pages/system'),
            '&': resolve('')
        }
    },
    externals: externalModules, // 排除cdn引入的文件
    module: {
        rules: [{
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            //指定检查的目录
            include: [resolve('src')],
            //eslint检查报告的格式规范
            options: {
                formatter: require('eslint-friendly-formatter')
            }
        },
        {
            test: /\.js$/,
            loader: 'happypack/loader?id=js',
            include: [resolve('src')],
            exclude: [/node_modules/]
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                js: 'happypack/loader?id=vue',
                css: cssLoader
            }
        },
        {
            test: /\.scss$/,
            exclude: [/node_modules/]
        },
        {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        },
        {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name]-[hash:5].min.[ext]',
                    limit: 5000,
                    outputPath: 'static/css/fonts'
                }
            }
        }
        ]
    },
    plugins: [
        ...html,
        new VueLoaderPlugin(),
        new HappyPack({
            id: 'js',
            loaders: ['babel-loader?cacheDirectory=true'],
            threadPool: happyThreadPool
        }),
        creatHappypack('js', ['babel-loader?cacheDirectory=true']),
        creatHappypack('vue', ['babel-loader?cacheDirectory=true']),
        creatHappypack('css', ['css-loader', 'vue-style-loader']),
        new webpack.DefinePlugin({
            MOCK: conf.MOCK
        })
    ]
}