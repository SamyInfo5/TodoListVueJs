<template lang="pug">
.flex.flex-col.justify-center.items-center
    span.text-3xl.pt-10 Enter a new Todo
    br
    .form
      input.border-2.rounded.mr-3.w-64.h-10(v-model='newTodo' type='text')
      button.bg-green-200.border-2.w-20.h-10(@click='addTodo') Add
    .filter.pt-10
      button.rounded.mx-4.w-24.h-12.bg-lime-500(@click="filterTodos('all')") All
      button.rounded.mx-4.w-24.h-12.bg-lime-500(@click="filterTodos('finish')") Finish
      button.rounded.mx-4.w-24.h-12.bg-lime-500(@click="filterTodos('notFinish')") Not Finish
    .flex.flex-col.justify-center.items-center.mt-20
      form.flex.justify-between.border-2.mb-2.w-80.transition-opacity.duration-1000.ease-in-out(v-if='filteredTodos.length > 0' v-for='(item, i) in filteredTodos')
        input( type='checkbox' @change='toggleTodoStatus(i)')
        span.m-auto {{ item.text }}
        RouterLink.bg-blue-500.w-10.text-center(:to="{ name: 'task', params: { index: i } }" @click='setSelectedTask(item.text)') edit
        button.bg-red-600.w-16.ml-3(@click='deletetoto(i)') Delete
      div(v-else='')
        span.text-2xl pas de t&acirc;che pour le moments
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { RouterLink } from "vue-router";

const checkbox = document.getElementById('check')
const newTodo = ref("");
const todos = ref(JSON.parse(localStorage.getItem("todos")) || []);
const selectedItem = ref(null);
const filter = ref('all')

const addTodo = () => {
    if(newTodo === undefined) return
        if (newTodo.value.trim() === "") return

        const todo = {
            text: newTodo.value,
            completed: false // Nouvelle constante "completed" initialisée à false
        };

        todos.value.push(todo);
        newTodo.value = "";
        saveToLocalStorage();
    };

const deletetoto = (index) => {
    todos.value.splice(index, 1);
    saveToLocalStorage();
};

const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos.value));
};

const setSelectedTask = (task) => {
    selectedItem.value = task;
};

const filterTodos = (filterType) => {
    filter.value = filterType;
};

const toggleTodoStatus = (index) => {
    todos.value[index].completed = !todos.value[index].completed;
    saveToLocalStorage();
};

const filteredTodos = ref(todos.value);

watchEffect(() => {

    if (filter.value === 'all') {
        filteredTodos.value = todos.value;
    } else if (filter.value === 'finish') {
        filteredTodos.value = todos.value.filter(todo => todo.completed);
    } else if (filter.value === 'notFinish') {
        filteredTodos.value = todos.value.filter(todo => !todo.completed);
    }
});
</script>
