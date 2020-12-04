<template>
  <div class="home-wrapper">
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
          @click="$message.success('Processing complete!')"
        >
          Done
        </a-button>
      </div>
    </template>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters: studentGetters } = createNamespacedHelpers("student");
export default {
  data() {
    return {
      current: 0,
      answer: null,
    };
  },
  computed: {
    ...studentGetters(["inProgressActivity"]),
    quizzes() {
      return this.inProgressActivity.questions;
    },
    quiz() {
      return this.inProgressActivity.questions[this.current];
    },
  },
  created() {},
  methods: {
    next() {
      this.current++;
      this.answer = null;
    },
    student() {
      try {
        return this.$store.state.user.nickname;
      } catch (e) {
        this.$message.error("請先進行登入或聯絡系統管理元");
        this.$router.push({ name: "login" });
        return null;
      }
    },
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