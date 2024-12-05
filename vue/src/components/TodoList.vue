<script async setup>
import { onMounted, ref } from 'vue'

let id = 1
const todos = ref(await (await fetch('http://127.0.0.1:3000/todos/vue')).json())
const newTodoText = ref('')

const addTodo = () => {
  todos.value.push({ id: id++, done: false, text: newTodoText.value })
  newTodoText.value = ''

  fetch('http://localhost:3000/todos/vue', { method: 'PUT', body: JSON.stringify(todos.value) })
}
</script>

<template>
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
</template>
