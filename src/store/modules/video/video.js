import apis from '../../../http/apis/apis'

export default {
    namespaced: true,
    state: {
        videoTagList: [],
        videoList: []
    },
    mutations: {
        changeVideoTagList(state, data) {
            state.videoTagList = data
        },
        changeVideoList(state, data) {
            state.videoList = data
        }
    },
    actions: {
        async getVideoTag(context) {
            const data = await apis.video.getVideoTag()
            context.commit('changeVideoTagList', data.data)
        },
        async getVideoList(context, id) {
            const data = await apis.video.getVideoList({ id })
            context.commit('changeVideoList', data.datas)
        },

    },
    modules: {}
}