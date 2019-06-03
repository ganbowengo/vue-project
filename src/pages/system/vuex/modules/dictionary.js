const state = {
    fplxdm: (() => [
        {
            name: '二手车销售统一发票',
            code: '006'
        },
        {
            name: '增值税专用发票',
            code: '004'
        },
        {
            name: '增值税普通发票',
            code: '007'
        },
        {
            name: '机动车销售统一发票',
            code: '005'
        },
        {
            name: '增值税电子普通发票',
            code: '026'
        },
        {
            name: '增值税普通发票(卷票)',
            code: '025'
        }
    ])(),
    qybz: (() => [
        {
            name: '是',
            code: '1'
        },
        {
            name: '否',
            code: '0'
        }
    ])(),
    xtqx: (() => [
        {
            code: '1',
            name: '管理员'
        },
        {
            code: '2',
            name: '业务员'
        },
        {
            code: '3',
            name: '审计员'
        }
    ])()
}

const mutations = {
    fplxdm (state) {},
    qybz (state) {},
    xtqx (state) {}
}

const actions = {
    fplxdm: ({
        commit
    }) => commit('fplxdm'),
    qybz: ({
        commit
    }) => commit('qybz'),
    xtqx: ({
        commit
    }) => commit('xtqx')
}

const getters = {
    fplxdm: state => state.fplxdm,
    qybz: state => state.qybz,
    xtqx: state => state.xtqx
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
