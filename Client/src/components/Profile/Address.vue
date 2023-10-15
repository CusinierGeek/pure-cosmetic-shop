<script setup lang="ts">
import { ref, PropType } from "vue";
import { useUser } from "@/shared/stores";
import { AddressInterface } from "@/shared/interfaces";
import CustomInput from "../Widgets/CustomInput.vue";

const userStore = useUser();
const showAddressModal = ref(false);
const emit = defineEmits(["close-modal"]);

const props = defineProps({
  update: {
    type: Boolean,
    required: false,
  },
  address: {
    type: Object as PropType<AddressInterface>,
    required: false,
  },
});
const doorNumber = ref(props.update ? props.address?.doorNumber || "" : "");
const street = ref(props.update ? props.address?.street || "" : "");
const city = ref(props.update ? props.address?.city || "" : "");
const zipcode = ref(props.update ? props.address?.zipcode || "" : "");
const country = ref(props.update ? props.address?.country || "" : "");
const _id = ref(props.address?._id || "");

const isUpdating = ref(props.update);

const openModal = () => {
  showAddressModal.value = true;
};
const closeModal = () => {
  showAddressModal.value = false;
  emit("close-modal");
};

const saveAddress = () => {
  const address: AddressInterface = {
    doorNumber: doorNumber.value,
    street: street.value,
    city: city.value,
    zipcode: zipcode.value,
    country: country.value,
  };

  if (isUpdating.value) {
    address._id = _id.value; // Inclure l'ID uniquement en mode mise à jour
    userStore.updateAddress(address);
  } else {
    userStore.addAddress(address);
  }
  closeModal();
};
</script>

<template>
  <teleport to="body">
    <div class="modal-overlay">
      <div class="modal-container">
        <div class="modal-header">
          <button @click="closeModal" class="close-modal">&times;</button>
        </div>
        <div class="modal-content">
          <div class="add-address-form">
            <div>
              <div class="form-group">
                <CustomInput
                  label="STREET NUMBER :"
                  type="street-number"
                  required
                  min-length="1"
                  v-model="doorNumber"
                />
              </div>
              <div class="form-group">
                <CustomInput label="STREET :" type="street" required min-length="4" v-model="street" />
              </div>
              <div class="form-group">
                <CustomInput label="CITY :" type="city" required min-length="4" v-model="city" />
              </div>
              <div class="form-group">
                <CustomInput label="COUNTRY :" type="country" required min-length="4" v-model="country" />
              </div>
              <div class="form-group">
                <CustomInput label="ZIP CODE :" type="zip-code" required min-length="5" v-model="zipcode" />
              </div>
              <button v-if="isUpdating" @click="saveAddress">UPDATE</button>
              <button v-else @click="saveAddress">SAVE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.add-address-form {
  width: 300px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  background-color: var(--dark-primary);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: rgb(159, 57, 74);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 90%;
  width: 500px;
}

ul {
  list-style-type: none;
}

.modal-header {
  background-color: var(--secondary);
  color: white;
  padding: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-modal {
  border: none;
  border-radius: 15px;
  font-size: 2rem;
  cursor: pointer;
  background-color: var(--dark-primary);
  padding-left: 3rem;
  padding-right: 3rem;
  color: white;
  margin-left: 1rem;
}

.close-modal:hover {
  background-color: var(--dark-primary);
}

.modal-content {
  padding: 50px;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}
</style>
