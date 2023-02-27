import apis from '../../../http/apis/apis'

export default {
    namespaced: true,
    state: {
        mvPlayDetails: [],
        mvUrl: [],
        simi: [],
        relate: []
    },
    mutations: {
        changeMvPlayDetails(state, data) {
            state.mvPlayDetails = data
        },
        changeMvUrl(state, data) {
            state.mvUrl = data
        },
        changeSimi(state, data) {
            state.simi = data
        },
        changeRelate(state, data) {
            state.relate = data
        }
    },
    actions: {
        async getMvPlayDetails(context, mvid) {
            const data = await apis.mvPlay.getMvPlayDetails({ mvid })
            context.commit('changeMvPlayDetails', data.data)
        },
        async getMvUrl(context, id) {
            const data = await apis.mvPlay.getMvUrl({ id })
            context.commit('changeMvUrl', data.data)
        },
        async getSimi(context, mvid) {
            const data = await apis.mvPlay.getSimi({ mvid })
            context.commit('changeSimi', data.mvs)
        },
        async getRelated(context) {
            const data = await apis.mvPlay.getRelated()
            context.commit('changeRelate', data.data)
        }
    },
    modules: {}
}