import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Intro from '../views/Intro.vue'
import VoiceOver from '@/views/VoiceOver.vue'
import AssignmentOne from '@/views/AssignmentOne.vue'
import AssignmentTwo from '@/views/AssignmentTwo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/voiceover',
    name: 'VoiceOver',
    component: VoiceOver
  },
  {
    path: '/opdracht-1',
    name: 'AssignmentOne',
    component: AssignmentOne
  },
  {
    path: '/opdracht-2',
    name: 'AssignmentTwo',
    component: AssignmentTwo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
