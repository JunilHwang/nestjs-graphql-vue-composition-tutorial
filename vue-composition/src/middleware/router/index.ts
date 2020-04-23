import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import * as Views from '@/views'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Views.Home
  },
  {
    path: '/write',
    name: 'Write',
    component: Views.Write
  },
]

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
