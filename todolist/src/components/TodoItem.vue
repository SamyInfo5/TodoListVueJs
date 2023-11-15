<template lang="pug">
.bg-slate-500.w-full.flex.flex-col.justify-center.items-center(class='h-[100vh]')
  h1.text-white.text-3xl Task Details
  input.text-3xl(v-model='editedValue.text' type='text' :placeholder='`${selectedItem}`')
  RouterLink.rounded-2xl.text-white.h-20.w-32.flex.justify-center.items-center.text-4xl.bg-blue-500.mt-20(to='/' @click='editTodo') edit

</template>
  
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const params = route.params;
console.log(params.index);

const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos')) || [];
console.log(todosFromLocalStorage);

let selectedItem = todosFromLocalStorage.length > 0 ? todosFromLocalStorage[params.index] : null;
console.log(selectedItem);

let editedValue = selectedItem;

const editTodo = () => {
    if (params.index >= 0 && params.index < todosFromLocalStorage.length) {
        todosFromLocalStorage.splice(params.index, 1, editedValue);
        localStorage.setItem('todos', JSON.stringify(todosFromLocalStorage));
    }
};
</script>