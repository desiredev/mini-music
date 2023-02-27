import axios from '../../../axios'

const videoPlay = {
    getVidieoUrl(params) {
        return axios({
            url: '/video/url',
            method: 'get',
            params
        })
    },
    getVideoDetails(params) {
        return axios({
            url: '/video/detail',
            method: 'get',
            params
        })
    },
    getRelated(params) {
        return axios({
            url: '/related/allvideo',
            method: 'get',
            params
        })
    }
}

export default videoPlay