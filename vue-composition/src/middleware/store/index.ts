import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './user'
import PostStore from './post'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { UserStore, PostStore },
  mutations: { },
  actions: { },
  modules: { }
})
