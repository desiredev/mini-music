import apis from '../../../http/apis/apis'

export default {
    namespaced: true,
    state: {
        isLogout: [],
        isLogin: [],
        // 保存用户 ID
        userId: '',
        selfDetails: []
    },
    mutations: {
        changeIsLogout(state, data) {
            state.isLogout = data
        },
        changeIsLogin(state, data) {
            state.isLogin = data
            state.userId = data.profile.userId
        },
        changeSelfDetails(state, data) {
            state.selfDetails = data
            console.log(state.selfDetails);
        }
    },
    actions: {
        // 退出登录
        async logout(context) {
            const data = await apis.mySelf.logout()
            context.commit('changeIsLogout', data)
        },
        async judgeLogin(context) {
            const data = await apis.mySelf.judgeLogin()
            context.commit('changeIsLogin', data)
            context.dispatch('getSelfDetails')
        },
        async getSelfDetails(context) {
            const data = await apis.mySelf.getSelfDetails({ uid: context.state.userId })
            context.commit('changeSelfDetails', data)
        }
    },
    modules: {}
}