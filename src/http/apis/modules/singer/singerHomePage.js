import axios from '../../../axios'

const singerHomePage = {
    getSinger(params) {
        return axios({
            url: '/artists',
            method: 'get',
            params
        })
    },
    getSingerTop(params) {
        return axios({
            url: '/artist/top/song',
            method: 'get',
            params
        })
    },
    getSingerMv(params) {
        return axios({
            url: '/artist/mv',
            method: 'get',
            params
        })
    },
    getSingerDisc(params) {
        return axios({
            url: '/artist/desc',
            method: 'get',
            params
        })
    },
    getSimiSinger(params) {
        return axios({
            url: '/simi/artist',
            method: 'get',
            params
        })
    }
}

export default singerHomePage