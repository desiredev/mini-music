import apis from '../../http/apis/apis'

export default {
    namespaced: true,
    state: {
        login: [],
        code: [],
        checkCd: []
    },
    mutations: {
        changeLogin(state, data) {
            state.login = data
        },
        changeCode(state, data) {
            state.code = data
        },
        changeCheckCode(state, data) {
            state.checkCd = data
        }
    },
    actions: {
        async isLogin(context, params) {
            const data = apis.login.isLogin({ phone: params.phone, password: params.password })
        },
        async judgeLogin(context) {
            const data = await apis.login.judgeLogin()
            context.commit('changeLogin', data)
        },
        async sendCode(context, phone) {
            const data = await apis.login.sendCode({ phone })
            context.commit('changeCode', data)
        },
        async checkCode(context, params) {
            console.log(params);
            const data = await apis.login.checkCode({
                phone: params.phone,
                captcha: params.captcha
            })
            context.commit('changeCheckCode', data)
        }
    },
    modules: {}
}