import Vue from 'vue'
import Vuex from 'vuex'
// import student from './student'
import teacher from './teacher'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
    //   student: student,
      teacher: teacher
    }
})
export default store;