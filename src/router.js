import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/students",
    name: "student",
    component: () => import("./components/studentprofile"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
