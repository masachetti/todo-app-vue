export default interface PomodoroInfo {
  currentSection: "working" | "short-break" | "long-break";
  sectionCounter: number;
  isTimerRunning: boolean;
  workingSeconds: number;
  shortBreakSeconds: number;
  longBreakSeconds: number;
  numberOfCyclesUntilLongBreak: number;
}
