<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import CustomInput from "@/components/Widgets/CustomInput.vue";
import { useUser } from "@/shared/stores";
import { UserInterface, CardInterface } from "@/shared/interfaces";
import { useOrder } from "@/shared/stores";

const userStore = useUser();
const currentUser = userStore.GetUser as UserInterface;
const orderStore = useOrder();
const cardActive = ref();

const creditCard = ref({
  cardNumber: "",
  expirationDate: "",
  CVV: "",
});

const useDefaultCard = ref(false);
onBeforeMount(() => {
  if (currentUser.firstName == "Guest") {
    useDefaultCard.value = true;
  } else {
    useDefaultCard.value = false;
  }
});

const toggleUseDefaultCard = () => {
  useDefaultCard.value = !useDefaultCard.value;
};

const maskedCardNumber = (cardNumber: string) => {
  if (cardNumber && cardNumber.length >= 16) {
    const first12Digits = cardNumber.substring(0, 14);
    const maskedDigits = "*".repeat(14);
    return `${maskedDigits}${cardNumber.substring(14)}`;
  }
  return "";
};

const fillCardInfos = (card: CardInterface, index: number) => {
  cardActive.value = index;
  creditCard.value.cardNumber = card.cardNumber;
  creditCard.value.expirationDate = card.expiryDate;
  creditCard.value.CVV = card.cvv;
  orderStore.setCreditCardNumber(creditCard.value.cardNumber);
  orderStore.setCreditCardExpirationDate(creditCard.value.expirationDate);
  orderStore.setCreditCardCVV(creditCard.value.CVV);
};
</script>

<template>
  <div class="content-box">
    <h2>CREDIT CARD INFORMATION</h2>
    <span @click="toggleUseDefaultCard">{{
      useDefaultCard && userStore.isAuthenticated ? "USE DEFAULT CARD" : "USE DIFFERENT CARD"
    }}</span>
    <div v-if="useDefaultCard">
      <CustomInput
        label="* CARD NUMBER"
        placeholder="XXXX-XXXX-XXXX-XXXX"
        v-model="creditCard.cardNumber"
        @change="orderStore.setCreditCardNumber(creditCard.cardNumber)"
      />
      <CustomInput
        label="* EXPIRY DATE"
        placeholder="MM/YY"
        v-model="creditCard.expirationDate"
        @change="orderStore.setCreditCardExpirationDate(creditCard.expirationDate)"
      />
      <CustomInput
        label="* CVV"
        placeholder="XXX"
        v-model="creditCard.CVV"
        @change="orderStore.setCreditCardCVV(creditCard.CVV)"
      />
    </div>
    <div v-else>
      <div v-for="(cards, index) in currentUser.cards" :key="index">
        <div class="card-info" :class="{ cardActive: cardActive === index }" @click="fillCardInfos(cards, index)">
          <div class="values">NAME ON CARD : {{ currentUser.firstName }} {{ currentUser.lastName }}</div>
          <div class="values">CARD NUMBER : {{ maskedCardNumber(cards.cardNumber) }}</div>
          <div class="values">EXPIRY DATE : {{ new Date(cards.expiryDate).toLocaleDateString() }}</div>
          <div class="values">CVV : {{ cards.cvv }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cardActive {
  border: 2px solid var(--dark-primary);
}
.card-info {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 128, 109, 0.185);
  padding: 1rem;
  border-radius: 10px;
  min-width: 250px !important;
}

.values {
  min-width: 200px !important;
}

.content-box {
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  color: black;
}

h2 {
  margin-bottom: 1rem;
}

.content-box div {
  display: flex;
  justify-content: space-between;
}

span {
  font-size: 1.2rem;
  color: rgba(0, 128, 109, 0.44);
  cursor: pointer;
}

span:hover {
  color: var(--dark-primary);
}

.content-box div div {
  width: 30%;
  margin-top: 1rem;
}

.content-box div div input {
  width: 100%;
}

.content-box div div label {
  margin-bottom: 0.5rem;
}

@media screen and (max-width: 768px) {
  .content-box {
    padding: 1rem;
  }

  .content-box div div {
    width: 100%;
    margin-top: 1rem;
  }
}

@media screen and (max-width: 375px) {
  .content-box {
    padding: 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .content-box div {
    flex-direction: column;
  }

  .content-box div div {
    width: 100%;
    margin-top: 0.5rem;
  }

  .content-box div div input {
    width: 100%;
  }
}
</style>
