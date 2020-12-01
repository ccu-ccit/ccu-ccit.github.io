<template>
  <div>
    <a-modal width="800px" v-model="visible" title="選擇題目" @ok="handleOk" destroyOnClose>
      <selectQuestion :activity="selectedActivity"></selectQuestion>
    </a-modal>
    <a-modal width="1000px" v-model="editorVisible" title="活動管理" @ok="handleOk" :destroyOnClose='true'>
      <mngmtActivity :activity="selectedActivity"></mngmtActivity>
    </a-modal>
    <div style="padding: 30px;">
      <h1>活動列表</h1>
      <a-row :gutter="40" style="margin-bottom:100px">
        <a-col :span="8" v-for="activityObj in activities" :key="activityObj.serial" style=" margin-bottom:80px">
          <a-card :bordered="false" @click="detail">
            <a slot="extra" href="#" @click="() => openModal(activityObj)">開始活動</a>
            <div class="ant-card-body">
              <p>題目數量: {{activityObj.questions.length}}</p>
              <p>活動名稱: {{activityObj.activity}}</p>
            </div>
            <a-button class="card-editor" shape="circle" icon="edit" @click="() => openEditModal(activityObj)" />
            <a-button class="card-delete" shape="circle" icon="delete" @click="() => openEditModal(activityObj)" />
          </a-card>
        </a-col>
        <a-col :span="8" style=" margin-bottom:80px">
          <a-card :bordered="false">
            <div class="ant-card-body">
              <a-icon style="font-size:30px" type="plus-circle" @click="openEditModal"/>
            </div>
          </a-card>
        </a-col>
        <!-- <a-col :span="8" style="min-height:300px; display:flex; align-items:center; justify-content:center;">
            <a-icon style="font-size:30px" type="plus-circle" @click="openEditModal"/>
        </a-col> -->
      </a-row>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import mngmtActivity from './MngmtActivity'
import selectQuestion  from './SelectQuestion'

const {
  mapState: teacherState
} = createNamespacedHelpers("teacher");

export default {
  name: 'Home',
  components: {
    mngmtActivity,
    selectQuestion
  },
  data() {
    return {
      visible: false,
      editorVisible: false,
      selectedActivity: {}
    }
    
  },
  computed: {
    ...teacherState(['activities']),
  },
  created() {
    console.log(this.activities)
  },
  methods: {
    detail(){
      console.log("show detail")
    },
    openModal(activity){
      this.selectedActivity = activity
      // console.log(activity)
      this.visible = !this.visible
    },
    openEditModal(activity){
      this.selectedActivity = activity
      console.log(this.selectedActivity)
      this.editorVisible = !this.editorVisible
    },
    handleOk(){

    }
  }
}
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
    display:flex;
    align-items:center;
    justify-content:center;
    min-height: 200px;
}
</style>