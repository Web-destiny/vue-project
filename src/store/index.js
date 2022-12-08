import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    // payload - данные с которыми нам предстоит работать
    changeCounter( state, payload ){
      state.counter += payload
    }
  },
  actions: {
    asyncChangeCounter({commit}, payload){
      setTimeout(() => {
        commit('changeCounter', payload.counterValue)
      }, payload.timeoutDelay)
    }
  },
  getters: {
    computedCounter( state ){
      return state.counter * ( 6 * 5.55 - 1)
    }
  }
})
