<template>
    <div>
        <header class="bg-green-500 py-4">
            <div class="flex justify-center">
                <h1 class="text-white text-3xl">TodoList</h1>
            </div>
        </header>
        <main class="container mx-auto px-5">
            <TodoForm/>
        </main>
    </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue';
import TodoForm from './TodoForm.vue';
</script>