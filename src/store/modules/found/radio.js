import apis from '../../../http/apis/apis'

export default {
    namespaced: true,
    state: {
        radioList: [],
        payRadio: [],
        recommendRadio: [],
        createCover: [],
        listenList: [],
        story: [],
        emotion: [],
        friends: []
    },
    mutations: {
        changeRadioList(state, data) {
            state.radioList = data
        },
        changePayRadio(state, data) {
            state.payRadio = data
        },
        changeRecommendRadio(state, data) {
            state.recommendRadio = data
        },
        changeCreateCover(state, data) {
            state.createCover = data
        },
        changeListenList(state, data) {
            state.listenList = data
        },
        changeStory(state, data) {
            state.story = data
        },
        changeEmotion(state, data) {
            state.emotion = data
        },
        changeFriends(state, data) {
            state.friends = data
        }
    },
    actions: {
        async getRadio(context) {
            const data = await apis.radio.getRadio()
            context.commit('changeRadioList', data)
        },
        async getPayRaddio(context) {
            const data = await apis.radio.getPayRaddio({
                limit: 4
            })
            context.commit('changePayRadio', data.data)
        },
        async getRecommendRadio(context) {
            const data = await apis.radio.getRecommendRadio({
                limit: 5
            })
            context.commit('changeRecommendRadio', data)
        },
        async getCreateCover(context) {
            const data = await apis.radio.getCreateCover({
                limit: 2,
                cateId: 2001
            })
            context.commit('changeCreateCover', data)
        },
        async getListen(context) {
            const data = await apis.radio.getListen({
                limit: 3,
                cateId: 10001
            })
            context.commit('changeListenList', data)
        },
        async getStory(context) {
            const data = await apis.radio.getStory({
                limit: 4,
                cateId: 2
            })
            context.commit('changeStory', data)
        },
        async getEmotion(context) {
            const data = await apis.radio.getEmotion({
                limit: 4,
                cateId: 3
            })
            context.commit('changeEmotion', data)
        },
        async getFriend(context) {
            const data = await apis.radio.getFriend({
                limit: 6,
                cateId: 3001
            })
            context.commit('changeFriends', data)
        }
    },
    modules: {}
}