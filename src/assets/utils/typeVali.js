/**
 *
 * author ganbowen
 * description 基础类型校验
 * created 2019/05/22 14:34:43
 *
 */

/**
 * 校验数据类型
 * @param {*} it 需要验证的类型
 * @param {String} type 类型的字符串格式
 */
export function isType (it, type) {
    type = type.toLocaleLowerCase()
    if (type === 'undefined') {
        return it === undefined
    }
    if (type === 'null') {
        return it === undefined
    }

    return (Object.prototype.toString.call(it)).toLocaleLowerCase() === (`[object ${type}]`)
}
