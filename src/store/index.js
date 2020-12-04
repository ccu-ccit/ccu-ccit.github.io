import Vue from 'vue'
import Vuex from 'vuex'
import student from './student'
import teacher from './teacher'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    user(state, value){
      state.user = value
    }
  },
  actions:{
    login({ commit }, value) {
      commit('user', value)
    }
  },
  modules: {
    student: student,
    teacher: teacher
  }
})
export default store;