<template>
  <div>
    <h2 style="font-size: 50px">{{ inProgressActivity.activity }}</h2>
    <transition
      enter-class="my-fade-enter"
      enter-active-class="my-fade-enter-active"
    >
      <router-view :activity="inProgressActivity" />
    </transition>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters: teacherGetters } = createNamespacedHelpers("teacher");
export default {
  computed: {
    ...teacherGetters(["activities", "inProgressActivity"]),
  },
  created() {},
};
</script>
<style scoped>
.my-fade-enter-active {
  transition: opacity 0.5s;
}
.my-fade-enter {
  opacity: 0;
}
</style>