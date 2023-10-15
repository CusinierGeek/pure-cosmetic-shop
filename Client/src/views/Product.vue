<script setup lang="ts">
import Product from "../components/Products/Product.vue";
import { ProductInterface } from "@/shared/interfaces";
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

import BackButton from "@/components/Widgets/BackButton.vue";
import { fetchProductById } from "@/shared/services";
const router = useRouter();

const product = ref<ProductInterface | null>(null);
const route = useRoute();
watchEffect(async () => {
  const id = Array.isArray(route.params.id) ? parseInt(route.params.id[0]) : parseInt(route.params.id);

  const foundProduct = await fetchProductById(id);

  if (foundProduct) {
    product.value = foundProduct;
  } else {
    router.push("/404");
  }
});
</script>

<template>
  <div class="product-container">
    <BackButton class="back-button" />
    <Product v-if="product" :product="product" />
  </div>
</template>

<style scoped>
.back-button {
  position: absolute;
  top: 4rem;
  left: 1rem;
}
</style>
