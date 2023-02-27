import apis from '../../../http/apis/apis'

export default {
    namespaced: true,
    state: {
        newSong: [],
        newDisc: []
    },
    mutations: {
        changeNewSong(state, data) {
            state.newSong = data
        },
        changeNewDisc(state, data) {
            state.newDisc = data
        }
    },
    actions: {
        async getNewSong(context, type) {
            const data = await apis.newMusic.getNewSong({ type })
            context.commit('changeNewSong', data.data)
        },
        async getNewDisc(context, type) {
            if ((type.type != '' || type.area != '') && type.area != 'ALL') {
                const data = await apis.newMusic.getNewDisc({
                    area: type.area,
                    type: type.type
                })
                context.commit('changeNewDisc', data.monthData)
            } else {
                const data = await apis.newMusic.getNewDisc({
                    area: "ALL",
                })
                context.commit('changeNewDisc', data.weekData)
            }

        }
    },
    modules: {}
}