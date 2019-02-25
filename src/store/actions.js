import { reqMockData } from '../api'
import { RECEVER_MOCK_DATA } from './mutations-types'

export default{
    async getMockData ({commit},callback) {
        const mockData = await reqMockData()
        commit(RECEVER_MOCK_DATA,{mockData})
        callback && callback()
    }
}