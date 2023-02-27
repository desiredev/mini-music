import axios from '../../../axios'

const playList = {
    getPlayList(params) {
        return axios({
            url: '/top/playlist',
            method: 'get',
            params
        })
    }
}

export default playList