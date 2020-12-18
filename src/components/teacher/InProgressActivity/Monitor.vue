<template>
  <div class="wrapper">
    <div v-if="studentAnsProgress.length == 0" class="spin-wrapper">
      <a-spin size="large" />
    </div>
    <a-table
      v-else
      :pagination="false"
      :columns="columns"
      :data-source="studentAnsProgress"
      style="background: #fafafa"
    >
      <span slot="answer" slot-scope="record">
        <a-icon
          style="color: #1890ff"
          v-if="record == undefined"
          type="loading"
        />
        <a-icon style="color: green" v-else-if="record.bingo" type="check" />
        <a-icon style="color: red" v-else type="close" />
      </span>
    </a-table>
    <div class="action">
      <a-button size="small" type="primary" style="margin: 20px" @click="next"
        >結束活動</a-button
      >
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import { getProgress } from "@/apis/req";
const { mapGetters: teacherGetters } = createNamespacedHelpers("teacher");
const { mapActions: teacherActions } = createNamespacedHelpers("teacher");
export default {
  props: {
    activity: Object,
  },
  data() {
    return {
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
      ],
      studentAnsProgress: [],
      polling: null,
    };
  },
  computed: {
    ...teacherGetters(["getInProgressQuiz", "getStudentAnsProgress"]),
  },
  created() {
    this.getInProgressQuiz.forEach((quiz) => {
      this.columns.push({
        title: "Q" + quiz.serial,
        dataIndex: quiz.serial.toString(),
        key: quiz.serial,
        scopedSlots: { customRender: "answer" },
      });
    });
    getProgress({ codename: this.activity.codename }).then((res) => {
      this.setStudentAnsProgress(res.student === null ? [] : res.student);
      this.studentAnsProgress = this.$store.state.teacher.studentAnsProgress;
    });
    this.pollData();
  },
  methods: {
    ...teacherActions(["setStudentAnsProgress"]),
    next() {
      this.$router.push({ name: "summary" });
    },
    pollData() {
      this.polling = setInterval(() => {
        getProgress({ codename: this.activity.codename }).then((res) => {
          this.setStudentAnsProgress(res.student === null ? [] : res.student);
          this.studentAnsProgress = this.$store.state.teacher.studentAnsProgress;
        });
      }, 5000);
    },
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 80%;
  background: #000000a6;
  border-radius: 10px;
  margin: 20px auto;
  padding: 10px;
  .action {
    width: 100%;
    text-align: right;
    margin-top: 10px;
  }
}
.spin-wrapper {
  min-height: 200px;
  position: relative;
  div {
    position: absolute;
    top: 50%;
  }
}
</style>