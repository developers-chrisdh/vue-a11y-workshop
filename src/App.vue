<template>
  <navigation />
  <main id="main" ref="main" tabindex="-1" class="page">
    <router-view />
  </main>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'HelloWorld',
  components: {
    navigation: Navigation,
  },
  props: {
    msg: String,
  },
};
</script>
