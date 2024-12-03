<script setup lang="ts">
import { ref } from 'vue'

const todos = ref([
  {
    id: 1,
    done: false,
    text: 'add more todos',
  },
])

todos.value[0].done = !todos.value[0].done
</script>

<template>
  <main>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.done }} - {{ todo.text }}</li>
    </ul>
  </main>
</template>
