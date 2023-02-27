import axios from '../../../axios'

const mv = {
    getNewMv(params) {
        return axios({
            url: '/mv/first',
            method: 'get',
            params
        })
    },
    getHotMv() {
        return axios({
            url: '/mv/all',
            method: 'get',
            params: { limit: 6, order: '最热' }
        })
    },
    getWangYi() {
        return axios({
            url: '/mv/exclusive/rcmd',
            method: 'get',
            params: { limit: 6 }
        })
    },
    getMvRank(params) {
        return axios({
            url: '/top/mv',
            method: 'get',
            params
        })
    }
}

export default mv