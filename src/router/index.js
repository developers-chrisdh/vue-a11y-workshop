import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Intro from '../views/Intro.vue'
import VoiceOver from '@/views/VoiceOver.vue'
import AssignmentOne from '@/views/AssignmentOne.vue'
import AssignmentOneSolution from '@/views/AssignmentOneSolution.vue'
import AssignmentTwo from '@/views/AssignmentTwo.vue'
import AssignmentThree from '@/views/AssignmentThree.vue'

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
    path: '/opdracht-1-solution',
    name: 'AssignmentOneSolution',
    component: AssignmentOneSolution
  },
  {
    path: '/opdracht-2',
    name: 'AssignmentTwo',
    component: AssignmentTwo
  },
  {
    path: '/opdracht-3',
    name: 'AssignmentThree',
    component: AssignmentThree
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // scrollBehavior (to)
  //   if (to.hash) {
  //     return {
  //       // el: to.hash,
  //       selector: to.hash,
  //       behaviour: 'smooth',
  //       // el: '#main',
  //     }
  //   }
  // },
})

export default router
