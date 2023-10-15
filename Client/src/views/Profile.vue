<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import OrderHistory from "@/components/Profile/OrderHistory.vue";
import PaymentMethods from "@/components/Profile/PaymentMethods.vue";
import Address from "@/components/Profile/Address.vue";
import { useUser } from "@/shared/stores";
import { UserInterface } from "@/shared/interfaces";
import { AddressInterface } from "@/shared/interfaces";
import { useOrderHistory } from "@/shared/stores";

const userStore = useUser();
const currentUser = userStore.GetUser as UserInterface;
const showOrderHistoryModal = ref(false);
const showPaymentMethods = ref(false);
const showAddressModal = ref(false);
const selectedAddress = ref<AddressInterface>();
const isUpdating = ref(false);
const orderHistoryStore = useOrderHistory();

const userId = userStore.GetUser?._id;
orderHistoryStore.fetchOrders(userId ? userId : "");

const openOrderHistoryModal = () => {
  showOrderHistoryModal.value = true;
};
const closeOrderHistoryModal = () => {
  showOrderHistoryModal.value = false;
};

const openPaymentModal = () => {
  showPaymentMethods.value = true;
};
const closePaymentModal = () => {
  showPaymentMethods.value = false;
};

const openAddressModal = () => {
  showAddressModal.value = true;
  isUpdating.value = false;
};
const closeAddressModal = () => {
  showAddressModal.value = false;
};

const openEditAddressModal = (address: AddressInterface) => {
  selectedAddress.value = { ...address };
  showAddressModal.value = true;
  isUpdating.value = true;
};

const deleteAddress = async (addressId: string) => {
  if (currentUser.addresses && addressId) {
    const index = currentUser.addresses.findIndex((address) => address._id === addressId);
    if (index !== -1) {
      currentUser.addresses.splice(index, 1);
    }

    userStore.deleteAddress(addressId);
  }
};

const maskedCardNumber = (cardNumber: string) => {
  if (cardNumber && cardNumber.length >= 16) {
    const first12Digits = cardNumber.substring(0, 14);
    const maskedDigits = "*".repeat(14);
    return `${maskedDigits}${cardNumber.substring(14)}`;
  }
  return "";
};

const deleteCard = (cardId: string) => {
  if (currentUser.cards && cardId) {
    const index = currentUser.cards.findIndex((card) => card._id === cardId);
    if (index !== -1) {
      currentUser.cards.splice(index, 1);
    }

    userStore.deleteCard(cardId);
  }
};
</script>

<template>
  <div class="text">
    <h1 class="banner">Hello, {{ currentUser.firstName }} !</h1>
  </div>
  <div class="containers">
    <div class="container">
      <div class="header">
        <div class="title">ORDER HISTORY</div>
        <p class="details">View your orders below</p>
        <Icon class="icon" icon="solar:history-line-duotone" width="60" height="60" />
      </div>
      <OrderHistory v-if="showOrderHistoryModal" @close-modal="closeOrderHistoryModal" />
      <div class="orders" @click="openOrderHistoryModal">Your orders ></div>
    </div>

    <div class="container">
      <div class="header">
        <div class="title">PAYMENT METHODS</div>
        <p class="details">View your payment methods below</p>
        <Icon class="icon" icon="fluent:payment-16-regular" width="60" height="60" />
      </div>
      <div class="card-container">
        <div class="card" v-for="card in currentUser.cards" :key="card._id">
          <div class="card-list">
            <p>TYPE : {{ card.cardType }}</p>
            <p>CARD NUMBER : {{ maskedCardNumber(card.cardNumber) }}</p>
            <p>EXPIRY DATE : {{ new Date(card.expiryDate).toLocaleDateString() }}</p>
            <p>CVV : {{ card.cvv }}</p>
            <Icon v-if="card._id" class="delete-card" icon="fluent:delete-20-regular" @click="deleteCard(card._id)" />
          </div>
        </div>
      </div>
      <PaymentMethods v-if="showPaymentMethods" @close-modal="closePaymentModal" />
      <Icon icon="fluent:form-new-20-regular" width="40" height="40" class="view" @click="openPaymentModal" />
    </div>

    <div class="container">
      <div class="header">
        <div class="title">ADDRESSES</div>
        <p class="details">View your addresses below</p>
        <Icon class="icon" icon="iconamoon:home-light" width="60" height="60" />
      </div>
      <div class="address-container">
        <div class="address" v-for="address in currentUser.addresses" :key="address._id">
          <div class="address-list">
            <p>{{ address.doorNumber }}, {{ address.street }}</p>
            <p>{{ address.city }}</p>
            <p>{{ address.country }}, {{ address.zipcode }}</p>
            <Address
              :update="isUpdating"
              :address="selectedAddress"
              v-if="showAddressModal"
              @close-modal="closeAddressModal"
            />
            <Icon
              class="update-card"
              icon="streamline:interface-edit-write-2-change-document-edit-modify-paper-pencil-write-writing"
              width="15"
              @click="openEditAddressModal(address)"
            />
            <Icon
              v-if="address._id"
              class="del-card"
              icon="fluent:delete-20-regular"
              width="18"
              @click="deleteAddress(address._id)"
            />
          </div>
        </div>
      </div>
      <Address
        :update="isUpdating"
        v-if="showAddressModal"
        :address="selectedAddress"
        @close-modal="closeAddressModal"
      />
      <Icon icon="fluent:form-new-20-regular" width="40" height="40" class="view2" @click="openAddressModal" />
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  height: 100%;
}
.delete-card {
  color: black;
  position: absolute;
  right: 0;
  margin: 0.2rem;
  bottom: 0;
}

.update-card {
  color: black;
  margin: 0.2rem;
}

.del-card {
  color: black;
  margin: 0.1rem;
}

.text {
  position: absolute;
  left: 0;
  padding-top: 5rem;
  padding-left: 1.5rem;
  font-size: 1.5rem;
  color: white;
}

.containers {
  display: flex;
  justify-content: space-between;
  align-self: center;
  flex-wrap: wrap;
  margin-top: 4rem;
}

.orders {
  font-size: 1.3rem;
}

.orders:hover {
  color: var(--dark-primary);
}

.container {
  background-color: rgb(247, 248, 248);
  width: 600px;
  height: 400px;
  border-radius: 15px;
  cursor: pointer;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(117, 117, 117, 0.5);
  margin: 1rem;
}

.card-list,
.address-list {
  max-width: fit-content;
  font-size: 1.2rem;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(117, 117, 117, 0.5);
  margin-bottom: 1rem;
  color: rgba(255, 22, 61, 0.724);
  position: relative;
}

.card-list:hover,
.address-list:hover {
  background-color: rgba(0, 255, 255, 0.145);
}

.address-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.card-container {
  display: flex;
  gap: 10px;
}

.address-container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 1rem;
  gap: 5px;
}

.address {
  width: calc(50% - 10px);
}

.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
}

.view,
.view2 {
  color: var(--dark-primary);
}

.view:hover,
.view2:hover {
  color: black;
}

.details {
  font-size: 1.2rem;
}

.icon {
  margin-left: 30rem;
  margin-top: -3.5rem;
  color: var(--dark-primary);
}

@media screen and (max-width: 768px) {
  .delete-card {
    right: 55px;
  }
}

@media screen and (max-width: 375px) {
  .text {
    font-size: 1rem;
    padding-left: 1rem;
  }

  .containers {
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 1rem;
    height: auto;
  }

  .container {
    width: 90%;
    margin-bottom: 1rem;
    height: fit-content;
  }

  .icon {
    margin-left: 15rem;
    margin-top: -4rem;
  }

  .card-container,
  .address-container {
    margin-top: 3rem;
  }

  .delete-card {
    right: 55px;
  }
}
</style>
