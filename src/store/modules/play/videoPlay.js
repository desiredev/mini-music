import apis from '../../../http/apis/apis'

export default {
    namespaced: true,
    state: {
        videoUrl: [],
        videoDetails: [],
        relate: []
    },
    mutations: {
        changeVideoUrl(state, data) {
            state.videoUrl = data
        },
        changeVideoDetails(state, data) {
            state.videoDetails = data
        },
        changeRelate(state, data) {
            state.relate = data
        }
    },
    actions: {
        async getVidieoUrl(context, id) {
            const data = await apis.videoPlay.getVidieoUrl({ id })
            context.commit('changeVideoUrl', data.urls)
        },
        async getVideoDetails(context, id) {
            const data = await apis.videoPlay.getVideoDetails({ id })
            context.commit('changeVideoDetails', data.data)
        },
        async getRelated(context, id) {
            const data = await apis.videoPlay.getRelated({ id })
            context.commit('changeRelate', data.data)
        }
    },
    modules: {}
}