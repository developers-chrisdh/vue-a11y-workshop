import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Intro from '../views/Intro.vue';
import VoiceOver from '@/views/VoiceOver.vue';
import TaskOne from '@/views/TaskOne/TaskOne.vue';
import TaskOneSolution from '@/views/TaskOne/TaskOneSolution.vue';
import TaskTwo from '@/views/TaskTwo/TaskTwo.vue';
import TaskTwoSolution from '@/views/TaskTwo/TaskTwoSolution.vue';
import TaskThree from '@/views/AssignmentThree.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/intro',
    name: 'Intro',
    component: Intro,
  },
  {
    path: '/voiceover',
    name: 'VoiceOver',
    component: VoiceOver,
  },
  {
    path: '/opdracht-1',
    name: 'TaskOne',
    component: TaskOne,
  },
  {
    path: '/opdracht-1-solution',
    name: 'TaskOneSolution',
    component: TaskOneSolution,
  },
  {
    path: '/opdracht-2',
    name: 'TaskTwo',
    component: TaskTwo,
  },
  {
    path: '/opdracht-2-solution',
    name: 'TaskTwoSolution',
    component: TaskTwoSolution,
  },
  {
    path: '/opdracht-3',
    name: 'TaskThree',
    component: TaskThree,
  },
];

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
});

export default router;
