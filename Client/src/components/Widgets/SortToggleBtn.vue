<script setup lang="ts">
import { computed } from "vue";
import { useProducts } from "@/shared/stores";
import { SortAttributes, SortOrder } from "@/shared/stores";
const productsStore = useProducts();

const sortAttribute = computed(() => productsStore.sortAttribute);
const sortOrder = computed(() => productsStore.sortOrder);

const toggleSortAttribute = (attribute: SortAttributes) => {
  productsStore.setSortAttribute(attribute);
};

const toggleSortOrder = () => {
  productsStore.toggleSortOrder();
};
</script>

<template>
  <div class="sort-container"></div>
  <h2>SORT BY :</h2>
  <button
    @click="toggleSortAttribute(SortAttributes.RATING)"
    :class="{ active: sortAttribute === SortAttributes.RATING }"
    class="sort-button"
  >
    RATING
  </button>
  <button
    @click="toggleSortAttribute(SortAttributes.PRICE)"
    :class="{ active: sortAttribute === SortAttributes.PRICE }"
    class="sort-button"
  >
    PRICE
  </button>
  <button @click="toggleSortOrder" :class="{ active: sortOrder === SortOrder.DESC }" class="sort-button">
    {{ sortOrder === SortOrder.ASC ? "ASCENDING" : "DESCENDING" }}
  </button>
</template>

<style scoped>
.sort-container {
  margin-left: 0.5rem;
}

h2 {
  margin-left: 1vh;
}

.sort-button {
  margin: 3px;
  padding: 3px;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  cursor: pointer;
  background-color: #f5f5f5;
  color: black;
  font-size: 0.9rem;
}

.sort-button:hover {
  background-color: var(--primary);
}

.sort-button.active {
  background-color: var(--primary);
  color: white;
}

.sort-button:first-child {
  margin-left: auto;
}

@media (max-width: 768px) {
  .sort-container {
    position: fixed;
    top: 9vh;
  }
}
</style>
