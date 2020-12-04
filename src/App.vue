<template>
  <div id="app">
    <a-layout>
      <a-layout-header>
        <div class="header-warpper">
          <div style="font-size: 18px">互動教學系統</div>
          <div style="flex: 1 1 0%"></div>
          <div>
            <span class="logout-wrapper">
              <a-icon type="logout"></a-icon>
            </span>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content>
        <transition
          enter-class="my-fade-enter"
          enter-active-class="my-fade-enter-active"
        >
          <router-view class="content"> </router-view>
        </transition>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: false,
    };
  },
  created() {
    if (this.$store.state.user) {
      this.$router.push({ name: "login" });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.ant-layout {
  background: unset;
}

.ant-layout-header {
  color: white;
  padding: 0px 5px;
  background: #1a62a7;
}
.header-warpper {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 16px;
}

.logout-wrapper {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  vertical-align: middle;
}

.content {
  position: relative;
  overflow: hidden;
  padding: 50px;
  height: 100%;
}
.my-fade-enter {
  opacity: 0;
}

.my-fade-enter-active {
  transition: opacity 0.5s ease;
}
</style>
