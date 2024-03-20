<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "nextSection"): void;
}>();

const { seconds } = defineProps<{
  seconds: number;
}>();

const timer = ref(seconds);
const timerRef = ref<number | undefined>(undefined);

const formatTime = () => {
  const minutes = Math.floor(timer.value / 60);
  const seconds = timer.value % 60;
  const minutesStr = ("0" + minutes.toString()).substr(-2);
  const secondsStr = ("0" + seconds.toString()).substr(-2);
  return `${minutesStr}:${secondsStr}`;
};

const toggleTimer = () => {
  if (timerRef.value) {
    clearInterval(timerRef.value);
    timerRef.value = undefined;
  } else {
    if (timer.value <= 0) {
      timer.value = seconds;
    }
    timerRef.value = setInterval(() => {
      timer.value--;
      if (timer.value == 0) {
        emit("nextSection");
        clearInterval(timerRef.value);
        timerRef.value = undefined;
      }
    }, 1000);
  }
};

const resetTimer = () => {
  timer.value = seconds;
};
</script>
<template>
  <div
    class="flex flex-col max-w-[90vw] w-fit min-w-[50vw] bg-zinc-200 rounded-xl min-h-30 h-fit"
  >
    <div>
      {{ formatTime() }}
    </div>

    <div>
      <button @click="toggleTimer" class="button">
        {{ timerRef ? "Stop" : "Start" }}
      </button>
      <button class="button" @click="resetTimer">Reset</button>
      <button class="button" @click="$emit('nextSection')">Next</button>
    </div>
  </div>
</template>

<style scoped>
.button {
  @apply btn bg-green-600;
}
</style>
