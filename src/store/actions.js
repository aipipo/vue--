import {
  RECEIVE_HOMEDATA,
  RECEIVE_NAVDATA,
  RECEIVE_NAVAINDEX,
  RECEIVE_NAVALIST,
  RECEIVE_NAVAOPTIONS,
  RECEIVE_SHARE
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
      typeof cb==='function' && cb()
    }
  },
  async getNavData ({commit}, cb) {
    const result = await reqNavData()
    if (result.code === 0) {
      const navData = result.data
      commit(RECEIVE_NAVDATA, {navData})
      typeof cb==='function' && cb()
    }
  },
  async getShare ({commit, cb}) {
     const result = await reqTopciData()
     if (result.code === 0) {
       const shareData = result.data
       commit(RECEIVE_SHARE, {shareData})
       typeof cb==='function' && cb()
     }
  },

  setOptionIndex ({commit}, index) {
    commit(RECEIVE_NAVAINDEX, {index})
  },

  getLiveOptions ({commit}, cb) {
    commit(RECEIVE_NAVAOPTIONS)
    typeof cb==='function' && cb()
  },
  getNavList ({commit}, cb) {
    commit(RECEIVE_NAVALIST)
    typeof cb==='function' && cb()
  }

}
