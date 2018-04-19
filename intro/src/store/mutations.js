import Vue from 'vue'
import {RECEIVE_ADVERT,RECEIVE_IMG_DAY,RECEIVE_LIST_TAB,RECEIVE_LIST_BRAND} from './mutation-types'

export default {
  [RECEIVE_ADVERT](state,{menus}){
    state.menus = menus
  },
  [RECEIVE_IMG_DAY](state,{brand}){
    state.brand = brand
  },
  [RECEIVE_LIST_TAB](state,{intro}){
    state.intro = intro
  },
  [RECEIVE_LIST_BRAND](state,{logo}){
    state.logo = logo
  }
}
