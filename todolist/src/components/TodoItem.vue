<template>
    <div>
        <h1>Task Details</h1>
        <input v-model="editedValue" type="text" :placeholder="`${selectedItem}`">
        <RouterLink to="/" @click="editTodo">edit</RouterLink>
    </div>
</template>
  
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const params = route.params;
console.log(params.index);

const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos')) || [];
console.log(todosFromLocalStorage);

let selectedItem = todosFromLocalStorage.length > 0 ? todosFromLocalStorage[0] : null;
console.log(selectedItem);

let editedValue = selectedItem;

const editTodo = () => {
    if (params.index >= 0 && params.index < todosFromLocalStorage.length) {
        todosFromLocalStorage.splice(params.index, 1, editedValue);
        localStorage.setItem('todos', JSON.stringify(todosFromLocalStorage));
    }
};
</script>