<script setup lang="ts">
import { ProductInterface, CartItemInterface } from "@/shared/interfaces";
import { reactive,computed } from "vue";
import { useCart } from "@/shared/stores";
import { useProducts } from "@/shared/stores";
import BackButton from "@/components/Widgets/BackButton.vue";
import SalesRibbon from "@/components/Widgets/SalesRibbon.vue";
import ShareModalWindow from "@/components/Share/ShareModalWindow.vue";

const cartStore = useCart();
const productsStore = useProducts();



const props = defineProps({
  product: {
    type: Object as () => ProductInterface,
    required: true,
  },
});

const product = computed(() => props.product);

const discountedPrice = computed(() => {
  if (!product.value) return 0;
  return product.value.discount?.percent
    ? product.value.price * (1 - product.value.discount.percent / 100)
    : product.value.price;
});

const toggleShare = () => {
  state.isShown = state.isShown ? false : true;
};

const state = reactive({
  isShown: false,
});

const formatPrice = (price: number) => price.toFixed(2);

const limitDescription = (description: string | null) => {
  if (description === null) {
    return "";
  }
  const words = description.split(" ");
  if (words.length <= 25) {
    return description;
  }
  const limitedDescription = words.slice(0, 25).join(" ");
  return `${limitedDescription}...`;
};
</script>

<template>
  <BackButton class="back-button" />
  <div class="container">
    <div v-if="product" class="product">
      <div class="product-image">
        <img :src="product.image_link" alt="product" />
        <p class="product-description"><b></b>{{ limitDescription(product.description) }}</p>
      </div>
      <SalesRibbon v-if="product.discount && product.discount.percent > 0" :product="product" />
      <div class="product-info">
        <h1 class="product-name">{{ product.name }}</h1>
        <p class="product-price">
          <span class="old-price" v-if="product.discount && product.discount.percent>0">{{ product.price.toFixed(2) }}$<br /></span
          >{{ discountedPrice.toFixed(2) }}$
        </p>
        <div class="btns">
          <button class="add-to-cart" @click="cartStore.addProduct(product.id)">ADD TO CART</button>
          <button class="share" @click="toggleShare">SHARE</button>
        </div>
      </div>
    </div>
    <div v-else>WE CAN'T FIND THE PRODUCT</div>
    <ShareModalWindow :product="product" :isShown="state.isShown" @toggleShare="toggleShare" />
  </div>
</template>

<style scoped>
.old-price {
  text-decoration: line-through;
  color: red;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.product {
  display: flex;
  width: 80%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  background-color: #f1f0f0;
  position: relative;
}

.product-image {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-image img {
  max-width: 100%;
  max-height: 500px;
  border-radius: 15px;
}

.product-description {
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
  color: #666;
}

.product-info {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.product-name {
  font-size: 2.4rem;
  margin-bottom: 10px;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 700;
}

.btns {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.add-to-cart,
.share {
  flex: 1;
  height: 40px;
  border: none;
  outline: none;
  background-color: var(--primary);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--font-secondary);
  margin-right: 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button {
  position: absolute;
  top: 4rem;
  left: 1rem;
}

.add-to-cart:hover,
.share:hover {
  background-color: var(--dark-primary);
}

@media (max-width: 375px) {
  .product {
    flex-direction: column;
    width: 100%;
    border-radius: 15px;
    max-width: 70%;
    max-height: 70vh;
  }

  .product-image {
    align-items: center;
  }

  .product-image img {
    max-width: 100%;
    max-height: none;
    border-radius: 15px;
    margin-bottom: -1rem;
  }

  .product-description {
    font-size: small;
    align-items: center;
    margin-bottom: -3rem;
  }

  .product-name {
    font-size: 1rem;
    align-items: center;
    margin-top: 1rem;
  }

  .product-price {
    font-size: 1rem;
  }

  .btns {
    flex-direction: row;
    margin-top: 5px;
    width: 15rem;
    max-height: 4vh;
  }

  .add-to-cart,
  .share {
    font-size: 1rem;
  }
}
</style>
