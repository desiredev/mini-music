import apis from '../../../http/apis/apis'

export default {
    namespaced: true,
    state: {
        // 获取歌单（所有）
        rankList: [],
        // 飙升榜数据和歌曲数据
        soar: [],
        song1: [],
        big: [],
        small: []
    },
    mutations: {
        changeRankList(state, data) {
            state.big = data
        },

        changeSoar(state, data) {
            state.soar = data
        },
        changeSong(state, data) {
            let s = state.small
            let obj1 = {}
            obj1.rr = data
            s.push(obj1)
        },
        changeBig(state, data) {
            console.log(state.small);
            let b = state.small
            let a = state.big
            for (var i = 0; i < 32; i++) {
                a[i].small = b[i]
            }
            console.log(state.big);
        }
    },
    actions: {
        async getRankList(context) {
            const data = await apis.rank.getRankList()
            let a = []
            for (var i = 0; i < data.list.length; i++) {
                let obj = {}
                obj.rankId = data.list[i].id
                obj.rankImage = data.list[i].coverImgUrl
                a.push(obj)
            }
            context.commit('changeRankList', a)
            context.dispatch('getSoar')
        },
        async getSoar(context) {
            let a = context.state.big
            for (var i = 0; i < a.length; i++) {
                var data = await apis.rank.getSoar({
                    id: a[i].rankId
                })
                context.commit('changeSoar', data)
                context.dispatch('getSong')
            }
            context.commit('changeBig')
        },
        async getSong(context) {
            // 解构
            let d = context.state.soar

            // 遍历数组，拿到ID
            const la = d.privileges.map(item => item.id)

            // 转换成字符串形式
            let str = la.join(',')

            // 获取歌曲详情
            const data = await apis.rank.getSong({
                ids: str
            })
            context.commit('changeSong', data.songs)
        },
    },
    modules: {}
}