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
  <PomodoroTimer
    :seconds="info.workingSeconds"
    @next-section="console.log('next section')"
  />
</template>

<style scoped></style>
