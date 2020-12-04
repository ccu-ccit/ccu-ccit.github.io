const store = {
  namespaced: true,
  state: {
    inProgressActivity: null,
    activities: [
        {
          "activity": "國文",
          "codename": "codename",
          "questions": [
            {
              "visible": true,
              "question": "「 細 細 長 長 的 脖 子 、 蜂 窩 狀 的 臉 面 」 是 用 哪 一 種 感 官 描 述 ？",
              "answer": 1,
              "serial": 0,
              "options": {
                "1": "視覺",
                "2": "聽覺",
                "3": "觸覺",
                "4": "味覺"
              }
            },
            {
              "visible": true,
              "question": "下 面 哪 一 個 選 項 的 用 字 正 確 ？",
              "answer": 4,
              "serial": 1,
              "options": {
                "1": "方專古道",
                "2": "徘山倒海",
                "3": "江郎才進",
                "4": "好事多磨"
              }
            },
            {
              "visible": true,
              "question": "小 君 想 查 尋 有 關 各 種 昆 蟲 的 詳 細 介 紹 ， 請 問 她 應 該 要 使 用 哪 一 種 工 具 書 ？",
              "answer": 3,
              "serial": 2,
              "options": {
                "1": "自點",
                "2": "成語辭典",
                "3": "百科全書",
                "4": "國語課本"
              }
            }
          ],
          "online": false
        },
        {
          "activity": "數學",
          "codename": "codename",
          "questions": [
            {
              "visible": true,
              "question": "1.7 x 0.58 的積是幾位小數？",
              "answer": 3,
              "serial": 0,
              "options": {
                "1": "4",
                "2": "3",
                "3": "2",
                "4": "1"
              }
            },
            {
              "visible": true,
              "question": "角錐的側面是什麼形？",
              "answer": 4,
              "serial": 1,
              "options": {
                "1": "直角三角形",
                "2": "平行四邊形",
                "3": "長方形",
                "4": "等腰三角形"
              }
            },
            {
              "visible": true,
              "question": "一輛貨車約重 2.5 公噸。2.5 公噸可換算成",
              "answer": 3,
              "serial": 2,
              "options": {
                "1": "25 公斤",
                "2": "250 公斤",
                "3": "2500 公斤",
                "4": "25000 公斤"
              }
            }
          ],
          "online": false
        },
        {
          "activity": "自然",
          "codename": "codename",
          "questions": [
            {
              "visible": true,
              "question": "「 細 細 長 長 的 脖 子 、 蜂 窩 狀 的 臉 面 」 是 用 哪 一 種 感 官 描 述 ？",
              "answer": 1,
              "serial": 0,
              "options": {
                "1": "視覺",
                "2": "聽覺",
                "3": "觸覺",
                "4": "味覺"
              }
            },
            {
              "visible": true,
              "question": "下 面 哪 一 個 選 項 的 用 字 正 確 ？",
              "answer": 4,
              "serial": 1,
              "options": {
                "1": "方專古道",
                "2": "徘山倒海",
                "3": "江郎才進",
                "4": "好事多磨"
              }
            },
            {
              "visible": true,
              "question": "小 君 想 查 尋 有 關 各 種 昆 蟲 的 詳 細 介 紹 ， 請 問 她 應 該 要 使 用 哪 一 種 工 具 書 ？",
              "answer": 3,
              "serial": 2,
              "options": {
                "1": "自點",
                "2": "成語辭典",
                "3": "百科全書",
                "4": "國語課本"
              }
            }
          ],
          "online": false
        }
      ],
    answerProgress: [
      {
        "answer": [
          {
            "answer": 1,
            "serial": 0
          },
          {
            "answer": 4,
            "serial": 1
          },
          {
            "answer": 2,
            "serial": 2
          },
          {
            "answer": 2,
            "serial": 3
          },
          {
            "answer": 3,
            "serial": 4
          }
        ],
        "student": [
          {
            "name": "Stan",
            "reply": [
              {
                "answer": 1,
                "bingo": true
              },
              {
                "answer": 1,
                "bingo": false
              }
            ]
          },
          {
            "name": "Ivy",
            "reply": [
              {
                "answer": 1,
                "bingo": true
              },
              {
                "answer": 4,
                "bingo": true
              }
            ]
          },
          {
            "name": "Jovian",
            "reply": [
              {
                "answer": 1,
                "bingo": true
              },
              {
                "answer": 4,
                "bingo": true
              },
              {
                "answer": 2,
                "bingo": true
              },
              {
                "answer": 3,
                "bingo": false
              },
              {
                "answer": 3,
                "bingo": true
              }
            ]
          }
        ]
      }
    ]
  },
  mutations: {
    inProgressActivity(state, activity) {
      state.inProgressActivity = activity
    }
  },
  getters: {
      activities: state => state.activities,
      inProgressActivity: state => {
        console.log(state.activities)
        return state.activities.find(a => a.online === true)
      },
      getInProgressQuiz: state => {
        return state.answerProgress[0].answer
      },
      getInProgressStudentAnswer: state => {
        return state.answerProgress[0].student
      },
      getStudentAnsProgress: state => {
        return state.answerProgress[0].student.map( s => {
          let tmp = {}
          tmp['name'] = s.name
          for( let i = 0; i < s.reply.length; i++){
            tmp[i.toString()] = {}
            tmp[i.toString()]['bingo'] = s.reply[i].bingo
            tmp[i.toString()]['answer'] = s.reply[i].answer
          }
          return tmp
        })
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

  }
}
export default store;