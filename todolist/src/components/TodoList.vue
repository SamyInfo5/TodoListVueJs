<template lang="pug">
div
  header.bg-green-500.py-4
    .flex.justify-center
      h1.text-white.text-3xl TodoList
  main.container.mx-auto.px-5
    TodoForm
</template>

<script setup>
import TodoForm from './TodoForm.vue';
</script>