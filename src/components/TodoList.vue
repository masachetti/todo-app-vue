<script setup lang="ts">
import { ref } from "vue";
import Todo from "../types/Todo";
import TodoItem from "./TodoItem.vue";

const newTodoDescription = ref("");
const todos = ref<Array<Todo>>([
  { description: "duioanuidas", done: true },
  { description: "kkkk", done: false },
]);

const addTodo = () => {
  todos.value.push({ description: newTodoDescription.value, done: true });
  newTodoDescription.value = "";
};
</script>

<template>
  <div
    class="flex flex-col max-w-[50vw] w-fit min-w-[33vw] bg-zinc-200 rounded-xl min-h-80 max-h-[60vh] h-fit"
  >
    <div class="flex w-full p-4 gap-5">
      <input
        type="text"
        placeholder="To-Do Description"
        class="flex-1 p-2 h-10 rounded-lg"
        v-model="newTodoDescription"
      />
      <button
        @click="addTodo"
        class="border border-slate-400 h-10 w-10 p-2 rounded-full content-center bg-blue-600 text-white font-bold flex justify-center items-center"
      >
        <span class="text-center">+</span>
      </button>
    </div>

    <ul>
      <TodoItem v-for="todo in todos" :todo="todo"></TodoItem>
      <!-- <li v-for="todo in todos">{{ todo.description }}</li> -->
    </ul>
  </div>
</template>

<style scoped></style>
