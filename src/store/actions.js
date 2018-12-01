import {
  RECEIVE_HOMEDATA
} from './mutation-types'
import {
  reqHomeData,
  reqNavData,
  reqTopciData
} from '../api'
export default {
  async getHomeData ({commit}, cb) {
    const result = await reqHomeData()
    console.log(result)
    if (result.code === 0) {
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {homeData})
      cb && cb()
    }
  }
}
