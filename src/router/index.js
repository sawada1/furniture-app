import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import team from '../views/team.vue'
import shop from '../views/shop.vue'
import blog from '../views/blog.vue'
import contact from '../views/contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path:'/team',
    name:'team',
    component:team,
  },

  {
    path:'/shop',
    name:'shop',
    component:shop,
  },
  {
    path:'/blog',
    name:'blog',
    component:blog,
  },
  {
    path:'/contact',
    name:'contact',
    component:contact,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
