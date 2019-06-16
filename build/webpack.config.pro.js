/**
 *
 * author ganbowen
 * description 生产环境
 * created 2019/05/03 14:28:18
 *
 */
'use strict'

const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清空打包文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // css分离打包处理
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // 打包分析工具
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin') // 多线程压缩js 打包速度优化
module.exports = merge(baseConfig, {
    mode: 'production',
    // devtool: 'hidden-source-map',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require('autoprefixer'), require('cssnano')]
                    }
                },
                'sass-loader'
            ]
        }]
    },
    plugins: [
        // 提取css
        new MiniCssExtractPlugin({
            filename: 'static/css/[name]-[hash:8].css',
            chunkFilename: 'static/css/[name]-[hash:8].chunk.css'
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false // 是否自动打开分析页面
        })
    ],
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'async',
            cacheGroups: {
                common: {
                    name: 'common',
                    minSize: 1,
                    chunks: 'all',
                    priority: 0,
                    minChunks: 2 // 使用含n个及以上的打包为一个文件
                },
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: 10,
                    minChunks: 2
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        },
        minimizer: [
            // 多线程压缩JS
            new ParallelUglifyPlugin({
                cacheDir: '.cache/', // 缓存压缩后的结果，下次遇到一样的输入时直接从缓存中获取压缩后的结果并返回
                exclude: /[\\/]node_modules[\\/]/,
                uglifyJS: {
                    output: {
                        comments: false, // 是否保留代码中的注释
                        beautify: false // 是否输出可读性较强的代码，即会保留空格和制表符
                    },
                    compress: {
                        warnings: false,
                        drop_console: true // 是否删除代码中所有的console语句，默认为不删除
                    }
                }
            })
        ]
    }
})
