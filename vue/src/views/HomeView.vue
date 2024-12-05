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
  <main class="p-5">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        {{ todo.text }}
      </li>
    </ul>

    <form @submit.prevent="addTodo" class="flex gap-5 mt-5">
      <input v-model="newTodoText" class="bg-slate-200 focus:bg-slate-300 p-3 rounded-full" />
      <button class="size-12 bg-slate-300 active:bg-slate-400 rounded-full">+</button>
    </form>
  </main>
</template>
