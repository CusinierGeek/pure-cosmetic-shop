<script setup lang="ts">
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import { useCart } from "@/shared/stores";
const cartStore = useCart();

const props = defineProps({
  width: {
    type: Number,
    default: 22, //valeur par defaut
  },
  height: {
    type: Number,
    default: 22, //valeur par defaut
  },
});

const nbOfProducts = computed(() => {
  return cartStore.getCount;
});
</script>

<template>
  <div class="cartIcon-container">
    <a
      ><Icon class="cartIcon" icon="carbon:shopping-cart" :width="width" :height="height" />
      <span :class="{ hidden: !nbOfProducts }" class="number-icon">{{ nbOfProducts }}</span>
    </a>
  </div>
</template>

<style scoped>
.hidden {
  display: none;
}
.cartIcon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
}
.cartIcon {
  margin-top: 7px;
  color: var(--font-secondary);
  margin-left: 8px;
}

.number-icon {
  background-color: var(--font-secondary);
  color: var(--primary);
  border-radius: 50%;
  padding: 0 5px;
  margin-left: -10px;
  margin-top: -10px;
  font-size: 12px;
  font-weight: bold;
}
.zero {
  display: none;
}
@media (max-width: 768px) {
  .number-icon {
    font-size: 20px;
  }
}
</style>
