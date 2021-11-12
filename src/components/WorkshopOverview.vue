<template>
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
        <td>
          <router-link v-if="item.path" :to="item.path">{{ item.title }}</router-link>
          <template v-else>{{ item.title }}</template>
        </td>
        <td>{{ item.dur }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    programItems: {
      type: Array,
      required: true,
    },
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

  a {
    text-decoration: underline;
  }
}
</style>