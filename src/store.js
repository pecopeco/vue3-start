import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: 'yang',
    transitionName: 'van-slide-left'
  },
  actions: {
    setUser: ({ commit }, data) => {
      commit('setUser', data)
    },
    setSlide: ({ commit }, data) => {
      commit('setSlide', data)
    }
  },
  mutations: {
    setUser (state, data) {
      state.userInfo = data
    },
    setSlide (state, data) {
      state.transitionName = data
    }
  }
})
