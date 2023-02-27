import axios from '../../../axios'

const rank = {
    // 获取排行榜歌单 ID
    getRankList() {
        return axios({
            url: '/toplist',
            method: 'get'
        })
    },
    // 获取歌单下的歌曲ID
    getSoar(params) {
        return axios({
            url: '/playlist/detail',
            method: 'get',
            params
        })
    },
    // 获取歌曲信息
    getSong(params) {
        return axios({
            url: '/song/detail',
            method: 'get',
            params
        })
    }
}

export default rank