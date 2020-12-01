<template>
  <div id="app">
    <a-layout>
      <a-layout-header>
        <div class="header-warpper">
          <div>互動教學系統</div>
          <div style="flex: 1 1 0%"></div>
          <div>
            <span class="logout-wrapper">
              <a-icon type="logout"></a-icon>
            </span>
          </div>
        </div>
      </a-layout-header>
      <!-- <a-layout-content>Content</a-layout-content> -->
      <!-- <a-layout-footer>Footer</a-layout-footer> -->
    </a-layout>
    <router-view class="content" />
  </div>
</template>

<script>

export default {
  name: "App",
  created() {
    console.log(this.$router.options.routes);
  },
  components: {
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
  /* box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08); */
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
}

.content:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    background-image: url('./assets/bg.jpg');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
}
</style>
