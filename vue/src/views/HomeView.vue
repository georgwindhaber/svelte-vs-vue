<script setup lang="ts">
import { ref } from 'vue'

let id = 1

const todos = ref([
  {
    id: 0,
    done: false,
    text: 'add more todos',
  },
])

const newTodoText = ref('')

const addTodo = () => {
  todos.value.push({ id: id++, done: false, text: newTodoText.value })
  newTodoText.value = ''
}
</script>

<template>
  <main>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.done }} - {{ todo.text }}</li>
    </ul>

    <form @submit.prevent="addTodo">
      <input v-model="newTodoText" />
    </form>
  </main>
</template>
