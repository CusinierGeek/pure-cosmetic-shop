<script setup lang="ts">
import { ref, computed } from "vue";
const props = defineProps({
  label: String,
  type: String,
  placeholder: String,
  modelValue: {
    type: String,
    required: true,
  },
  name: String,
  id: String,
  required: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  autocomplete: String,
  minLength: {
    type: String,
    default: "0",
  },
  maxLength: {
    type: Number,
    default: 0,
  },
});

const data = ref(props.modelValue);
const hasFocus = ref(false);
const isWriting = computed(() => hasFocus.value && data.value.length);
const touched = ref(false);
const hasError = computed(() => !hasFocus.value && touched.value && data.value.length < Number(props.minLength));
const isValid = computed(() => !hasFocus.value && touched.value && !hasError.value);

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  emit("update:modelValue", inputElement.value);
};
</script>

<template>
  <div class="form-container">
    <label>{{ label }}</label>
    <input
      v-if="type === 'credit-card'"
      v-model="data"
      @input="updateValue"
      @focus="(hasFocus = true), (touched = true)"
      @blur="hasFocus = false"
      :class="{ isWriting, hasError, isValid }"
      :name="name"
      :id="id"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
      placeholder="XXXX XXXX XXXX XXXX"
    />
    <input
      v-else
      :type="type"
      v-model="data"
      @input="updateValue"
      @focus="(hasFocus = true), (touched = true)"
      @blur="hasFocus = false"
      :class="{ isWriting, hasError, isValid }"
      :placeholder="placeholder"
      :name="name"
      :id="id"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
    />
    <p class="error" v-if="hasError && type === 'email'">Please enter a valid email address</p>
    <p class="error" v-if="hasError && type === 'password'">
      Password must be at least {{ minLength }} characters long
    </p>
    <p class="error" v-if="hasError && type === 'text'">Please enter at least {{ minLength }} characters</p>
    <p class="error" v-if="hasError && type === 'credit-card'">Please enter a valid credit card number</p>
  </div>
</template>

<style scoped>
input {
  border: 2px solid var(--primary) !important;
}
.isWriting {
  border-color: var(--progress) !important;
}
.hasError {
  border-color: var(--danger) !important;
}
.isValid {
  border-color: var(--success) !important;
}

.error {
  position: absolute;
  color: var(--danger);
  margin-top: 0.3rem;
  font-size: 0.8rem;
  font-weight: bold;
  bottom: 0;
  left: 25px;
  animation: shake 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-0.5rem);
  }
  50% {
    transform: translateX(0.5rem);
  }
  75% {
    transform: translateX(-0.5rem);
  }
  100% {
    transform: translateX(0);
  }
}

.form-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

label {
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;
}


</style>
