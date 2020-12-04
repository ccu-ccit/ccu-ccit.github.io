<template>
  <div class="wrapper">
    <a-table
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
const { mapGetters: teacherGetters } = createNamespacedHelpers("teacher");
export default {
  data() {
    return {
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
      ],
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
    this.studentAnsProgress = this.getStudentAnsProgress;
  },
  methods: {
    next() {
      this.$router.push({ name: "summary" });
    },
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
</style>