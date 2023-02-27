import axios from '../../../axios'

const play = {
    playUrl(params) {
        return axios({
            url: '/song/url',
            method: 'get',
            params
        })
    },
    getMusicDetails(params) {
        return axios({
            url: '/song/detail',
            method: 'get',
            params
        })
    },
    getLyric(params) {
        return axios({
            url: '/lyric',
            method: 'get',
            params
        })
    }
}

export default play