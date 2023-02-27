import axios from '../../../axios'
const recommend = {
    // 获取轮播图数据
    getBanner() {
        return axios({
            url: '/banner',
            method: 'get',
            xhrFields: { withCredentials: true }
        })
    },
    // 获取推荐歌单
    getRecommendList() {
        return axios({
            url: 'personalized',
            method: 'post',
            data: { limit: 10 },
        })
    },
    // 获取独家放送
    getSoleList() {
        return axios({
            url: '/personalized/privatecontent',
            method: 'get'
        })
    },
    // 获取最新音乐
    getNewMusic() {
        return axios({
            url: '/personalized/newsong',
            method: 'get',
            params: { limit: 12 },
        })
    },
    // 获取MV
    getMv() {
        return axios({
            url: '/personalized/mv',
            method: 'get'
        })
    },
    // 获取主播电台
    getAnchor() {
        return axios({
            url: '/personalized/djprogram',
            method: 'get',
        })
    }
}
export default recommend