<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import CustomInput from "@/components/Widgets/CustomInput.vue";
import { useOrder } from "@/shared/stores";
import { useUser } from "@/shared/stores";
import { UserInterface, AddressInterface } from "@/shared/interfaces";
import { getActivePinia } from "pinia";

const activeAddress = ref();
const orderStore = useOrder();
const userStore = useUser();
const currentUser = userStore.GetUser as UserInterface;

const shippingInfo = ref({
  fullName: "",
  phoneNumber: "",
  street: "",
  city: "",
  country: "",
  zipcode: "",
});

const showAddress = ref(false);

onBeforeMount(() => {
  if (currentUser.firstName == "Guest") {
    showAddress.value = true;
  } else {
    showAddress.value = false;
  }
});

const toggleAddress = () => {
  showAddress.value = !showAddress.value;
};
const fillShippingInfo = (address: AddressInterface, index: number) => {
  activeAddress.value = index;
  // Remplissez les informations d'expédition avec les données de l'adresse
  shippingInfo.value.fullName = currentUser.firstName;
  shippingInfo.value.street = address.street;
  shippingInfo.value.city = address.city;
  shippingInfo.value.country = address.country;
  shippingInfo.value.zipcode = address.zipcode;
  orderStore.setShippingInfoFullName(shippingInfo.value.fullName);
  orderStore.setShippingInfoStreet(shippingInfo.value.street);
  orderStore.setShippingInfoCity(shippingInfo.value.city);
  orderStore.setShippingInfoCountry(shippingInfo.value.country);
  orderStore.setShippingInfoZipcode(shippingInfo.value.zipcode);

  // Vous pouvez également appeler les méthodes de l'objet orderStore ici si nécessaire.
};
</script>

<template>
  <div class="content-box">
    <h2>SHIPPING INFORMATION</h2>
    <span @click="toggleAddress">{{
      showAddress && userStore.isAuthenticated ? "USE EXISTING ADDRESS" : "USE NEW ADDRESS"
    }}</span>
    <div v-if="showAddress">
      <input
        class="ship1"
        placeholder=" Full Name"
        label="* FULL NAME"
        min-length="2"
        v-model="shippingInfo.fullName"
        @change="orderStore.setShippingInfoFullName(shippingInfo.fullName)"
      />

      <div>
        <CustomInput
          class="ship"
          placeholder="Street"
          label="* STREET"
          type="street"
          required
          min-length="4"
          v-model="shippingInfo.street"
          @change="orderStore.setShippingInfoStreet(shippingInfo.street)"
        />
        <CustomInput
          class="ship"
          label="* CITY"
          placeholder="City"
          type="city"
          required
          min-length="4"
          v-model="shippingInfo.city"
          @change="orderStore.setShippingInfoCity(shippingInfo.city)"
        />
        <CustomInput
          class="ship"
          label="* COUNTRY"
          placeholder="Country"
          type="country"
          required
          min-length="4"
          v-model="shippingInfo.country"
          @change="orderStore.setShippingInfoCountry(shippingInfo.country)"
        />
        <CustomInput
          class="ship"
          label="* ZIP CODE"
          placeholder="Zipcode"
          type="zip-code"
          required
          min-length="5"
          v-model="shippingInfo.zipcode"
          @change="orderStore.setShippingInfoZipcode(shippingInfo.zipcode)"
        />
      </div>
    </div>
    <div v-else>
      <div v-if="currentUser.addresses" v-for="(address, index) in currentUser.addresses" :key="index">
        <div class="address-info" :class="{ addressActive: activeAddress === index }" @click="fillShippingInfo(address, index)">
          <div class="values">{{ currentUser.firstName }} {{ currentUser.lastName }}</div>
          <div class="values">{{ address.doorNumber }} {{ address.street }}, {{ address.city }}</div>
          <div class="values">{{ address.country }}, {{ address.zipcode }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.addressActive {
  border: 2px solid var(--dark-primary);
}
.ship1 {
  margin-left: 22.3%;
}

input {
  flex-direction: row;
  padding: 0.2rem;
  border-radius: 0.5rem;
  border: 2px solid var(--primary);
  font-size: 1rem;
  outline: none;
  justify-content: center;
  margin-left: 0.3rem;
  margin-bottom: 1rem;
}

.address-info {
  cursor: pointer;
  background-color: rgba(0, 128, 109, 0.185);
  width: fit-content;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
}

.content-box {
  background-color: rgb(255, 255, 255);
  padding: 2rem;
  border-radius: 15px;
  color: black;
}

.content-box h2 {
  margin-bottom: 1rem;
}

.ship,
.ship1 {
  padding-bottom: 0.8rem;
}

.ship1 {
  margin-top: 1rem;
}

span {
  font-size: 1.2rem;
  color: rgba(0, 128, 109, 0.44);
}

span:hover {
  color: var(--dark-primary);
}

@media screen and (max-width: 375px) {
  .ship1 {
    margin-left: 0;
    width: 38%;
  }
}
</style>
