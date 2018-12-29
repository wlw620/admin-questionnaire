import Vue from 'vue'
import Vuex from 'vuex'
import question from './module/question'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: null,
    identity: ''
  },
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    unlogin(state) {
      state.isLogin = false;
    },
    setIdentity(state, identity) {
      console.log('当前角色:::' + identity);
      state.identity = identity;
    }
  },
  actions: {
    //
  },
  modules: {
    question
  }
})
