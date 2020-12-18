<template>
  <div class="home-wrapper" v-if="inProgressActivity!=undefined">
    <p>
      Hi,{{ student() }} 歡迎加入{{ inProgressActivity.activity }}活動
      <a-icon type="bulb" />
    </p>
    <a-steps :current="current" style="text-align: left">
      <a-step v-for="quiz in quizzes" :key="quiz.serial" />
    </a-steps>
    <template>
      <p>{{ quiz.serial + 1 }}. {{ quiz.question }}</p>
      <div class="radio-wrapper">
        <a-radio-group name="radioGroup" v-model="answer">
          <a-radio :value="1" style="left: 0">
            A. {{ quiz.options[1] }}
          </a-radio>
          <a-radio :value="2" style="right: 0">
            B. {{ quiz.options[2] }}
          </a-radio>
          <a-radio :value="3" style="left: 0; bottom: 0">
            C. {{ quiz.options[3] }}
          </a-radio>
          <a-radio :value="4" style="right: 0; bottom: 0">
            D. {{ quiz.options[4] }}
          </a-radio>
        </a-radio-group>
      </div>
      <div class="steps-action">
        <a-button
          v-if="current < quizzes.length - 1"
          type="primary"
          @click="next"
          :disabled="!answer"
        >
          下一題
        </a-button>
        <a-button
          v-if="current == quizzes.length - 1"
          type="primary"
          @click="finish"
          :disabled="!answer"
        >
          完成
        </a-button>
      </div>
    </template>
  </div>
</template>
<script>
import { submitAnswer } from '@/apis/req';
export default {
  data() {
    return {
      current: 0,
      answer: null,
      inProgressActivity: null,
      codename: '',
      user: ''
    };
  },
  computed: {
    quizzes() {
      return this.inProgressActivity.questions;
    },
    quiz() {
      return this.inProgressActivity.questions[this.current];
    },
  },
  created() {
    this.codename = this.$store.state.user.codename
    this.user = this.$store.state.user
    this.inProgressActivity = this.$store.getters.inProgressActivity(this.codename)
    if (this.inProgressActivity == undefined){
      this.showErrorReturnToLogin("無效的活動碼")
    }
  },
  methods: {
    next() {
      const data = {
        answer: this.answer,
        serial: this.current,
        name: this.user.nickname
      }
      submitAnswer(data, this.codename).then(res => {
        console.log(res)
      })
      this.current++;
      this.answer = null;
    },
    finish() {
      this.$message.success('謝謝參與,歡迎加入下一個活動!')
      const data = {
        answer: this.answer,
        serial: this.current,
        name: this.user.nickname
      }
      submitAnswer(data, this.codename).then(res => {
        console.log(res)
      })
      this.$router.push({ name: "login" });
    },
    student() {
      try {
        return this.$store.state.user.nickname;
      } catch (e) {
        this.showErrorReturnToLogin("請先進行登入")
        this.$router.push({ name: "login" });
        return null;
      }
    },
    showErrorReturnToLogin(message) {
        this.$message.error(message);
        this.$router.push({ name: "login" });
    }
  },
};
</script>
<style lang="scss" scoped>
$text-color: #e7ebed;

p {
  color: $text-color;
  font-size: 200%;
  i {
    color: #f3bf00;
  }
}

.home-wrapper {
  width: 80%;
  background: #000000a6;
  border-radius: 10px;
  margin: 20px auto;
}
.radio-wrapper {
  width: 50%;
  height: 300px;
  margin: 0 auto;
  position: relative;
}

.ant-radio-wrapper {
  position: absolute;
  font-size: 20px;
  color: $text-color;
}

.steps-action {
  margin-top: 24px;
  float: right;
}
</style>