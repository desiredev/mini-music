import axios from '../../../axios'

const newMusic = {
    getNewSong(params) {
        return axios({
            url: '/top/song',
            method: 'get',
            params
        })
    },
    getNewDisc(params) {
        return axios({
            url: '/top/album',
            method: 'get',
            params
        })
    }
}

export default newMusic