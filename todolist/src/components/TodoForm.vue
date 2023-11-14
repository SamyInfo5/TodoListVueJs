<template>
    <div class="flex flex-col justify-center items-center">
        <h1 class="text-3xl pt-10">Enter a new Todo</h1>
        <br />
        <div class="form">
            <!-- Use v-model to bind the input to a ref -->
            <input v-model="newTodo" class="border-2 rounded mr-3 w-64 h-10" type="text" />
            <button @click="addTodo" class="bg-green-200 border-2 w-20 h-10">Add</button>
        </div>

        <div class="filter">
            <button @click="filterTodos('all')">All</button>
            <button @click="filterTodos('finish')">Finish</button>
            <button @click="filterTodos('notFinish')">Not Finish</button>
        </div>

        <div class="flex flex-col justify-center items-center mt-20">
            <form v-if="todos.length > 0" v-for="(item, i) in todos" :data-log="console.log(todos)" class="flex justify-between border-2 mb-2 w-80 transition-opacity duration-1000 ease-in-out">
                <input type="checkbox" @change="toggleTodoStatus(i)">
                <h1 class="m-auto">{{ item }}</h1>
                <RouterLink :to="{ name: 'task', params: { index: i, item: item } }" @click="setSelectedTask(item.text)" class="bg-blue-500 w-10 text-center">edit</RouterLink>
                <button @click="deletetoto(i)" class="bg-red-600 w-16 ml-3">Delete</button>
            </form>
            <div v-else>
                <h1>pas de tâche pour le moments</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { RouterLink } from "vue-router";

const newTodo = ref("");
const todos = ref(JSON.parse(localStorage.getItem("todos")) || []);
const selectedItem = ref(null);
const filter = ref('all')

const addTodo = () => {
    if (newTodo.value.trim() !== "") {
        todos.value.push(newTodo.value);
        newTodo.value = "";
        saveToLocalStorage();
    }
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
    console.log("sel", selectedItem.value);
};

const filterTodos = (filterType) => {
    filter.value = filterType;
};

const toggleTodoStatus = (index) => {
    todos.value[index].completed = !todos.value[index].completed;
    console.log('t',todos.value[index].completed)
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
