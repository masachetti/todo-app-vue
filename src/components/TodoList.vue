<script setup lang="ts">
import { computed, ref } from "vue";
import Todo from "../types/Todo";
import TodoItem from "./TodoItem.vue";
import { PlusIcon, EyeSlashIcon, EyeIcon } from "@heroicons/vue/16/solid";
import { TrashIcon } from "@heroicons/vue/24/outline";

const newTodoDescription = ref("");
const input = ref<HTMLInputElement | null>(null);
const showCompleted = ref(false);

let _id = 0;
const todos = ref<Array<Todo>>([
  { description: "duioanuidas", done: true, id: _id++ },
  { description: "kkkk", done: false, id: _id++ },
]);

const addTodo = () => {
  if (newTodoDescription.value) {
    todos.value.push({
      description: newTodoDescription.value,
      done: false,
      id: _id++,
    });
    newTodoDescription.value = "";
    if (input.value) {
      input.value.focus();
    }
  }
};

const deleteTodo = (todo?: Todo) => {
  if (todo) {
    todos.value = todos.value.filter((t) => t.id !== todo.id);
  }
};

const resetTodos = () => {
  todos.value = [];
};

const clearCompletedTodos = () => {
  todos.value = todos.value.filter((t) => !t.done);
};

const displayedTodos = computed(() => {
  const _ = todos.value.filter((t) => showCompleted.value || !t.done);
  console.log(_);
  return _;
});
</script>

<template>
  <div
    class="flex flex-col max-w-[80vw] w-fit min-w-[50vw] bg-zinc-200 rounded-xl min-h-80 max-h-[60vh] h-fit"
  >
    <form class="flex w-full p-4 gap-5" @submit.prevent="addTodo">
      <input
        ref="input"
        type="text"
        placeholder="To-Do Description"
        class="flex-1 p-2 h-10 rounded-lg"
        v-model="newTodoDescription"
      />
      <button
        type="submit"
        class="border border-slate-400 h-10 w-10 p-2 rounded-full content-center bg-blue-600 text-white font-bold flex justify-center items-center"
      >
        <PlusIcon></PlusIcon>
      </button>
    </form>

    <ul class="overflow-y-auto overflow-x-hidden my-4 mx-2">
      <TodoItem
        v-for="todo in displayedTodos"
        :todo="todo"
        :key="todo.id"
        @delete-todo.once="deleteTodo"
      ></TodoItem>
    </ul>

    <div class="flex justify-center items-center gap-5 m-2">
      <button
        :class="{ 'bg-blue-600': !showCompleted, 'bg-red-600': showCompleted }"
        class="w-16 h-10 bg-blue-600 text-white rounded-md py-1 px-2"
        @click="showCompleted = !showCompleted"
        :title="showCompleted ? 'Hide completed tasks' : 'Show completed tasks'"
      >
        <EyeSlashIcon v-if="showCompleted" class="w-full h-full"></EyeSlashIcon>
        <EyeIcon v-else="showCompleted" class="w-full h-full"></EyeIcon>
      </button>
      <button
        class="w-16 h-10 bg-green-600 text-white rounded-md py-2 px-2"
        title="Remove all completed"
        @click="clearCompletedTodos"
      >
        <img src="../assets/leaf.svg" class="w-full h-full" />
      </button>
      <button
        class="w-16 h-10 bg-red-600 text-white rounded-md py-2 px-2"
        title="Delete all"
        @click="resetTodos"
      >
        <TrashIcon class="h-full w-full"></TrashIcon>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
