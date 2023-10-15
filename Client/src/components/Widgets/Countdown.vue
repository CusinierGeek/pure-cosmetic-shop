<script setup lang="ts">
import { toRefs } from "vue";
import useCountdown from "@/composables/useCountdown";

const props = defineProps({
  date: {
    type: Date,
    required: true,
  },
});

const { date } = toRefs(props);
const { days, hours, minutes, seconds, timeRemaining } = useCountdown(date.value);
</script>

<template>
  <div class="time" v-if="timeRemaining > 0">
    Time Remaining: {{ days }}j {{ hours }}h {{ minutes }}m {{ seconds }}s
  </div>
  <div class="end" v-else>La vente est terminée!</div>
</template>

<style scoped>
.time {
  font-size: 1.5rem;
  font-weight: bold;
  color: red;

  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
}

.end {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  background-color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
}
</style>
