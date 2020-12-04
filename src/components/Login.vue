<template>
  <div class="login-container">
    <h2 class="login-title">歡迎來到互動教學系統</h2>
    <a-form ref="form" :model="form" class="login-form">
      <div class="switch-wrapper">
        <a-switch checked-children="教師" un-checked-children="學生" default-checked v-model="teacher"/>
      </div>
      <transition 
        enter-class="my-fade-enter"
        leave-to-class="my-fade-leave-to"
        enter-active-class="my-fade-enter-active"
        leave-active-class="my-fade-leave-active"
      >
        <div v-if="teacher">
          <h2 class="title">教師登入 LOGIN</h2>
          <a-form-item>
            <a-input class="inputBox" v-model="form.username">
              <a-icon slot="prefix" type="user" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input-password class="inputBox" v-model="form.password">
              <a-icon slot="prefix" type="lock"/>
            </a-input-password>
          </a-form-item>
          <a-form-item>
            <a-button class="submit" type="primary" @click="onSubmit" :disabled="valid">登錄</a-button>
          </a-form-item>
        </div>
      </transition>
      <transition 
        enter-class="my-fade-enter"
        leave-to-class="my-fade-leave-to"
        enter-active-class="my-fade-enter-active"
        leave-active-class="my-fade-leave-active"
      >
        <div v-if="!teacher">
          <h2 class="title">學生登入 LOGIN</h2>
          <a-form-item>
            <a-input class="inputBox" placeholder="學號" v-model="studentForm.studentID">
              <a-icon slot="prefix" type="user"/>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input class="inputBox" placeholder="暱稱" v-model="studentForm.nickname">
              <a-icon slot="prefix" type="smile"/>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input class="inputBox" placeholder="活動代碼" v-model="studentForm.activatyCode">
              <a-icon slot="prefix" type="barcode"/>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button class="submit" type="primary" @click="onSubmit" :disabled="valid">加入</a-button>
          </a-form-item>
        </div>
      </transition>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "admin",
        password: "123456"
      },
      studentForm: {
        studentID: null,
        nickname: null,
        activatyCode: null
      },
      teacher: true
    }
  },
  computed: {
    valid(){
      if(this.teacher){
        return !(this.form.username && this.form.password)
      } else {
        return !(this.studentForm.studentID && this.studentForm.nickname && this.studentForm.activatyCode)
      }
    }
  },
  methods: {
     onSubmit() {
      if(this.teacher){
        if (this.form.username === 'admin') {
          this.$store.dispatch('login', 'teacher')
          this.$router.push({name: 'home'})
        }
      } else {
        const userInfo = {
          studentId: this.studentForm.studentID,
          nickname: this.studentForm.nickname
        }
        this.$store.dispatch('login', userInfo)
        this.$router.push({name: 'student-home'})
      }
    },
  },
}
</script>
<style>
.login-form {
  width: 35%;
  height: 50%;
  margin: 0 auto!important;
  background: #8080805c;
  border-radius: 10px;
  padding: 40px 50px!important;
  position: relative;
  
}

.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.login-title {
  color: #fff;
  text-align: center;
  margin: 150px 0;
  font-size: 48px;
  font-family: Microsoft Yahei;
}

.submit{
  width: 100%;
  height: 45px;
  font-size: 16px;
}

.title{
  margin-bottom: 50px;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  font-family: Microsoft Yahei;
}

.ant-input-affix-wrapper .ant-input:not(:first-child) {
    padding-left: 50px;
}

.switch-wrapper {
  position: absolute;
  right: 5px;
  top: 5px;
}

.my-fade-enter-active {
  transition: opacity 0.5s;
}
.my-fade-enter {
  opacity: 0;
}
.my-fade-leave-to{
  display: none
}
</style>
