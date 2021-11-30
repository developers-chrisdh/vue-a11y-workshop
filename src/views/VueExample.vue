<template>
  <div class="prose">
    <h2>Vue example</h2>
    <todo-example :title="title" />
  </div>
</template>

<script>
import TodoExample from '@/components/TodoExample.vue';

export default {
  components: {
    TodoExample,
  },
  data() {
    return {
      title: 'Boodschappenlijst',
    };
  },
};
</script>
