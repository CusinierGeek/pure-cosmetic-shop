<script setup lang="ts">
import { computed } from "vue";
import { useProducts } from "@/shared/stores";
import { Icon } from "@iconify/vue";
const productsStore = useProducts();
import ProductsList from "@/components/Products/ProductsList.vue";
import AddSaleButton from "@/components/Widgets/AddSaleButton.vue";

const productsOnSale = computed(() => {
  return productsStore.getSales;
});
</script>

<template>
  <div class="shipping">FREE SHIPPING | WITH ORDERS OVER $150</div>
  <div class="banner"><h1>LEVEL UP WITH OUR LATEST DEALS</h1></div>
  <router-link to="/products" class="products-link">
    <button class="products-button">SHOP ALL PRODUCTS<Icon icon="ph:arrow-right-light" class="icon" /></button>
  </router-link>

  <div v-if="productsOnSale.length > 0" class="products">
    <ProductsList :products="productsOnSale" />
  </div>

  <div v-else class="products">
    <h1>NO PRODUCT ON SALE</h1>
  </div>

  <AddSaleButton class="addSale" />
</template>

<style scoped>
.icon {
  padding-left: 0.2rem;
  padding-top: 0.3rem;
}

.addSale {
  margin-bottom: 1rem;
}

.products-button {
  position: absolute;
  top: 10rem;
  left: 1rem;
  z-index: 1;
  background-color: var(--primary);
  border: none;
  font-size: 1.4rem;
  padding: 3px 17px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  border-radius: 15px;
}

.banner h1 {
  font-size: 2rem;
  color: rgb(0, 0, 0);
  letter-spacing: 0.5rem;
  text-align: center;
  position: relative;
  margin-top: 4rem;
}

img {
  object-position: top;
}

.shipping {
  background-color: rgb(241, 241, 241);
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: absolute;
  color: rgb(0, 0, 0);
  letter-spacing: 0.5rem;
  text-align: center;
  margin-top: 3.5rem;
}

.products {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 4rem;
}

.add-to-cart-btn:hover {
  background-color: var(--secondary);
}

@media screen and (max-width: 768px) {
  .products-list-item {
    width: 80%;
  }
  .products-button {
    position: static;
    border: none;
    border-radius: 15px;
    margin-bottom: 25px;
  }
  .add-sale-btn {
    position: static;
    border: none;
    border-radius: 15px;
    margin-bottom: 25px;
  }
}

@media screen and (max-width: 375px) {
  .products-list {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    justify-content: center;
  }

  .products-list-item {
    width: 90%;
  }

  .products {
    margin-top: 0;
  }
}
</style>
