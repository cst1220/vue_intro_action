
import {RECEIVE_ADVERT,RECEIVE_IMG_DAY,RECEIVE_LIST_TAB,RECEIVE_LIST_BRAND} from './mutation-types'
import {reqAdvert,reqImgDay,reqListTab,reqListBrand} from '../api'

export default {
  //异步获取
  async getMenus ({commit}) {
    const result = await reqAdvert()
    if (result.code===0) {
      const menus = result.data
      commit(RECEIVE_ADVERT,{menus})
    }
  },
  async getBrand ({commit}) {
    const result = await reqImgDay()
    if (result.code===0){
      const brand = result.data
      commit(RECEIVE_IMG_DAY,{brand})
    }
  },
  async getList({commit},cb) {
    const result = await reqListTab()
    if (result.code===0) {
      const intro = result.data
      commit(RECEIVE_LIST_TAB,{intro})
    }
    cb && cb()
  },
  async getLogo ({commit}) {
    const result = await reqListBrand()
    if (result.code===0) {
      const logo = result.data
      commit(RECEIVE_LIST_BRAND,{logo})
    }
  }
}
