<template>
  <task-one-story />
  <div class="prose">
    <router-link to="/opdracht-2" class="button mt-8">
      Start&nbsp;<strong>Opdracht 2</strong>
    </router-link>
  </div>
</template>

<script>
import TaskOneStory from './TaskOneStory.vue';

export default {
  components: {
    TaskOneStory,
  },
};
</script>
