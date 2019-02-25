import { RECEVER_MOCK_DATA } from './mutations-types'
export default{
    [RECEVER_MOCK_DATA](state,{mockData}){
        state.mockData = mockData
    }
}

