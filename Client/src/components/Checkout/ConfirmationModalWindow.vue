<script setup lang="ts">
import { CartItemInterface, ProductInterface } from "@/shared/interfaces";
import { OrderInterface } from "@/shared/interfaces";
import { useProducts } from "@/shared/stores";
import { useCart } from "@/shared/stores";
import { reactive } from "vue";

const productsStore = useProducts();
const cartStore = useCart();

const props = defineProps({
  data: {
    type: Object as () => OrderInterface,
    required: true,
  },

  show: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits(["toggleWindow"]);

const exit = () => {
  emit("toggleWindow");
};

const state = reactive({
  products: props.data.orderItems.map((item: CartItemInterface) => {
    return cartStore.getProductById(item.productId);
  }) as ProductInterface[],
});

const print = () => {
  window.print();
};

const subtotal = (a: number | undefined, b: number | undefined) => {
  if (a == undefined || b == undefined) {
    return 0;
  }
  return a * b;
};
</script>

<template>
  <div class="confirmation-modal-window-container" v-if="props.show">
    <div class="confirmation-modal-inner-part-container">
      <h2 class="confirmation-text">CONFIRMATION</h2>
      <div class="confirmation-exit" @click="exit"><i class="fas fa-times"></i></div>
      <div class="components-wrapper">
        <button @click="print">PRINT</button>
        <table>
          <thead>
            <tr>
              <th colspan="2">PRODUCT</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data.orderItems" :key="index" class="link-container">
              <td><img class="image" :src="cartStore.getProductById(item.productId)?.image_link" /></td>
              <td>{{ cartStore.getProductById(item.productId)?.name }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ `${subtotal(cartStore.getProductById(item.productId)?.price, item.quantity)}` }}$</td>
            </tr>
          </tbody>
        </table>

        <div class="shipping-info">
          <p>SHIPPING INFORMATIONS</p>
          <p>NAME : {{ data.shippingInfoFullName }}</p>
          <p>ADDRESS : {{ data.shippingInfoStreet }}, {{ data.shippingInfoCity }}, {{ data.shippingInfoCountry }}</p>
        </div>
        <div v-if="data.total > 0">
          <div class="total-container">
            <p>TOTAL : {{ data.total.toFixed(2) }}$</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.confirmation-modal-window-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  z-index: 101;
}

.confirmation-modal-inner-part-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 100%;
  background-color: #fff;
}
.confirmation-text {
  position: absolute;
  top: 10%;
  left: 20%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
}

.confirmation-exit {
  position: absolute;
  top: 2.5%;
  right: 2.5%;
  font-size: 2.5rem;
  cursor: pointer;
}

.confirmation-exit:hover {
  color: #333;
}

.components-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 8rem;
  margin-left: 5rem;
  align-items: center;
}

.link-container {
  margin-top: 10%;
}

.image {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-right: 5rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #ddd;
}

tr {
  border-bottom: 1px solid #5f5555;
}

@media (min-width: 768px) {
}

@media print {
  button {
    display: none;
  }

  .confirmation-modal-window-container {
    width: 100%;
  }

  .confirmation-modal-inner-part-container {
    width: 100%;
  }
}
</style>
