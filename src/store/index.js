import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deviceWidth: 1024
  },
  getters: {},
  mutations: {
    modifyWidth (state, deviceWidth) {
      state.deviceWidth = deviceWidth
    }
  },
  actions: {

  }
})
