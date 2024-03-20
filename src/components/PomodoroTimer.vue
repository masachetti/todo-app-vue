<script setup lang="ts">
import { ref } from "vue";
import { PlayIcon, StopIcon, ForwardIcon } from "@heroicons/vue/16/solid";
import { ArrowPathIcon } from "@heroicons/vue/24/outline";

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
  <div class="flex flex-col gap-5 items-center">
    <span class="text-4xl font-semibold tracking-widest">
      {{ formatTime() }}
    </span>

    <div class="gap-3 flex">
      <button
        @click="toggleTimer"
        class="button flex justify-center items-center"
      >
        <StopIcon v-if="timerRef" class="size-7"></StopIcon>
        <PlayIcon v-else="timerRef" class="size-7"></PlayIcon>
      </button>
      <button
        @click="resetTimer"
        class="button flex justify-center items-center"
      >
        <ArrowPathIcon class="size-7"></ArrowPathIcon>
      </button>
      <button
        class="button flex justify-center items-center"
        @click="$emit('nextSection')"
      >
        <ForwardIcon class="size-7"></ForwardIcon>
      </button>
    </div>
  </div>
</template>

<style scoped>
.button {
  @apply btn bg-green-600;
}
</style>
