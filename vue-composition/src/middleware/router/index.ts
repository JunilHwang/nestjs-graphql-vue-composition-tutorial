import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { Home } from '@/views'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
