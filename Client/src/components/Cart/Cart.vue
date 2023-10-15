<script setup lang="ts">
import { computed } from "vue";
import { useCart } from "@/shared/stores";
import CartItem from "./CartItem.vue";
import BackButton from "../Widgets/BackButton.vue";
const cartStore = useCart();
const cartItems = computed(() => cartStore.getCartItems);
</script>

<template>
  <BackButton class="back-button" />
  <CartItem
    v-for="product in cartItems"
    :key="product.productId"
    :product-id="product.productId"
    :quantity="product.quantity"
  />
</template>

<style scoped>
.back-button {
  position: absolute;
  top: 4rem;
  left: 1rem;
}
</style>
