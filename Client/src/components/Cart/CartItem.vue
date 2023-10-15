<script setup lang="ts">
import { computed, ref, onBeforeMount } from "vue";
import { ProductInterface } from "@/shared/interfaces";
import { useCart } from "@/shared/stores";
import { Icon } from "@iconify/vue";
import SalesRibbon from "../Widgets/SalesRibbon.vue";

const cartStore = useCart();

const props = defineProps({
  productId: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const product = ref<ProductInterface | null>(null);

onBeforeMount(() => {
  product.value = cartStore.getProductById(props.productId) as ProductInterface;
});

const discountedPrice = computed(() => {
  if (!product.value) return 0;
  return product.value.discount?.percent
    ? product.value.price * (1 - product.value.discount.percent / 100)
    : product.value.price;
});

const quantity = computed(() => {
  return props.quantity;
});

const total = computed(() => {
  if (!product.value) return 0;
  return discountedPrice.value * quantity.value || 0;
});

const removeProduct = async () => {
  if (!product.value) return;
  cartStore.removeProduct(product.value.id);
};

const addProduct = async () => {
  if (!product.value) return;
  cartStore.addProduct(product.value.id);
};
const subtractProduct = async () => {
  if (!product.value) return;
  cartStore.subtractProduct(product.value.id);
};
</script>

<template>
  <div class="cart-item">
    <div class="cart-item__image">
      <img :src="product?.image_link" alt="product.name" />
    </div>
    <div class="cart-item__info">
      <h3 class="cart-item__name">{{ product?.name }}</h3>
      <SalesRibbon
        v-if="product?.discount && product?.discount.end_date > new Date().toISOString()"
        :product="product"
      />
      <p class="cart-item__price">
        <span class="old-price" v-if="product?.discount?.percent && product.discount.percent > 0">
          {{ product.price.toFixed(2) }}$<br /></span
        >{{ discountedPrice.toFixed(2) }}$
      </p>
      <div class="cart-item__quantity">
        QUANTITY : <button class="cart-item__subtract" @click="subtractProduct">-</button> {{ quantity }}
        <button class="cart-item__add" @click="addProduct">+</button>
      </div>
      <p class="cart-item__total">TOTAL : {{ total.toFixed(2) }}$</p>
      <button class="cart-item__remove" @click="removeProduct">
        <Icon icon="ph:trash-thin" color="black" width="32" height="32" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.old-price {
  text-decoration: line-through;
  color: red;
}
.cart-item {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: white;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: 100%;
}

.sales-ribbon {
  color: red;
  position: relative;
  background-color: transparent;
  justify-self: flex-end;
  grid-area: discount;
}

.cart-item__image img {
  width: 110px;
  height: 110px;
  border-radius: 15px;
}

.cart-item__info {
  margin-left: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "name remove"
    "price price"
    "quantity discount"
    "total discount";
  grid-gap: 5px;
}

.cart-item__name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5px;
  grid-area: name;
}

.cart-item__price {
  font-size: 1.2rem;
  margin-bottom: 5px;
  grid-area: price;
}

.cart-item__quantity {
  font-size: 1.2rem;
  margin-bottom: 5px;
  grid-area: quantity;
}

.cart-item__total {
  font-size: 1.2rem;
  margin-bottom: 5px;
  grid-area: total;
}

.cart-item__remove {
  grid-area: remove;
  justify-self: end;
  align-self: start;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: white;
  color: var(--font-primary);
  grid-area: remove;
  font-size: 1rem;
}

.cart-item__add {
  padding-right: 1rem;
  padding-left: 1rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: white;
  color: var(--font-primary);
  margin-right: 5px;
  grid-area: add;
  font-size: 1.5rem;
}
.cart-item__subtract {
  padding-left: 1rem;
  padding-right: 1rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: white;
  color: var(--font-primary);
  margin-right: 5px;
  grid-area: subtract;
  font-size: 1.5rem;
}

.cart-item__add:hover,
.cart-item__subtract:hover {
  background-color: var(--dark-primary);
}

.cart-item__remove:hover {
  background-color: var(--dark-primary);
  border-radius: 15px;
}

@media screen and (max-width: 1100px) {
  .sales-ribbon {
    position: absolute;
    transform: rotate(-45deg);
  }
  .cart-item__info {
    grid-template-areas:
      "name remove"
      "price price"
      "quantity quantity"
      "total total";
  }
}
</style>
