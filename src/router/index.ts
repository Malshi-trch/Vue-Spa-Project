import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    // @ts-ignore
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/recipes",
    name: "recipes",
    // @ts-ignore
    component: () => import("../views/RecipesView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    // @ts-ignore
    component: () => import("../views/ProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
