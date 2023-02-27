import axios from '../../../axios'

const details = {
    getDetails(params) {
        return axios({
            url: '/playlist/detail',
            method: 'get',
            params
        })
    },
    getMusicList(params) {
        return axios({
            url: '/song/detail',
            method: 'get',
            params
        })
    },
    getCollection(params) {
        return axios({
            url: '/playlist/subscribers',
            method: 'get',
            params
        })
    },
    getComment(params) {
        return axios({
            url: '/comment/playlist',
            method: 'get',
            params
        })
    }
}

export default details