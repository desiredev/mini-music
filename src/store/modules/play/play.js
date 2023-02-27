import apis from '../../../http/apis/apis'

export default {
    namespaced: true,
    state: {
        playUrlList: [],
        musicDetails: [],
        lyric: []
    },
    mutations: {
        changePlayUrlList(state, data) {
            state.playUrlList = data
        },
        changeMusicDetails(state, data) {
            state.musicDetails = data
        },
        changeLyrice(state, data) {
            state.lyric = data
        }
    },
    actions: {
        async playUrl(context, id) {
            const data = await apis.play.playUrl({ id })
            context.commit('changePlayUrlList', data.data)
        },
        async getMusicDetails(context, ids) {
            const data = await apis.play.getMusicDetails({ ids })
            context.commit('changeMusicDetails', data.songs[0])
        },
        async getLyric(context, id) {
            const data = await apis.play.getLyric({ id })
            context.commit('changeLyrice', data.lrc)
        }
    },
    modules: {}
}