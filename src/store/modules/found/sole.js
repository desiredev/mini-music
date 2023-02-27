import apis from '../../../http/apis/apis'

export default {
    namespaced: true,
    state: {
        soleList: []
    },
    mutations: {
        changeSoleList(state, data) {
            state.soleList = data
        }
    },
    actions: {
        async getSoleList(context) {
            const data = await apis.personal.getSoleList()
            context.commit('changeSoleList', data.result)
        }
    },
    modules: {}
}