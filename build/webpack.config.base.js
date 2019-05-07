'use strict'

const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    VueLoaderPlugin
} = require('vue-loader')

//找到所有的入口
const entrys = () => {
    let map = {}
    fs.readdirSync(path.resolve(__dirname, '../src/pages')).forEach(filename => {
        map[filename] = path.join(__dirname, `../src/pages/${filename}/${filename}.js`)
    })
    return map
}

//设置出口的HTML
const html = fs.readdirSync(path.resolve(__dirname, '../src/pages')).map(pathName => new HtmlWebpackPlugin({
    title: `--${pathName.toUpperCase()}--`,
    template: `index.html`,
    filename: `${pathName}.html`,
    chunks: ['common', 'manifest', 'vendor', pathName],
    minify: {
        collapseWhitespace: false // 压缩选项
    }
}))

module.exports = {
    entry: entrys,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: `static/js/[name]-[hash:8].js`,
        chunkFilename: `static/js/[name]-[hash:8].js`,
    },
    //文件映射 
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src'),
            '&': path.resolve(__dirname, '../'),
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, '../src')],
                exclude: [path.resolve(__dirname, '../node_modules')]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: "[name]-[hash:5].min.[ext]",
                        limit: 5000,
                        outputPath: "static/css/fonts"
                    }
                }
            }
        ]
    },
    plugins: [
        ...html,
        new VueLoaderPlugin()
    ]
}