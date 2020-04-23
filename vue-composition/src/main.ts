import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import { store, router } from './middleware'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)
Vue.use(ElementUI)

new Vue({ router, store, render: h => h(App) }).$mount('#app')
