<template>
  <nav id="nav" aria-label="Hoofdnavigatie">
    <router-link ref="skipLink" to="#main" class="skip-link">
      Naar hoofdinhoud
    </router-link>
    <router-link to="/">
      <logo />
    </router-link>
    <template v-for="link in navLinks" :key="link.path">
      <router-link :to="link.path">
        {{ link.title }}
      </router-link>
      |
    </template>
  </nav>
</template>

<script>
// import { ref } from 'vue'
import Logo from '@/components/Logo.vue';

const navLinks = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/intro',
    title: 'Intro',
  },
  {
    path: '/voiceover',
    title: 'VoiceOver',
  },
  {
    path: '/theorie',
    title: 'Theorie',
  },
  {
    path: '/opdracht-1',
    title: 'Opdracht 1',
  },
  {
    path: '/opdracht-2',
    title: 'Opdracht 2',
  },
  {
    path: '/opdracht-3',
    title: 'Opdracht 3',
  },
];

export default {
  components: {
    logo: Logo,
  },
  data() {
    return {
      navLinks,
    };
  },
  watch: {
    $route: function () {
      this.$nextTick(() => {
        if (this.$route.hash === '#main') {
          document.querySelector('#main').focus();
          return;
        }

        if (this.$refs.skipLink) {
          this.$refs.skipLink.$el.focus();
        }
      });
    },
  },
};
</script>

<style lang="scss">
#nav a.skip-link {
  position: fixed;
  z-index: 1;
  padding: 2px 8px;
  opacity: 0;
  background-color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.85);
  transform: translateY(-300%);
  transition: opacity 300ms, transform 300ms;

  &:focus {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>
