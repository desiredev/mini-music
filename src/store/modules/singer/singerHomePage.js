import apis from '../../../http/apis/apis'

export default {
    namespaced: true,
    state: {
        singerId: '',
        singer: [],
        singerTop: [],
        singerMv: [],
        singerDisc: [],
        simiSinger: []
    },
    mutations: {
        changeSinger(state, data) {
            state.singer = data
        },
        changeSingerTop(state, data) {
            state.singerTop = data
        },
        changeSingerMv(state, data) {
            state.singerMv = data
        },
        changeSingerDisc(state, data) {
            state.singerDisc = data
        },
        changeSimiSinger(state, data) {
            state.simiSinger = data
        }
    },
    actions: {
        async singerHomePage(context, id) {
            const data = await apis.singerHomePage.getSinger({ id })
            context.state.singerId = id
            context.commit('changeSinger', data.artist)
            context.dispatch('getSingerTop')
            context.dispatch('getSingerMv')
            context.dispatch('getSingerDisc')
            context.dispatch('getSimiSinger')
        },
        // 获取top50首歌曲
        async getSingerTop(context) {
            let id = context.state.singerId
            const data = await apis.singerHomePage.getSingerTop({ id })
            context.commit('changeSingerTop', data.songs)
        },
        // 获取MV
        async getSingerMv(context) {
            let id = context.state.singerId
            const data = await apis.singerHomePage.getSingerMv({ id })
            context.commit('changeSingerMv', data.mvs)
        },
        // 获取歌曲描述
        async getSingerDisc(context) {
            let id = context.state.singerId
            const data = await apis.singerHomePage.getSingerDisc({ id })
            context.commit('changeSingerDisc', data.introduction)
        },
        // 获取相似歌手
        async getSimiSinger(context) {
            let id = context.state.singerId
            const data = await apis.singerHomePage.getSimiSinger({ id })
            context.commit('changeSimiSinger', data.artists)
        }
    },
    modules: {}
}