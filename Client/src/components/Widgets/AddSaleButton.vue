<script setup lang="ts">
import { ref } from "vue";
import { useProducts } from "@/shared/stores";

const productsStore = useProducts();
const numberOfSales = ref(10);

const addSale = () => {
  productsStore.generateSales(numberOfSales.value);
};
</script>

<template>
  <button class="add-sale-button" @click="addSale">ADD SALES</button>
</template>

<style scoped>
.add-sale-button {
  z-index: 1;
  background-color: var(--primary);
  border: none;
  font-size: 1.4rem;
  padding: 3px 17px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  border-radius: 15px;
}
</style>
