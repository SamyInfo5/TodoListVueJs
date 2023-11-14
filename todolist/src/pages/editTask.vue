<template>
    <div>
        <h1>Task Details</h1>
        <p>{{ task }}</p>
    </div>
</template>
  
<script setup props="props">
const task = props.index;
</script>