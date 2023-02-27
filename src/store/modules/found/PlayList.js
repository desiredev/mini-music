import apis from '../../../http/apis/apis'

export default {
    namespaced: true,
    state: {
        playList: [],
        offset: 1,
        cat: '全部'
    },
    mutations: {
        // 修改 state 里的 playList 数据
        changePlayList(state, data) {
            state.playList = data
        },
        // 修改 state 里的 
        changeOffset(state, data) {
            state.offset = data
        },
        changeCat(state, data) {
            state.cat = data
        }
    },
    actions: {
        async getPlayList(context) {
            const data = await apis.playList.getPlayList({
                    limit: 100,
                    cat: context.state.cat,
                })
                // 将获取到的音乐列表数据传给 mutation 修改
            context.commit('changePlayList', data.playlists)
        }
    },
    modules: {}

}