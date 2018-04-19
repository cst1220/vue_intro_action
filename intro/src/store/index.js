import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'


Vue.use(Vuex)//所有组件对象都多了一个属性：$store

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
