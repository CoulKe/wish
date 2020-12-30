import { createRouter, createWebHistory } from "vue-router";
import {defineAsyncComponent} from "vue";
import Home from "../views/Home.vue";
import Wish from "../views/Wish.vue";
import Missing from "../views/Missing.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/wish",
    name: "Wish",
    component: Wish,
  },
  {
    path: "/x", //For Christmas
    name: "Christmas",
    component: defineAsyncComponent(() => import('../views/Christmas.vue')),
  },
  {
    path: "/b", //For Birthday
    name: "Birthday",
    component: defineAsyncComponent(() => import('../views/Birthday.vue')),
  },
  {
    path: "/y", //For New year
    name: "Year",
    component: defineAsyncComponent(() => import('../views/Year.vue'))
  },
  {
    path: "/:pathMatch(.*)", //To catch non-existing routes, keep at the bottom to avoid conflict
    component: Missing,
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
