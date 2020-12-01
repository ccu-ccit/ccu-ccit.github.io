  
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/teacher/Home";

Vue.use(VueRouter);
const routes = [
    {
      path: "/teacher",
      name: "home",
      component: Home
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
export default router;