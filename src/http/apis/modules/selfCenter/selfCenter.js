import axios from '../../../axios'

const mySelf = {
    logout() {
        return axios({
            url: '/logout',
            method: 'get'
        })
    },
    // 判断登录状态
    judgeLogin() {
        return axios({
            url: '/login/status',
            method: 'get'
        })
    },
    getSelfDetails(params) {
        return axios({
            url: '/user/detail',
            method: 'get',
            params
        })
    }
}

export default mySelf