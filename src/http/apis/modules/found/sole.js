import axios from '../../../axios'

const personal = {
    getSoleList() {
        return axios({
            url: '/personalized/privatecontent/list',
            method: 'get',
            params: { limit: 100 }
        })
    }
}

export default personal