<script setup lang="ts">
import Todo from "../types/Todo";
import { XMarkIcon } from "@heroicons/vue/16/solid";

const { todo } = defineProps<{
  todo: Todo;
}>();
</script>

<template>
  <li
    class="flex justify-between items-center gap-4 px-4 py-1 border border-slate-500 rounded-md my-1 mx-2 h-fit"
  >
    <input type="checkbox" v-model="todo.done" class="w-4 h-4" />
    <span class="flex-1" :class="{ 'line-through': todo.done }">
      {{ todo.description }}
    </span>
    <button
      class="bg-red-600 text-white py-1 px-2 rounded-md text-center h-fit w-fit"
      @click="$emit('deleteTodo', todo)"
    >
      <XMarkIcon class="h-6 w-6"></XMarkIcon>
    </button>
  </li>
</template>

<style scoped></style>
