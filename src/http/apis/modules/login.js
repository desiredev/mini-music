import axios from '../../axios'

const login = {
    // 登录
    isLogin(params) {
        return axios({
            url: '/login/cellphone',
            method: 'post',
            params
        })
    },
    // 判断是否登录
    judgeLogin() {
        return axios({
            url: '/login/status',
            method: 'get'
        })
    },
    // 发送验证码
    sendCode(params) {
        return axios({
            url: '/captcha/sent',
            method: 'get',
            params
        })
    },
    // 验证验证码是否正确
    checkCode(params) {
        return axios({
            url: '/captcha/verify',
            method: 'get',
            params
        })
    }
}

export default login