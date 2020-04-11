import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showModal:false
  },
  mutations: {
    //aqui modificamos el state showModal
    setShowModal(state,payload){
      state.showModal=payload;
    },
  },
  actions: {
  },
  modules: {
  }
})
