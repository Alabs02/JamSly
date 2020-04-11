import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Videos from '../views/Video.vue'
import Musics from '../views/Music.vue'
import Events from '../views/Event.vue'
import BlogPost from '../views/BlogPost.vue'
import CreateEvent from '../components/CreateEvent.vue'
import MusicUpload from '../components/UploadMusic.vue'
import VideoUpload from '../components/UploadVideo.vue'
import Post from '../components/Post.vue'
import SinglePost from '../components/single/SinglePost.vue'
import MusicDownload from '../components/single/SingleMusic.vue'
import VideoDownload from '../components/single/SingleVideo.vue'
import SingleEvent from '../components/single/SingleEvent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: About
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

  {
    path: '/events/new',
    name: 'New_Event',
    component: CreateEvent
  },

  {
    path: '/musics/upload',
    name: 'Music_Upload',
    component: MusicUpload
  },

  {
    path: '/videos/upload',
    name: 'Videos_Upload',
    component: VideoUpload
  },

  {
    path: '/blogposts/new',
    name: 'newPost',
    component: Post
  },

  {
    path: '/singlepost',
    name: 'Single_Post',
    component: SinglePost
  },

  {
    path: '/download/music',
    name: 'Music_down',
    component: MusicDownload
  },

  {
    path: '/download/video',
    name: 'Video_down',
    component: VideoDownload
  },

  {
    path: '/event/more',
    name: 'Single_event',
    component: SingleEvent
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
