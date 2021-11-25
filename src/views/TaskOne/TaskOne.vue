<template>
  <task-one-story />
  <div class="prose">
    <router-link to="/opdracht-1-solution" class="button mt-8 mr-2">
      <strong>Opdracht 1 Uitwerking</strong>
    </router-link>
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
}
</script>
