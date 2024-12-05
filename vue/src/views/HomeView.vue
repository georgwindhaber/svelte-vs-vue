<script setup>
import TodoList from '@/components/TodoList.vue'
</script>

<template>
  <main class="p-5">
    <Suspense>
      <TodoList />
      <template #fallback> Loading... </template>
    </Suspense>
  </main>
</template>
