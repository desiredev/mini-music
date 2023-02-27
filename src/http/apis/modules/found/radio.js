import axios from '../../../axios'

const radio = {
    getRadio() {
        return axios({
            url: '/dj/banner',
            method: 'get'
        })
    },
    getPayRaddio(params) {
        return axios({
            url: '/dj/paygift',
            method: 'get',
            params
        })
    },
    getRecommendRadio(params) {
        return axios({
            url: '/dj/personalize/recommend',
            method: 'get',
            params
        })
    },
    getCreateCover(params) {
        return axios({
            url: '/dj/radio/hot',
            method: 'get',
            params
        })
    },
    getListen(params) {
        return axios({
            url: '/dj/radio/hot',
            method: 'get',
            params
        })
    },
    getStory(params) {
        return axios({
            url: '/dj/radio/hot',
            method: 'get',
            params
        })
    },
    getEmotion(params) {
        return axios({
            url: '/dj/radio/hot',
            method: 'get',
            params
        })
    },
    getFriend(params) {
        return axios({
            url: '/dj/radio/hot',
            method: 'get',
            params
        })
    }
}

export default radio