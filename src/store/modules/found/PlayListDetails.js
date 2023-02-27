import apis from '../../../http/apis/apis'

export default {
    namespaced: true,

    state: {
        id: '',
        detailsList: [],
        musicList: [],
        collectionList: [],
        commentList: [],
        hotComment: []
    },
    mutations: {
        changeDetailsList(state, data) {
            state.detailsList = data
        },
        changeMusicList(state, data) {
            state.musicList = data
        },
        changeCollectionList(state, data) {
            state.collectionList = data
        },
        changeCommentList(state, data) {
            state.commentList = data.comments
            state.hotComment = data.hotComments
        }
    },
    actions: {
        async getDetails(context, id) {
            context.state.id = id
            const data = await apis.details.getDetails({ id })
            context.commit('changeDetailsList', data.playlist)
            context.dispatch('getMusicList')
        },
        async getMusicList(context) {
            let d = context.state.detailsList.trackIds
            let id1 = d.map(item => item.id)
            let ids = id1.join(',')
            const data = await apis.details.getMusicList({ ids })
            context.commit('changeMusicList', data.songs)
            context.dispatch('getCollection')
        },
        async getCollection(context) {
            let id = context.state.id
            const data = await apis.details.getCollection({ id, limit: 100 })
            context.commit('changeCollectionList', data.subscribers)
            context.dispatch('getComment')
        },
        async getComment(context) {
            let id = context.state.id
            const data = await apis.details.getComment({ id })
            context.commit('changeCommentList', data)
        }
    },
    modules: {}
}