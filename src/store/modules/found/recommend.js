import apis from '../../../http/apis/apis'

export default {
    namespaced: true,
    state: {
        banners: [],
        recommendLists: [],
        soleList: [],
        newMusic: [],
        mvList: [],
        anchorList: []
    },
    mutations: {
        changeBanner(state, b) {
            state.banners = b
        },
        changeRecommendList(state, data) {
            state.recommendLists = data
        },
        changeSoleList(state, data) {
            state.soleList = data
        },
        changeNewMusic(state, data) {
            state.newMusic = data
        },
        changeMvList(state, data) {
            state.mvList = data
        },
        changeAnchorList(state, data) {
            state.anchorList = data
        }
    },
    actions: {
        // 获取轮播图数据，并将数据赋值给 banners
        async getBanners(context) {
            const data = await apis.recommend.getBanner()
            context.commit('changeBanner', data)
        },
        async getRecommendList(context) {
            const data = await apis.recommend.getRecommendList()
            context.commit('changeRecommendList', data)
        },
        async getSoleList(context) {
            const data = await apis.recommend.getSoleList()
            context.commit('changeSoleList', data)
        },
        async getNewMusic(context) {
            const data = await apis.recommend.getNewMusic()
            context.commit('changeNewMusic', data)
        },
        async getMv(context) {
            const data = await apis.recommend.getMv()
            context.commit('changeMvList', data)
        },
        async getAnchor(context) {
            const data = await apis.recommend.getAnchor()
            context.commit('changeAnchorList', data)
        }
    },
    modules: {}
}