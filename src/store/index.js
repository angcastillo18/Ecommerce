import Vue from 'vue'
import Vuex from 'vuex'
//importar axios
import axios from 'axios';

Vue.use(Vuex,axios)

export default new Vuex.Store({
  state: {
    showModal:false,
    isLogged:false
  },
  mutations: {
    //aqui modificamos el state showModal
    setShowModal(state,payload){
      state.showModal=payload;
    },
      //aqui modificamos el state islogged
    setIsLogged(state,payload){
      state.isLogged=payload;
    },
  },
  actions: {
  },
  modules: {
  }
})
