<template>
  <task-two-story />
  <div class="prose">
    <router-link to="/opdracht-2" class="button mt-8">
      Start&nbsp;<strong>Opdracht 1</strong>
    </router-link>
  </div>
</template>

<script>
import TaskTwoStory from './TaskTwoStory.vue';

export default {
  components: {
    TaskTwoStory,
  },
};
</script>
