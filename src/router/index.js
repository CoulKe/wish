import { createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Wish from '../views/Wish.vue';
import Message from '../views/Message.vue';
import Missing from '../views/Missing.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wish',
    name: 'Wish',
    component: Wish,
  },
  {
    path: '/wish/:name/:message',
    name: 'Message',
    component: Message,
  },
  {
    path: '/:pathMatch(.*)',
    component: Missing,
  }
];
const router = new createRouter({
  history: createWebHistory(),
  routes
})
export default router


// import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router