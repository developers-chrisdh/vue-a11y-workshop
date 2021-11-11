<template>
  <div class="flex flex-row">
    <div class="prose">
      <h2>Accessibility Workshop door Developers.nl</h2>
      <h3>Voor wie?</h3>
      <p>Deze workshop is bedoelt voor alle (front-end) developers die nog weinig kennis hebben van accessibility.</p>
      <h3>Wat leer je?</h3>
      <p>In de workshop krijg je een aantal vraagstukken voorgelegd in de vorm van "user stories". </p>
    </div>
    <div class="program ml-auto">
      <table class="table-auto">
        <thead>
          <tr>
            <th>Programma</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in programItems" :key="item.title">
            <td>{{ item.title }}</td>
            <td>{{ item.dur }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <router-link to="/intro" tag="button" class="button mt-8">Intro:&nbsp;<strong>Waarom accessibility?</strong></router-link>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
const programItems = [
  {
    title: 'intro',
    dur: '5 min',
  },
  {
    title: 'Waarom accessibility?',
    dur: '15 min',
  },
  {
    title: 'De basis van VoiceOver',
    dur: '15 min',
  },
  {
    title: 'Opdracht 1',
    dur: '30 min',
  },
  {
    title: 'Opdracht 2',
    dur: '30 min',
  },
  {
    title: 'Afsluiting',
    dur: '30 min',
  },
];

export default {
  name: 'Home',
  data: () => {
    return {
      programItems,
    };
  },
}
</script>

<style lang="scss">
.program {
  min-width: 320px;
  border: 3px solid #eee;
  padding: 8px 16px;
  //box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
}

.program table {
  width: 100%;

  th {
    text-align: left;
  }

  tr {
    border-bottom: 2px solid #999;
  }

  td, th {
    padding: 8px;
  }
}
</style>