const store = {
    namespaced: true,
    state: {
        inProgressActivity: 
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
        studentInfo: null
    },
    getters: {
        inProgressActivity: state => {
            return state.inProgressActivity
        },
    },
    mutations: {
      studentInfo(state, info) {
        state.studentInfo = info
      }
    },
    action: {
      setStudentInfo({ commit }, value) {
        commit('studentInfo', value)
    },
    }
}
export default store;