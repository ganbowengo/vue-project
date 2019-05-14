/**
 * 
 * author ganbowen
 * description 生产环境
 * created 2019/05/03 14:28:18
 * 
 */
'use strict'

const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'hidden-source-map',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: path.resolve(__dirname, 'postcss.config.js')
                        }
                    }
                },
                "sass-loader"
            ]
        }]
    },
    plugins: [
        //提取css
        new MiniCssExtractPlugin({
            filename: "static/css/[name]-[hash:8].css",
            chunkFilename: "static/css/[name]-[hash:8].chunk.css"
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ],
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: "async",
            cacheGroups: {
                common: {
                    name: 'common',
                    minSize: 1,
                    chunks: 'all',
                    priority: 0,
                    minChunks: 2 // 使用含n个及以上的打包为一个文件
                },
                vendor: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 10,
                    minChunks: 2
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    }
})