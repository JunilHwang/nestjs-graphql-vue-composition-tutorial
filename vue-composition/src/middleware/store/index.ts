import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './user'
import postStore from './post'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { },
  mutations: { },
  actions: { },
  modules: { userStore, postStore }
})