import apis from '../../../http/apis/apis'

export default {
    namespaced: true,
    state: {
        newMv: [],
        hotMv: [],
        wangYi: [],
        mvRank: []
    },
    mutations: {
        changeNewMv(state, data) {
            state.newMv = data
        },
        changeeHotMv(state, data) {
            state.hotMv = data
        },
        changeWangYi(state, data) {
            state.wangYi = data
        },
        changeMvRank(state, data) {
            state.mvRank = data
        }
    },
    actions: {
        async getNewMv(context, area) {
            const data = await apis.mv.getNewMv({
                limit: 6,
                area
            })
            context.commit('changeNewMv', data.data)
        },
        async getHotMv(context) {
            const data = await apis.mv.getHotMv()
            context.commit('changeeHotMv', data.data)
        },
        async getWangYi(context) {
            const data = await apis.mv.getWangYi()
            context.commit('changeWangYi', data.data)
        },
        async getMvRank(context, area) {
            const data = await apis.mv.getMvRank({
                limit: 10,
                area
            })
            context.commit('changeMvRank', data.data)
        }
    },
    modules: {}
}