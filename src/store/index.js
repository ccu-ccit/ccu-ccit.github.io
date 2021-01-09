import Vue from 'vue'
import Vuex from 'vuex'
import student from './student'
import teacher from './teacher'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: null,
    activities: [
      {
        "activity": "國文",
        "codename": "Chinese",
        "questions": [
          {
            "key": 0,
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
            "key": 1,
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
            "key": 2,
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
          },
          {
            "key": 3,
            "visible": true,
            "question": "「 □ 想 擁 有 好 人 緣 ， □ 有 禮 貌 的 對 待 別 人 。 」",
            "answer": 2,
            "serial": 3,
            "options": {
              "1": "連 / 就",
              "2": "如 果 / 請",
              "3": " 不 但 / 且 ",
              "4": "一 看 / 就"
            }
          },
          {
            "key": 4,
            "visible": true,
            "question": "「 窗 外 流 進 來 □ □ 的 月 光 ， 洋 溢 著 祥 和 寧 靜 的 氣 氛 。 」",
            "answer": 1,
            "serial": 4,
            "options": {
              "1": "乳白",
              "2": "清白",
              "3": "慘白",
              "4": "雪地"
            }
          }
        ],
        "online": false
      },
      {
        "activity": "數學",
        "codename": "Math",
        "questions": [
          {
            "key": 0,
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
            "key": 1,
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
            "key": 2,
            "visible": true,
            "question": "一輛貨車約重 2.5 公噸。2.5 公噸可換算成?",
            "answer": 3,
            "serial": 2,
            "options": {
              "1": "25 公斤",
              "2": "250 公斤",
              "3": "2500 公斤",
              "4": "25000 公斤"
            }
          },
          {
            "key": 3,
            "visible": true,
            "question": "一塊正方形土地的面積是 1 公畝，周長是多少公尺？",
            "answer": 4,
            "serial": 3,
            "options": {
              "1": "100 公尺",
              "2": "1 公尺",
              "3": "10 公尺",
              "4": "40 公尺"
            }
          },
          {
            "key": 4,
            "visible": true,
            "question": "有 A、B、C 三數，若 A－2＝B＋2＝C－5，則 A、B、C 的 大小關係為何?",
            "answer": 2,
            "serial": 4,
            "options": {
              "1": "A＞B＞C",
              "2": "C＞A＞B",
              "3": "B＞C＞A",
              "4": "A＞C＞B"
            }
          }
        ],
        "online": false
      },
      {
        "activity": "自然",
        "codename": "Biology",
        "questions": [
          {
            "key": 0,
            "visible": true,
            "question": "布袋蓮葉面的蠟質具有什麼功用？",
            "answer": 1,
            "serial": 0,
            "options": {
              "1": "防水",
              "2": "呼吸",
              "3": "遮光",
              "4": "隔熱"
            }
          },
          {
            "key": 1,
            "visible": true,
            "question": "哪一種水生植物的根是生長在水底土裡， 而葉子挺出水面？",
            "answer": 1,
            "serial": 1,
            "options": {
              "1": "蓮花",
              "2": "睡蓮",
              "3": "布袋蓮",
              "4": "水蘊草"
            }
          },
          {
            "key": 2,
            "visible": true,
            "question": "魚呼吸時，什麼部位會不停的開合？",
            "answer": 1,
            "serial": 2,
            "options": {
              "1": "鰓蓋和口",
              "2": "肺",
              "3": "呼吸管",
              "4": "蹼"
            }
          }
        ],
        "online": false
      }
    ]
  },
  mutations: {
    user(state, value){
      state.user = value
      if (typeof(value) === 'object'){
        Object.keys(value).forEach( k => {
          sessionStorage.setItem(k, value[k])
        })
      }
    }
  },
  actions: {
    login({ commit }, value) {
      commit('user', value)
    }
  },
  getters: { 
    inProgressActivity: (state) => codename => {
      return state.activities.find(a => a.codename === codename)
    },
  },
  modules: {
    student: student,
    teacher: teacher
  }
})
export default store;