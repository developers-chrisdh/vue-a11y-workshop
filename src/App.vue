<template>
  <navigation />
  <main
    id="main"
    ref="main"
    tabindex="-1"
    class="page"
    aria-label="Hoofdinhoud"
  >
    <router-view />
  </main>
  <div id="portal-target"></div>
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
