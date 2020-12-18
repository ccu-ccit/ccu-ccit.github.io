import Vue from 'vue'
const store = {
  namespaced: true,
  state: {
    inProgressActivity: null,
    studentAnsProgress: []
  },
  mutations: {
    inProgressActivity(state, activity) {
      state.inProgressActivity = activity
    },
    studentAnsProgress(state, progress){
      for( let i = 0; i < progress.length; i++){
        Vue.set(state.studentAnsProgress, i, progress[i])
      }
    },
    clearStudentAnsProgress(state){
      state.studentAnsProgress = []
    },
  },
  getters: {
      inProgressActivity: state => {
        return state.inProgressActivity
      },
      getInProgressQuiz: state => {
        return state.inProgressActivity.questions
      },
      getStudentAnsProgress: state => {
        return state.studentAnsProgress
      },
      getStudentAnsSummary: (_, getters) => {
        const studentsAnswers = getters.getStudentAnsProgress
        const quizzes = getters.getInProgressQuiz
        quizzes.map( quiz => {
          quiz['answers'] = { 1:0, 2:0, 3:0, 4:0 }
          studentsAnswers.map( student => {
            if (Object.prototype.hasOwnProperty.call(student, quiz.serial)) {
              quiz['answers'][[student[quiz.serial].answer]]+=1
            }
          })
        })
        return quizzes
      },
      summaryInBarChart: (_, getters) => {
        const quizzes = getters.getStudentAnsSummary
        const tmp = []
        quizzes.forEach( quiz => {
          tmp.push({
            'Q':'Q'+quiz.serial,
            '選項A': {
              value: quiz.answers[1],
              itemStyle: {
                color: quiz.answer==1? '#97b552': '#c05050',
                borderColor: quiz.answer==1? '#97b552': '#c05050',
                borderWidth: 2
              }
            },
            '選項B': {
              value: quiz.answers[2],
              itemStyle: { color: quiz.answer==2? '#97b552': '#c05050', borderColor: quiz.answer==2? '#97b552': '#c05050', borderWidth: 2}
            },
            '選項C': {
              value: quiz.answers[3],
              itemStyle: { color: quiz.answer==3? '#97b552': '#c05050', borderColor: quiz.answer==3? '#97b552': '#c05050', borderWidth: 2}
            },
            '選項D': {
              value: quiz.answers[4],
              itemStyle: { color: quiz.answer==4? '#97b552': '#c05050', borderColor: quiz.answer==4? '#97b552': '#c05050', borderWidth: 2}
            },
          })
        })
        return tmp
      },
      summaryInPieChart: (_, getters) => {
        const quizzes = getters.getStudentAnsSummary;
        const tmp = []
        quizzes.forEach( quiz => {
          let chartData = {
            columns: ['選項', '選項A', '選項B', '選項C', '選項D'],
            rows:
              [
                { '選項': 'A', '選項A': quiz.answers['1'], label:"123"},
                { '選項': 'B', '選項A': quiz.answers['2']},
                { '選項': 'C', '選項A': quiz.answers['3']},
                { '選項': 'D', '選項A': quiz.answers['4']}
              ]
          }
          tmp.push(chartData)
        })
        return tmp
    }
  },
  actions: {
    setInProgressActivity({ commit }, value) {
      commit('inProgressActivity', value)
    },
    setStudentAnsProgress({ commit, getters }, students) {
      commit('clearStudentAnsProgress')
      const res = students.map( s => {
        let tmp = {}
        Vue.set(tmp, 'name', s.name)
        Vue.set(tmp, 'time', Date.now())
        for( let i = 0; i < s.reply.length; i++){
          const props = {
            bingo: s.reply[i].answer === getters.getInProgressQuiz[i].answer,
            answer: s.reply[i].answer
          }
          Vue.set(tmp, i.toString(), props)
        }
        return tmp
      })
      commit('studentAnsProgress', res)
    }
  }
}
export default store;