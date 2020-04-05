import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Videos from '../views/Video.vue'
import Musics from '../views/Music.vue'
import Events from '../views/Event.vue'
import BlogPost from '../views/BlogPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/videos',
    name: 'video',
    component: Videos
  },

  {
    path: '/musics',
    name: 'music',
    component: Musics
  },

  {
    path: '/events',
    name: 'event',
    component: Events
  },

  {
    path: '/blogposts',
    name: 'Blog',
    component: BlogPost
  },




  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
