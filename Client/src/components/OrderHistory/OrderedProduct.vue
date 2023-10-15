<script setup lang="ts">
import { CartItemInterface } from "@/shared/interfaces";
import { fetchProductById } from "@/shared/services";


const props = defineProps({
  product: {
    type: Object as () => CartItemInterface,
    required: true,
  },
});

async function getProductById(productId: number) {
  const product = await fetchProductById(productId);
  return product;
}
const product = await getProductById(props.product?.productId);

</script>

<template>
  <div class="container-product">
    <div class="product-image"><img :src="product.image_url" /></div>
    <div class="product-name">{{ product.name }}</div>
    <div class="product-price">{{ props.product?.quantity }}$</div>
    <div class="product-quanity">{{ props.product?.quantity }}</div>
  </div>
</template>

<style scoped>
.container-product {
  display: flex;
  flex-direction: row;
}

.product-image img {
  width: 100px;
  height: 100px;
}

.product-name {
  width: 100px;
  height: 100px;
}
</style>
