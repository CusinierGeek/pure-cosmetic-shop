<script setup lang="ts">
import { computed, reactive } from "vue";
import { useCart } from "@/shared/stores";
import { useOrder } from "@/shared/stores";
import { router } from "@/router";
import { OrderInterface } from "@/shared/interfaces";
import ShowConfirmationModalWindow from "@/components/Checkout/ConfirmationModalWindow.vue";

const props = defineProps({
  checkoutText: String,
});

const orderStore = useOrder();
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

const placeOrder = () => {
  try {
    const result = orderStore.createOrder();

    result.then((res) => {
      if (res) {
        data = res;
        toggleConfirmationModalWindow();
      }
    });
    // router.push("/order-history");
  } catch (error) {
    console.log(error);
  }
};

const state = reactive({
  isConfirmationModalWindowShown: false,
});

const toggleConfirmationModalWindow = () => {
  state.isConfirmationModalWindowShown = !state.isConfirmationModalWindowShown;
};

const exit = () => {
  toggleConfirmationModalWindow();
  cartStore.clearCart();
  router.push("/products");
};

let data: OrderInterface = {
  customerId: "",
  orderItems: [],
  shippingInfoFullName: "",
  shippingInfoStreet: "",
  shippingInfoCity: "",
  shippingInfoCountry: "",
  shippingInfoZipcode: "",
  creditCardNumber: "",
  creditCardExpirationDate: "",
  creditCardCVV: "",
  giftCardNumber: "",
  giftCardPin: "",
  total: 0,
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
      <button @click="placeOrder" class="checkout-btn">
        {{ checkoutText || "CHECKOUT" }}
      </button>
    </div>
    <ShowConfirmationModalWindow :show="state.isConfirmationModalWindowShown" :data="data" @toggleWindow="exit" />
  </div>
</template>

<style scoped>
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
  text-shadow: 2px 2px 4px rgba(233, 114, 78, 0.8);
  letter-spacing: 0.3rem;
}
.summary p {
  margin-bottom: 5px;
  text-align: left;
}
.summary p:last-child {
  font-weight: bold;
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
