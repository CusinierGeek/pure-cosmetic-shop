<script setup lang="ts">
import { ref } from "vue";
import CustomInput from "@/components/Widgets/CustomInput.vue";
import { useOrder } from "@/shared/stores";

const orderStore = useOrder();

const giftCard = ref({
  cardNumber: "",
  pin: "",
});
</script>

<template>
  <div class="content-box">
    <h2>GIFT CARD</h2>
    <div>
      <CustomInput
        label="GIFT CARD NUMBER"
        placeholder="XXXX-XXXX-XX"
        v-model="giftCard.cardNumber"
        @change="orderStore.setGiftCardNumber(giftCard.cardNumber)"
      />
      <CustomInput
        label="PIN"
        placeholder="XXXX"
        v-model="giftCard.pin"
        @change="orderStore.setGiftCardPin(giftCard.pin)"
      />
    </div>
  </div>
</template>

<style scoped>
.content-box {
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  color: black;
}

.content-box h2 {
  margin-bottom: 1rem;
}

.content-box div {
  display: flex;
  justify-content: space-between;
}

.content-box div div {
  width: 30%;
}

.content-box div div input {
  width: 100%;
}

.content-box div div label {
  margin-bottom: 0.5rem;
}
</style>
