import axios from '../../../axios'

const singer = {
    getSinger(params) {
        return axios({
            url: '/artist/list',
            method: 'get',
            params
        })
    }
}

export default singer