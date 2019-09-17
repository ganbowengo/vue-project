/**
 *
 * author ganbowen
 * description mock url and data config
 * created 2019/05/14 14:32:38
 *
 */
// const login = require('./data/common/login')
// const token = require('./data/common/token')
const menu = require('./data/common/menu')
const about = require('./data/common/about')
const success = require('./data/common/success')
const invoiceCodeSearch = require('./data/sys/invoiceCodeSearch')
const queryRole = require('./data/sys/powerManager')
const invoiceCodeManager = require('./data/sys/invoiceCodeManager')


// url 对应的数据
const urlReflectionData = {
    // '/sys/login' : login,
    // '/sys/token' : token,
    '/sys/xtcsManagement/selectFileName': about,
    '/sys/user/queryUserPowerMenu': menu,
    //角色管理
    '/sys/role/queryRole': queryRole,
    '/sys/role/saveRole': success,

    //发票种类代码管理
    '/sys/fpzldm/searchFpzldm': invoiceCodeSearch,
    '/sys/fpzldm/addFpzldm': success,

    //发票代码管理
    '/sys/fpdm/searchFpdm': invoiceCodeManager,
    '/sys/fpdm/addFpdm': success
}

const mockInit = function () {
    let proxy = {}
    for (let key in urlReflectionData) {
        proxy['POST /frontend' + key] = (req, res) => {
            res.send(urlReflectionData[key])
        }
    }
    return proxy
}

module.exports = mockInit()