import axios from '../../../axios'

const video = {
    getVideoTag() {
        return axios({
            url: '/video/group/list',
            method: 'get',
            xhrFields: { withCredentials: true },
        })
    },
    getVideoList(params) {
        return axios({
            url: '/video/group',
            method: 'get',
            xhrFields: { withCredentials: true },
            params
        })
    }
}

export default video