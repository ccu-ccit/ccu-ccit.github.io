<template>
  <div>
    <a-modal
      width="80%"
      v-model="visible"
      :footer="null"
      :title="selectedActivity.activity"
      @ok="handleOk"
      destroyOnClose
    >
      <select-question :activity="selectedActivity"></select-question>
    </a-modal>
    <a-modal
      width="80%"
      v-model="editorVisible"
      title="活動管理"
      :footer="null"
      :destroyOnClose="true"
    >
      <mngmt-activity :activity="selectedActivity"></mngmt-activity>
    </a-modal>
    <div>
      <h1>活動列表</h1>
      <a-row :gutter="40">
        <a-col
          :span="8"
          v-for="activityObj in activities"
          :key="activityObj.serial"
          style="margin-bottom: 80px"
        >
          <a-card :bordered="false" @click="detail">
            <a slot="extra" href="#" @click="() => openModal(activityObj)"
              >開始活動</a
            >
            <div class="ant-card-body">
              <div>
                <p>題目數量: {{ activityObj.questions.length }}</p>
                <p>活動名稱: {{ activityObj.activity }}</p>
              </div>
            </div>
            <a-button
              class="card-editor"
              shape="circle"
              icon="edit"
              @click="() => openEditModal(activityObj)"
            />
            <a-button
              class="card-delete"
              shape="circle"
              icon="delete"
              @click="() => showDeleteConfirm(activityObj)"
            />
          </a-card>
        </a-col>
        <a-col :span="8" style="margin-bottom: 80px">
          <a-card :bordered="false">
            <div class="ant-card-body" style="display: flex">
              <a-icon
                style="font-size: 30px"
                type="plus-circle"
                @click="() => openEditModal({})"
              />
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import mngmtActivity from "./MngmtActivity";
import selectQuestion from "./SelectQuestion";

const { mapGetters: teacherGetters } = createNamespacedHelpers("teacher");

export default {
  name: "Home",
  components: {
    "mngmt-activity": mngmtActivity,
    "select-question": selectQuestion,
  },
  data() {
    return {
      visible: false,
      editorVisible: false,
      selectedActivity: {},
    };
  },
  computed: {
    ...teacherGetters(["activities"]),
  },
  created() {
    console.log(this.activities);
  },
  methods: {
    detail() {
      console.log("show detail");
    },
    openModal(activity) {
      this.selectedActivity = activity;
      this.visible = !this.visible;
    },
    openEditModal(activity) {
      this.selectedActivity = activity;
      this.editorVisible = !this.editorVisible;
    },
    handleOk() {
      this.$router.push({ name: "activity-code" });
    },
    showDeleteConfirm() {
      this.$confirm({
        title: "確定要刪除此活動嗎?",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.card-editor {
  position: absolute;
  right: 20px;
  bottom: 15px;
  font-size: 20px;
}

.card-delete {
  position: absolute;
  right: 60px;
  bottom: 15px;
  font-size: 20px;
}
.ant-card-body {
  align-items: center;
  justify-content: center;
  min-height: 200px;
}
</style>