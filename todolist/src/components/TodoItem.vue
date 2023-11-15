<template>
    <div class=" bg-slate-500 h-[100vh] w-full flex flex-col justify-center items-center">
        <h1 class="text-white text-3xl">Task Details</h1>
        <input class="text-3xl" v-model="editedValue" type="text" :placeholder="`${selectedItem}`">
        <RouterLink to="/" @click="editTodo" class="rounded-2xl text-white h-20 w-32 flex justify-center items-center text-4xl bg-blue-500 mt-20">edit</RouterLink>
    </div>
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