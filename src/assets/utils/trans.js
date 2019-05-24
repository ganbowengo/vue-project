/**
 * 
 * author ganbowen
 * description 字典转换公共工具函数
 * created 2019/05/22 11:41:41
 * 
 */
import { isType } from './typeVali'
import store from '@system/vuex/modules/dictionary'
const Dic = store.state
/**
 * 将data中的code转换为name的工具函数
 * @param {Object} data 需要转换的对象
 * @param {Array} transWord 需要转换的字段组成的arr
 * @param {Object} Dic 整个字典
 * @return {} 返回转换过字典的数据
 */
export function transDictionary(data = [], transWord = []) {
    for (let word of transWord) {
        for (let key in data) {
            let item = data[key]

            if (isType(item, 'object')) {
                if (item.hasOwnProperty(word)) {
                    Dic[word].forEach(element => {
                        if (element.code === item[word]) {
                            data[key][word] = element.name
                        }
                    })
                }
                for (let i in item) {
                    let it = item[i]
                    if (isType(it, 'object') || isType(it, 'array')) {
                        transDictionary(it, transWord)
                    }
                }
            }

            if (isType(item, 'array') && item.length > 0) {
                transDictionary(item, transWord)
            }

            if (key === word && !isType(item, 'object') && !isType(item, 'array')) {
                Dic[word].forEach(element => {
                    if (element.code === item[word]) {
                        data[word] = element.name
                    }
                })
            }
        }
    }
    return data
}

/**
 * change code to name 
 * @param {String|Number} it 转换的字段的code
 * @param {String} word 转换的字段
 * @return {String} 装换后的name
 */
export function changeCodeToName(it, word) {
    for (let key of Dic[word]) {
        if (it === Dic[word][key].code) {
            it = Dic[word][key].name
            break
        }
    }
    return it
}

/**
 * change name to code
 * @param {String} it 转换的字段的name
 * @param {String} word 转换的字段
 * @return {String|Number} 装换后的code
 */
export function changeNameToCode(it, word) {
    for (let key of Dic[word]) {
        if (it === Dic[word][key].name) {
            it = Dic[word][key].code
            break
        }
    }
    return it
}