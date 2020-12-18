<template>
  <div>
    <div class="wrapper">
      <p class="title">請輸入以下條碼以加入活動:</p>
      <h1>{{ this.activity.codename }}</h1>
      <div class="action">
        <a-button type="primary" @click="next">開始</a-button>
      </div>
    </div>
  </div>
</template>
<script>
import { clearAnswer } from "@/apis/req";
export default {
  props: {
    activity: Object,
  },
  created() {
    clearAnswer(this.activity.codename).then((res) => {
      console.log(res);
    });
  },
  methods: {
    next() {
      this.$router.push({ name: "monitor" });
    },
  },
};
</script>
<style lang="scss" scoped>
.action {
  width: 100%;
  text-align: right;
  margin-top: 10px;
}
.title {
  font-size: 30px;
  text-align: left;
}
.wrapper {
  width: 80%;
  background: #000000a6;
  border-radius: 10px;
  margin: 20px auto;
  padding: 10px;
  h1 {
    font-size: 50px;
    color: #1a62a7;
  }
}
</style>