<template>
  <div class="star-rating">
    <div class="stars">
      <Star v-for="index in 5" :key="index" :fillColor="getStarColor(index)" />
      <p>{{ rating }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Star from "@/components/Widgets/Star.vue";

const props = defineProps({
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
});

const getStarColor = (index: number) => {
  return index <= Math.round(props.rating) ? "#fecf0a" : "#c5cad4";
};
</script>

<style scoped>
.stars {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

p {
  margin-left: 10%;
}
</style>
