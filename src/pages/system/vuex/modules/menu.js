const state = {
    menuName: ''
}

const mutations = {
    breadcrumb(state, url) {
        url && sessionStorage.setItem('url',url)
        url = sessionStorage.getItem('url') || ''
        state.menuName = url.split(',')
    }
}

const actions = {
    breadcrumb: ({
        commit
    }, url) => commit('breadcrumb', url)
}

const getters = {
    menuName: state => state.menuName
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}