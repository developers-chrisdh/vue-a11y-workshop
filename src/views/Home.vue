<template>
  <div class="flex flex-row">
    <div class="prose pr-8">
      <h2>Accessibility Workshop door Developers.nl</h2>
      <h3>Voor wie?</h3>
      <p>
        Deze workshop is bedoelt voor alle (front-end) developers die nog weinig
        kennis hebben van accessibility.
      </p>
      <h3>Wat leer je?</h3>
      <p>
        In de workshop krijg je een aantal vraagstukken voorgelegd in de vorm
        van "user stories".
      </p>
    </div>
    <workshop-overview :program-items="programItems" />
  </div>
  <router-link to="/intro" tag="button" class="button mt-8">
    Intro:&nbsp;<strong>Waarom accessibility?</strong>
  </router-link>
</template>

<script>
import WorkshopOverview from '@/components/WorkshopOverview.vue';
import programItems from '@/data/programItems';

export default {
  components: {
    WorkshopOverview,
  },
  data: () => {
    return {
      programItems,
    };
  },
};
</script>
