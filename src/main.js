import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from '@/router'
import Antd  from 'ant-design-vue'
import VCharts from 'v-charts'
import store from '@/store' 
import 'ant-design-vue/dist/antd.css'
// import history from '@/components/History'
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(Vuex)
Vue.use(VCharts)
Vue.use(VueRouter)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

