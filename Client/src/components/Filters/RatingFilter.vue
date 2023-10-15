<script setup lang="ts">
import { reactive } from "vue";

const ratings: number[] = [1, 2, 3, 4, 5];

const props = defineProps({
  name: String,
  value: Number,
  id: String,
  disabled: Boolean,
  required: Boolean,
});

const emit = defineEmits(["update:rating"]);

const state = reactive({
  rating: props.value || 1, // This will be used for the hover effect
  selectedRating: props.value || 1, // This will keep the user's selected rating
});

const updateRating = (newRating: number) => {
  if (props.disabled) {
    return;
  }
  state.selectedRating = newRating; // When the user selects a rating, we update the selectedRating
};

const starOver = (index: number) => {
  if (props.disabled) {
    return;
  }
  state.rating = index; // This is used for the hover effect
};

const starOut = () => {
  if (props.disabled) {
    return;
  }
  state.rating = state.selectedRating; // Reset to previously selected rating when the mouse moves away
};

const set = (newRating: number) => {
  updateRating(newRating);
  emit("update:rating", newRating);
};
</script>

<template>
  <div class="rating-title">
    <h2>RATING</h2>
  </div>
  <div class="star-rating">
    <label
      class="star-rating__star"
      v-for="rating in ratings"
      :key="rating"
      :class="{ 'is-selected': state.rating >= rating && state.rating != null, 'is-disabled': disabled }"
      v-on:click="set(rating)"
      v-on:mouseover="starOver(rating)"
      v-on:mouseout="starOut"
    >
      <input
        class="star-rating star-rating__checkbox"
        type="radio"
        :value="rating"
        :name="name"
        v-model="state.rating"
        :disabled="disabled"
      />★
    </label>
  </div>
</template>

<style scoped>
h2 {
  margin-left: 4px;
}

.star-rating__star {
  display: inline-block;
  padding: 3px;
  vertical-align: middle;
  line-height: 1;
  font-size: 1.5em;
  color: #ababab;
  transition: color 0.2s ease-out;
}

.star-rating__star:hover {
  cursor: pointer;
}

.star-rating__star.is-selected {
  color: #ffd700;
}

.star-rating__star.is-disabled:hover {
  cursor: default;
}

.star-rating__checkbox {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}
.rating-title {
  text-align: start;
  margin-left: 5px;
  margin-bottom: 10px;
  margin-top: 1vh;
}
</style>
