import apis from '../../../http/apis/apis'

export default {
    namespaced: true,
    state: {
        // 单曲
        searchSingleList: [],
        // 歌手
        searchSinger: [],
        // 视频
        searchVideo: [],
        // 歌单
        searchPlayList: [],
        // 主播电台
        searchRadio: [],
        // 用户
        searchUser: [],
    },
    mutations: {
        // 单曲
        changeSearchSingleList(state, data) {
            state.searchSingleList = data
        },
        // 歌手
        changeSearchSinger(state, data) {
            state.searchSinger = data
        },
        // 视频
        changeSearchVideo(state, data) {
            state.searchVideo = data
        },
        // 歌单
        changeSearchPlayList(state, data) {
            state.searchPlayList = data
        },
        // 主播电台
        changeSearchRadio(state, data) {
            state.searchRadio = data
        },
        // 用户
        changeSearchUser(state, data) {
            state.searchUser = data
            console.log(state.searchUser);
        },
    },
    actions: {
        // 单曲
        async getSearchSingle(context, params) {
            const data = await apis.search.getSearchSingle(params)
            context.commit('changeSearchSingleList', data.result.songs)
        },
        // 歌手
        async getSearchSinger(context, params) {
            console.log(params);
            const data = await apis.search.getSearchSinger(params)
            context.commit('changeSearchSinger', data.result.artists)
        },
        // 视频
        async getSearchVideo(context, params) {
            const data = await apis.search.getSearchVideo(params)
            context.commit('changeSearchVideo', data.result.videos)
        },
        // 歌单
        async getSearchPlayList(context, params) {
            const data = await apis.search.getSearchPlayList(params)
            context.commit('changeSearchPlayList', data.result.playlists)
        },
        // 主播电台
        async getSearchRadio(context, params) {
            const data = await apis.search.getSearchRadio(params)
            context.commit('changeSearchRadio', data.result.djRadios)
        },
        // 用户
        async getSearchUser(context, params) {
            const data = await apis.search.getSearchUser(params)
            context.commit('changeSearchUser', data.result.userprofiles)
        },
    },
    modules: {}
}