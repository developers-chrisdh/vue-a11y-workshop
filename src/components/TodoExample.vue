<template>
  <div class="todoApp">
    <h1>{{ title }}</h1>
    <input
      class="border"
      type="text"
      v-model="newTodo"
      placeholder="What to do?"
    />
    <p>{{ newTodo }}</p>

    <button @click="addTodo" class="border bg-blue-800 text-white p-2 rounded">
      Add todo
    </button>

    <ul>
      <li v-for="item in todoItems">{{ item.title }}</li>
    </ul>
    <p>Totaal: {{ total }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default: 'Default props',
    },
  },
  data() {
    return {
      newTodo: '',
      todoItems: [
        {
          title: 'Boter',
        },
        {
          title: 'Kaas',
        },
      ],
    };
  },
  methods: {
    addTodo() {
      this.todoItems.push({
        title: this.newTodo,
      });
      this.newTodo = '';
    },
  },
  computed: {
    total() {
      return this.todoItems.length;
    },
  },
};
</script>

<style lang="scss">
.todoApp {
  padding: 8px;
  border: 1px solid #888;
}
</style>
