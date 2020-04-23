import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './user'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { UserStore },
  mutations: { },
  actions: { },
  modules: { }
})
