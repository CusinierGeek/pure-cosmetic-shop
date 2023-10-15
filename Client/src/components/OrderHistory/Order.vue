<script setup lang='ts'> 
import OrderedProduct from '@/components/OrderHistory/OrderedProduct.vue'
import { OrderHistoryInterface } from '@/shared/interfaces'
import { router } from '@/router';

const props = defineProps({
    order : {
        type: Object as () => OrderHistoryInterface,
        required: true
    }
});

const goToProductPage = (productId :number) => {
    router.push(`/products/${productId}`);
}


</script>

<template>
  <div class="container">
    <div class="order-header">
      <div class="order-info">
        <div class="order-info-item">
          <p class="info-label">ORDER PLACED</p>
          <p>{{ new Date(props.order?.orderDate).toLocaleString() }}</p>
        </div>
        <div class="order-info-item">
          <p class="info-label">TOTAL</p>
          <p>{{ props.order?.total.toFixed(2) }} $</p>
        </div>
        <div class="order-info-item">
          <p class="info-label">SHIP TO</p>
          <p>{{ props.order?.shippingInfoStreet }}</p>
        </div>
        <div class="order-info-item">
          <p class="info-label">ORDER #{{ props.order?.orderNumber }}</p>
        </div>
      </div>
    </div>
    <div class="ordered-products">
      <OrderedProduct
        v-for="product in props.order?.orderItems"
        :key="product.productId"
        :product="product"
        class="item"
        @click="goToProductPage(product.productId)"
      ></OrderedProduct>
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #ddd;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  margin-bottom: 1rem;
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.order-info {
  display: flex;
  flex-wrap: wrap;
}

.order-info-item {
  margin-right: 20px;
}

.info-label {
  font-weight: bold;
}

.ordered-products {
  display: grid;
  gap: 10px;
}

.item:hover {
  opacity: 0.8;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 20px;
    margin-bottom: 2rem;
  }

  .order-info-item {
    margin-right: 30px;
  }
}

@media screen and (max-width: 767px) {
  .container {
    padding: 15px;
  }

  .order-info-item {
    margin-right: 15px;
  }
}

@media screen and (max-width: 375px) {
  .container {
    padding: 10px;
  }

  .order-info-item {
    margin-right: 10px;
  }
}
</style>