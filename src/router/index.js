  
import Vue from 'vue/dist/vue.js'
import VueRouter from "vue-router";
import TeacherHomePage from "@/components/teacher/Home";
import ListActivities from "@/components/teacher/ListActivities";
import ImprogressHomePage from "@/components/teacher/InProgressActivity/ImprogressHomePage";
import Code from "@/components/teacher/InProgressActivity/Code";
import Monitor from "@/components/teacher/InProgressActivity/Monitor";
import Summary from "@/components/teacher/InProgressActivity/Summary";
import StudentHomePage from "@/components/student/Home";
import Login from "@/components/Login";


Vue.use(VueRouter);
const routes = [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/teacher",
      component: TeacherHomePage,
      redirect: "/teacher/home",
      children: [
        {
          path: 'home',
          name: "home",
          component: ListActivities,
        },
        {
          path: "in-progress",
          name: "in-progress",
          component: ImprogressHomePage,
          children: [
            {
              path: 'code',
              component: Code,
              name: 'activity-code'
            },
            {
              path: 'monitor',
              component: Monitor,
              name: 'monitor'
            },
            {
              path: 'summary',
              component: Summary,
              name: 'summary'
            }
          ]
        }
      ]
    },
    {
      path: "/student",
      component: StudentHomePage,
      name: 'student-home'
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
export default router;