<script setup lang="ts">
import Todo from "../types/Todo";

defineProps<{
  todo: Todo;
}>();
</script>

<template>
  <li :class="{ 'line-through': todo.done }">
    {{ todo.description }}
  </li>
</template>

<style scoped></style>
