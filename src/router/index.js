import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Wish from "../views/Wish.vue";
import Christmas from "../views/Christmas.vue";
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
    path: "/x", //for Christmas
    name: "Christmas",
    component: Christmas,
  },
  
  {
    path: "/:pathMatch(.*)",
    component: Missing,
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
