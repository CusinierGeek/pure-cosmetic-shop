<script setup lang="ts">
import { computed } from "vue";
import { useCart } from "@/shared/stores";
import { router } from "@/router";
import { useUser } from "@/shared/stores";

const userStore = useUser();
const props = defineProps({
  checkoutText: String,
});

const cartStore = useCart();

const productSubtotal = computed(() => {
  return cartStore.getSubTotal;
});

const shippingCost = computed(() => {
  return cartStore.getShippingCost;
});

const tvq = computed(() => {
  return cartStore.getTvq;
});

const tps = computed(() => {
  return cartStore.getTps;
});

const total = computed(() => {
  return productSubtotal.value + shippingCost.value + tvq.value + tps.value;
});

const shippingCostDisplay = computed(() => {
  return shippingCost.value === 0 ? "Free" : shippingCost.value.toFixed(2) + "$";
});

const isAuthenticated = computed(() => {
  // Utilisation de la valeur isAuthenticated de userStore
  return userStore.isAuthenticated;
});

const handleCheckout = async () => {
  if (isAuthenticated.value) {
    router.push("/checkout");
  } else {
    await userStore.checkoutAsGuest();
    router.push("/checkout");
  }
};
</script>

<template>
  <div class="summary">
    <h2>ORDER SUMMARY</h2>
    <p>Product Subtotal : {{ productSubtotal.toFixed(2) }}$</p>
    <p>Estimated Shipping : {{ shippingCostDisplay }}</p>
    <p>TVQ : {{ tvq.toFixed(2) }}$</p>
    <p>TPS : {{ tps.toFixed(2) }}$</p>
    <p>TOTAL : {{ total.toFixed(2) }}$</p>
    <div>
      <button @click="handleCheckout" class="checkout-btn">
        {{ isAuthenticated ? "CHECKOUT" : "CHECKOUT AS A GUEST" }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.guest-checkout {
  font-size: 1.1rem;
  margin-top: 1rem;
  cursor: pointer;
}

.guest-checkout:hover {
  color: white;
}

.summary {
  background-color: var(--primary);
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: 70%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 10px;
  padding: 20px;
  font-size: 1.1rem;
}

.summary h2 {
  margin-bottom: 10px;
  color: white;
  letter-spacing: 0.3rem;
}

.summary p {
  margin-bottom: 5px;
  text-align: left;
}

.checkout-btn {
  border: none;
  border-radius: 15px;
  padding: 10px;
  font-size: 1.3rem;
  cursor: pointer;
  background-color: white;
  padding-left: 3rem;
  padding-right: 3rem;
  color: black;
}

.checkout-btn:hover {
  background-color: var(--dark-primary);
}

@media screen and (max-width: 768px) {
  .summary {
    margin-bottom: 2.5rem;
  }
}
</style>
