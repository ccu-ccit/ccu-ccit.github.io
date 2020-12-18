<template>
  <div>
    <a-table
      :pagination="false"
      :columns="columns"
      :data-source="activity.questions"
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
    />
    <div class="action">
      <a-button
        :disabled="!hasSelected"
        size="small"
        type="primary"
        @click="start()"
        >開始</a-button
      >
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const columns = [
  {
    title: "題目",
    dataIndex: "question",
    key: "question",
  },
];
const { mapActions: teacherActions } = createNamespacedHelpers("teacher");

export default {
  name: "selectQuestion",
  props: {
    activity: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      columns,
      selectedRowKeys: [],
    };
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },
  },
  methods: {
    ...teacherActions(["setInProgressActivity"]),
    start() {
      this.activity.online = true;
      this.activity.questions.map((question) => {
        if (this.selectedRowKeys.includes(question.serial)) {
          question.visible = true;
        } else {
          question.visible = false;
        }
      });
      this.setInProgressActivity(this.activity);
      this.$router.push({ name: "activity-code" });
    },
    onSelectChange(selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
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
</style>
