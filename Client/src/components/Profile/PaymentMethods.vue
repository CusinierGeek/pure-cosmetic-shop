<script setup lang="ts">
import { ref } from "vue";
import { reactive } from "vue";
import { Icon } from "@iconify/vue";
import { useUser } from "@/shared/stores";
import { UserInterface } from "@/shared/interfaces";
import CustomInput from "../Widgets/CustomInput.vue";

const userStore = useUser();
const currentUser = userStore.GetUser as UserInterface;

const formData = reactive({
  cardType: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
});

const showPayModal = ref(false);
const emit = defineEmits(["close-modal"]);
const selectedCardType = ref("");

const selectCardType = (type: string) => {
  selectedCardType.value = type;
  formData.cardType = type;
};

const openModal = () => {
  showPayModal.value = true;
};
const closeModal = () => {
  showPayModal.value = false;
  emit("close-modal");
};

const savePaymentMethod = () => {
  const newCard = {
    cardType: formData.cardType,
    cardNumber: formData.cardNumber,
    expiryDate: formData.expiryDate,
    cvv: formData.cvv,
  };

  currentUser.cards.push(newCard);
  userStore.addCard(newCard);

  formData.cardType = "";
  formData.cardNumber = "";
  formData.expiryDate = "";
  formData.cvv = "";

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
          <div class="add-card-form">
            <form>
              <div class="form-group">
                <label for="cardType" class="card-type-label">CARD TYPE :</label>
                <div class="card-icons">
                  <Icon
                    :class="{ selected: selectedCardType === 'Visa' }"
                    class="visa"
                    icon="logos:visa"
                    width="40"
                    height="40"
                    @click="selectCardType('Visa')"
                  />
                  <Icon
                    :class="{ selected: selectedCardType === 'MasterCard' }"
                    class="mastercard"
                    icon="logos:mastercard"
                    width="40"
                    height="40"
                    @click="selectCardType('MasterCard')"
                  />
                  <Icon
                    :class="{ selected: selectedCardType === 'PayPal' }"
                    class="paypal"
                    icon="logos:paypal"
                    width="30"
                    height="30"
                    @click="selectCardType('PayPal')"
                  />
                </div>
              </div>
              <div class="form-group">
                <CustomInput
                  label="CARD NUMBER :"
                  type="credit-card"
                  required
                  min-length="16"
                  v-model="formData.cardNumber"
                />
              </div>
              <div class="form-group">
                <CustomInput
                  label="EXPIRY DATE :"
                  type="expiry-date"
                  required
                  min-length="8"
                  v-model="formData.expiryDate"
                  placeholder="DD/MM/YY"
                />
              </div>
              <div class="form-group">
                <CustomInput
                  label="CVV :"
                  type="cvv"
                  required
                  min-length="3"
                  v-model="formData.cvv"
                  placeholder="XXX"
                />
              </div>
              <button @click="savePaymentMethod" type="submit">ADD CARD</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.selected {
  filter: grayscale(100%);
}

.card-type-label {
  display: inline-block;
  vertical-align: middle;
}

.card-icons {
  display: inline-block;
  vertical-align: middle;
  padding-left: 1rem;
}

.visa,
.mastercard,
.paypal {
  margin-right: 1.5rem;
}

.selected-card {
  color: var(--dark-primary);
  letter-spacing: 0.3rem;
  font-weight: bolder;
}

.add-card-form {
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
