/**
 *
 * author ganbowen
 * description 全局公共工具函数
 * created 2019/05/24 10:57:44
 *
 */
import {
    changeCodeToName,
    changeNameToCode
} from './trans'

function formatValue(target) {
    return target > 10 ? target : '0' + target
}

export default {
    /**
     * 附初始值
     * @param {Object|array} accept
     * @param {Object|array} send
     * @return accept
     */
    initAccept(accept = {}, send = {}) {
        for (let key in accept) {
            accept[key] = send[key]
        }
        return accept
    },
    /**
     * 置空object
     * @param {Object|array} accept
     * @return accept
     */
    initEmpty(accept = {}) {
        for (let key in accept) {
            accept[key] = ''
        }
        return accept
    },
    /**
     * @param {Date} date 
     * @param {yyyy-mm-dd hh:MM:ss} format 
     */
    setDate(date, format = 'yyyy-mm-dd hh:MM:ss') {
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDay()
        let hour = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        month = formatValue(month)
        hour = formatValue(hour)
        minutes = formatValue(minutes)
        seconds = formatValue(seconds)
        format = format.replace('yyyy', year)
        format = format.replace('mm', month)
        format = format.replace('dd', day)
        format = format.replace('hh', hour)
        format = format.replace('MM', minutes)
        format = format.replace('ss', seconds)
        return format
    },
    changeCodeToName,
    changeNameToCode
}