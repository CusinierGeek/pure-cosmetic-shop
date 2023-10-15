/**
 * Countdown Composable for Vue 3 Composition API.
 *
 * This composable provides a countdown mechanism that starts from the current time and counts down
 * to a specified end date. The countdown provides the days, hours, minutes, and seconds
 * remaining until the end date.
 *
 * The composable also manages a timer that updates every second to refresh the countdown values.
 * When the component using this composable is unmounted, the timer is cleared to prevent any potential
 * memory leaks.
 *
 * Usage:
 * 1. Import and invoke this composable with an end date.
 * 2. Access the returned `days`, `hours`, `minutes`, `seconds`, and `timeRemaining` to display the countdown.
 *
 * Example:
 * const { days, hours, minutes, seconds } = useCountdown('2023-12-31');
 *
 */

import { ref, computed, onMounted, onUnmounted } from "vue";

export default function useCountdown(endDateString?: Date | string, onCountdownEnd?: () => void) {
  const endDate = new Date(endDateString || "2023-12-31");
  const now = ref(new Date());
  const timer = ref<ReturnType<typeof setInterval> | null>(null);

  const timeRemaining = computed(() => endDate.getTime() - now.value.getTime());

  const days = computed(() => Math.floor(timeRemaining.value / (1000 * 60 * 60 * 24)));
  const hours = computed(() => Math.floor((timeRemaining.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = computed(() => Math.floor((timeRemaining.value % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = computed(() => Math.floor((timeRemaining.value % (1000 * 60)) / 1000));

  onMounted(() => {
    timer.value = setInterval(() => {
      now.value = new Date();
      if (now.value >= endDate) {
        if (timer.value) clearInterval(timer.value);
        if (onCountdownEnd) onCountdownEnd();
      }
    }, 1000);
  });

  onUnmounted(() => {
    if (timer.value) clearInterval(timer.value);
  });

  return { days, hours, minutes, seconds, timeRemaining };
}
