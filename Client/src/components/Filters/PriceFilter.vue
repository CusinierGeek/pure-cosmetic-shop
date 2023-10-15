<script setup lang="ts">
import { reactive, watch } from "vue";

const props = defineProps({
  minimum: {
    type: Number,
    required: true,
    default: 0,
  },

  maximum: {
    type: Number,
    required: true,
    default: 100,
  },
});

const state = reactive({
  min: props.minimum,
  max: props.maximum,
  lower: props.minimum,
  upper: props.maximum,
});

const blockLower = () => {
  if (state.lower > state.upper) state.lower = state.upper;
};

const blockUpper = () => {
  if (state.upper < state.lower) state.upper = state.lower;
};
const emit = defineEmits(["updatePriceupper", "updatePricelower"]);

watch(
  () => state.lower,
  (value) => emit("updatePricelower", value)
);

watch(
  () => state.upper,
  (value) => emit("updatePriceupper", value)
);
</script>

<template>
  <div class="wrapper">
    <h2>PRICES</h2>
    <fieldset class="filter-price">
      <div class="price-field">
        <div class="slider-container">
          <input
            type="range"
            :min="state.min"
            :max="state.max"
            :value="state.lower"
            @input="
              state.lower = parseInt(($event.target as HTMLInputElement).value);
              blockLower();
            "
          />
          <div class="slider-value-min">{{ state.lower }}</div>
        </div>
        <div class="slider-container">
          <input
            type="range"
            :min="state.min"
            :max="state.max"
            :value="state.upper"
            @input="
              state.upper = parseInt(($event.target as HTMLInputElement).value);
              blockUpper();
            "
          />
          <div class="slider-value-max">{{ state.upper }}</div>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<style scoped>
.slider-value-min {
  position: absolute;
  top: 0px;
  left: 0;
  color: var(--primary);
  font-size: 14px;
  line-height: 1.2em;
  font-weight: 400;
}

.slider-value-max {
  position: absolute;
  top: 0px;
  right: 0;
  color: var(--primary);
  font-size: 14px;
  line-height: 1.2em;
  font-weight: 400;
}
h2 {
  margin-left: 11px;
}

p {
  padding: 0;
  margin: 0;
}

.filter-price {
  width: 220px;
  border: 0;
  padding: 0;
  margin: 0;
}

.price-title {
  position: relative;
  color: #fff;
  font-size: 14px;
  line-height: 1.2em;
  font-weight: 400;
}

.price-field {
  position: relative;
  width: 100%;
  height: 36px;
  box-sizing: border-box;
  background: rgba(248, 247, 244, 0.2);
  padding-top: 15px;
  padding-left: 16px;
  border-radius: 3px;
}

.price-field input[type="range"] {
  position: absolute;
}

/* Reset style for input range */
.price-field input[type="range"] {
  width: 188px;
  height: 2px;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  border-radius: 5px;
  pointer-events: none;
  -webkit-appearance: none;
}

.price-field input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

.price-field input[type="range"]:active,
.price-field input[type="range"]:focus {
  outline: 0;
}

.price-field input[type="range"]::-ms-track {
  width: 188px;
  height: 2px;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  border-radius: 5px;
  pointer-events: none;
  background: transparent;
  border-color: transparent;
  color: transparent;
  border-radius: 5px;
}

.price-field input[type="range"]::-webkit-slider-thumb {
  position: relative;
  -webkit-appearance: none;
  margin: 0;
  border: 0;
  outline: 0;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-top: -4px;
  background-color: var(--primary);
  cursor: pointer;
  cursor: pointer;
  pointer-events: all;
  z-index: 100;
}

.price-field input[type="range"]::-moz-range-thumb {
  /* Firefox */
  position: relative;
  appearance: none;
  margin: 0;
  border: 0;
  outline: 0;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-top: -5px;
  background-color: var(--primary);
  cursor: pointer;
  cursor: pointer;
  pointer-events: all;
  z-index: 100;
}

.price-field input[type="range"]::-webkit-slider-runnable-track {
  width: 188px;
  height: 2px;
  cursor: pointer;
  background: #fff;
  border-radius: 5px;
}

.price-field input[type="range"]::-moz-range-track {
  /* Firefox */
  width: 188px;
  height: 2px;
  cursor: pointer;
  background: #fff;
  border-radius: 5px;
}

/* Style for active state input */
.price-field input[type="range"]:hover::-webkit-slider-thumb {
  box-shadow: 0 0 0 0.5px #fff;
  transition-duration: 0.3s;
}

.price-field input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 0.5px #bb6767;
  transition-duration: 0.3s;
}
</style>
