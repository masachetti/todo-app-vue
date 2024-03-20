<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
import Pomodoro from "./components/Pomodoro.vue";
</script>

<template>
  <div
    class="bg-zinc-700 w-full h-full flex flex-col gap-10 justify-center items-center"
  >
    <Pomodoro></Pomodoro>
    <TodoList></TodoList>
  </div>
</template>

<style scoped></style>
