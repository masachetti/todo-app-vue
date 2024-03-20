<script setup lang="ts">
import { ref } from "vue";
import PomodoroInfo from "../types/Pomodoro";
import PomodoroTimer from "./PomodoroTimer.vue";

const info = ref<PomodoroInfo>({
  currentSection: "working",
  isTimerRunning: false,
  sectionCounter: 0,
  // workingSeconds: 1500, // 25min
  workingSeconds: 10, // 25min
  shortBreakSeconds: 300, // 5min
  longBreakSeconds: 1200, // 20min
  numberOfCyclesUntilLongBreak: 3,
});
</script>
<template>
  <div
    class="max-w-[90vw] w-fit min-w-[50vw] bg-zinc-200 rounded-xl min-h-30 h-fit p-4"
  >
    <PomodoroTimer
      :seconds="info.workingSeconds"
      @next-section="console.log('next section')"
    />
  </div>
</template>

<style scoped></style>
