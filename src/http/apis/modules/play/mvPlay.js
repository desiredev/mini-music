import axios from '../../../axios'

const mvPlay = {
    getMvPlayDetails(params) {
        return axios({
            url: '/mv/detail',
            method: 'get',
            params
        })
    },
    getMvUrl(params) {
        return axios({
            url: '/mv/url',
            method: 'get',
            params
        })
    },
    getSimi(params) {
        return axios({
            url: '/simi/mv',
            method: 'get',
            params
        })
    },
    getRelated() {
        return axios({
            url: '/related/allvideo',
            method: 'get',
            params: { id: 'EC50AB02215B84BCA4D5C5502871A9C2' }
        })
    }
}

export default mvPlay