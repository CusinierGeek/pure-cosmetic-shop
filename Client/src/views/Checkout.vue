<script setup lang="ts">
import { ref, onMounted } from "vue";
import CreditCard from "@/components/Checkout/CreditCard.vue";
import ShippingInfo from "@/components/Checkout/ShippingInfo.vue";
import GiftCard from "@/components/Checkout/GiftCard.vue";
import Cart from "@/components/Cart/Cart.vue";
import CheckoutSummary from "@/components/Checkout/CheckoutSummary.vue";
import { useOrder } from "@/shared/stores";
import { useUser } from "@/shared/stores";
import { useCart } from "@/shared/stores";
import { router } from "@/router";

const orderStore = useOrder();
const cartStore = useCart();

const activeStep = ref(1);
const showGiftCard = ref(false);
const currentView = ref("shipping");
const showCart = ref(false);

const userStore = useUser();

onMounted(() => {
  const userId = userStore.GetUserId;
  if (userId == undefined) {
    return router.push("/login");
  } else {
    orderStore.setCustomerId(userId);
    orderStore.setOrderItems(cartStore.getCartItems);
    orderStore.setTotal(cartStore.getTotal);
  }
});

const showView = (viewName: string) => {
  currentView.value = viewName;
  if (viewName === "payment") {
    activeStep.value = 2;
    showCart.value = false;
  } else if (viewName === "summary") {
    activeStep.value = 3;
    showCart.value = true;
  } else if (viewName === "shipping") {
    activeStep.value = 1;
    showCart.value = false;
  }
};
</script>

<template>
  <div class="shipping">FREE SHIPPING | WITH ORDERS OVER $150</div>
  <div class="checkout">
    <div class="checkout-content">
      <div class="checkout-left">
        <div class="checkout-header">
          <h2>CHECKOUT</h2>
          <div class="checkout-steps">
            <div class="step" @click="showView('shipping')">
              <div class="step-circle"><span>1</span></div>
              <p :class="{ active: activeStep === 1 }">SHIPPING INFORMATION</p>
            </div>

            <div class="step" @click="showView('payment')">
              <div class="step-circle"><span>2</span></div>
              <p :class="{ active: activeStep === 2 }">PAYMENT INFORMATION</p>
            </div>

            <div class="step" @click="showView('summary')">
              <div class="step-circle"><span>3</span></div>
              <p :class="{ active: activeStep === 3 }">ORDER SUMMARY</p>
            </div>
          </div>
        </div>
        <Cart v-if="showCart" />
        <div class="checkout-body">
          <div class="checkout-form">
            <ShippingInfo v-if="currentView === 'shipping'" />
            <CreditCard class="card" v-if="currentView === 'payment'" />
            <p v-if="currentView === 'payment'" class="giftCard" @click="showGiftCard = !showGiftCard">
              <span v-if="!showGiftCard">ADD GIFT CARD</span>
              <span v-else>REMOVE GIFT CARD</span>
            </p>
            <GiftCard class="card" v-if="currentView === 'payment' && showGiftCard" />
          </div>
          <div class="checkout-buttons">
            <button class="next-btn" v-if="currentView === 'shipping'" @click="showView('payment')">NEXT</button>
            <button class="next-btn" v-if="currentView === 'payment'" @click="showView('summary')">NEXT</button>
          </div>
        </div>
      </div>
      <div class="checkout-right">
        <CheckoutSummary :checkoutText="'PLACE YOUR ORDER'" class="summary" @checkout="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
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

p {
  font-size: 1.1rem;
  margin-top: 1rem;
}

h2 {
  color: var(--font-secondary);
  font-size: 3rem;
  letter-spacing: 1rem;
  margin-right: 2rem;
}

.active {
  color: var(--dark-primary);
  font-weight: bold;
  text-decoration: underline;
}
.checkout {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 3rem;
}

.checkout-content {
  display: flex;
  flex-wrap: nowrap;
}

.checkout-left {
  flex: 2;
}

.checkout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkout-steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-bottom: 2rem;
  margin-right: 2rem;
}

.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--dark-primary);
  display: flex;
  justify-content: center;
  align-items: center;
}

.step-circle span {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.checkout-body {
  margin-top: 2rem;
}

.checkout-form {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.checkout-buttons {
  display: flex;
  justify-content: flex-end;
}

.next-btn {
  background-color: var(--primary);
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: large;
  letter-spacing: 0.3rem;
}

.next-btn:hover {
  background-color: var(--dark-primary);
}

.checkout-right {
  flex: 1;
  padding-left: 7rem;
}

.summary {
  height: 32.5rem;
  width: 25rem;
  text-align: center;
  letter-spacing: 0.2rem;
}

.card {
  margin-top: 2rem;
}

.giftCard {
  color: var(--dark-primary);
  cursor: pointer;
  margin-top: 1rem;
}

.giftCard:hover {
  color: var(--font-secondary);
}

@media screen and (max-width: 768px) {
  .checkout {
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .checkout-content {
    flex-direction: column;
  }

  .checkout-left,
  .checkout-right {
    flex: 1;
    padding: 0;
  }

  .checkout-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .checkout-steps {
    max-width: none;
    margin-bottom: 2rem;
  }

  .step {
    margin: 0.5rem 0;
  }

  .checkout-form {
    margin: 0;
  }

  .next-btn {
    margin-top: 1rem;
  }

  .summary {
    width: 100%;
    margin-left: 0;
  }
}

@media screen and (max-width: 375px) {
  .checkout-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .step {
    margin: 0.5rem 0;
    margin-bottom: 0;
  }

  .next-btn {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .summary {
    width: 100%;
    margin-left: 0;
  }

  h2 {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
}
</style>
