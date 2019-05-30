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
const invoiceCodeSearch = require('./data/sys/invoiceCodeSearch')

// url 对应的数据
const urlReflectionData = {
    // '/frontend/sys/login' : login,
    // '/frontend/sys/token' : token,
    '/frontend/sys/xtcsManagement/selectFileName': about,
    '/frontend/sys/user/queryUserPowerMenu': menu,
    '/sys/fpzldm/searchFpzldm': invoiceCodeSearch
}

const mockInit = function () {
    let proxy = {}
    for (let key in urlReflectionData) {
        proxy['POST ' + key] = (req, res) => {
            res.send(urlReflectionData[key])
        }
    }
    return proxy
}

module.exports = mockInit()
