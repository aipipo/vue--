import {
  RECEIVE_HOMEDATA,
  RECEIVE_NAVDATA,
  RECEIVE_NAVAINDEX,
  RECEIVE_NAVALIST,
  RECEIVE_NAVAOPTIONS,
  RECEIVE_SHARE
} from './mutation-types'

export default {
  [RECEIVE_HOMEDATA] (state, {homeData}) {
    state.homeData = homeData
  },
  [RECEIVE_NAVDATA] (state, {navData}) {
    state.navData = navData
  },
  [RECEIVE_NAVAOPTIONS] (state) {
    let arr = []
    state.navData.forEach(item => {
      arr.push(item.name)
    })
    state.navOptions = arr
  },
  [RECEIVE_NAVAINDEX] (state, {index}) {
    state.navIndex = index
  },
  [RECEIVE_NAVALIST] (state) {
    state.navList = state.navData[state.navIndex]
  },
  [RECEIVE_SHARE] (state, {shareData}) {
    state.shareData = shareData
  }
}
