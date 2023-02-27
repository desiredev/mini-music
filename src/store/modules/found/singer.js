import apis from '../../../http/apis/apis'

export default {
    namespaced: true,
    state: {
        singerList: [],
    },
    mutations: {
        changeSingerList(state, data) {
            state.singerList = data
        }
    },
    actions: {
        async getSinger(context, pue) {
            console.log(pue);
            const data = await apis.singer.getSinger({
                limit: 100,
                type: pue.type1,
                area: pue.area1,
                initial: pue.initial1
            })
            context.commit('changeSingerList', data)
        }
    },
    modules: {}
}