import axios from '../../../axios'

const search = {
    getSearchSingle(params) {
        return axios({
            url: '/cloudsearch',
            method: 'get',
            params
        })
    },
    getSearchSinger(params) {
        return axios({
            url: '/cloudsearch',
            method: 'get',
            params
        })
    },
    getSearchVideo(params) {
        return axios({
            url: '/cloudsearch',
            method: 'get',
            params
        })
    },
    getSearchPlayList(params) {
        return axios({
            url: '/cloudsearch',
            method: 'get',
            params
        })
    },
    getSearchRadio(params) {
        return axios({
            url: '/cloudsearch',
            method: 'get',
            params
        })
    },
    getSearchUser(params) {
        return axios({
            url: '/cloudsearch',
            method: 'get',
            params
        })
    },
}

export default search