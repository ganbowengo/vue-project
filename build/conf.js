/*
 * @Descripttion: 
 * @Author: ganbowen
 * @Date: 2020-01-04 11:18:36
 * @LastEditors  : ganbowen
 * @LastEditTime : 2020-01-05 10:54:10
 */
const path = require('path')

module.exports = {
    MOCK: true,
    host: '0.0.0.0',
    port: '8090',
    resolve: (url) => path.resolve(__dirname, '..', url),
    join: (url) => path.join(__dirname, '..', url) 
}