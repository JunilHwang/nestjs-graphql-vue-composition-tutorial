import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './user'
import postStore from './post'
import { SetupContext } from '@vue/composition-api'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { },
  mutations: { },
  actions: { },
  modules: { userStore, postStore }
})

export const useStore = ({ root: { $store } }: SetupContext) => {
  return { ...$store }
}