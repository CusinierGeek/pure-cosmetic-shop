<script setup lang="ts">
import CustomInput from "@/components/Widgets/CustomInput.vue";
import { reactive } from "vue";
import { RouterLink } from "vue-router";

const emit = defineEmits(["register"]);

const state = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

const register = () => {
  emit("register", state);
};
</script>

<template>
  <div class="form-container">
    <h1>REGISTER</h1>
    <CustomInput
      class="input"
      label="FIRST NAME"
      type="text"
      placeholder="Enter your first name"
      name="first-name"
      id="first-name"
      required
      autocomplete="given-name"
      min-length="2"
      v-model="state.firstName"
    />

    <CustomInput
      class="input"
      label="LAST NAME"
      type="text"
      placeholder="Enter your last name"
      name="last-name"
      id="last-name"
      required
      autocomplete="family-name"
      min-length="2"
      v-model="state.lastName"
    />

    <CustomInput
      class="input"
      label="EMAIL"
      type="email"
      placeholder="Enter your email"
      name="email"
      id="email"
      required
      autocomplete="email"
      min-length="5"
      v-model="state.email"
    />

    <CustomInput
      class="input"
      label="PASSWORD"
      type="password"
      placeholder="Enter your password"
      name="password"
      id="password"
      required
      autocomplete="new-password"
      min-length="8"
      v-model="state.password"
    />
    <button @click="register">REGISTER</button>
    <RouterLink class="link" to="/login">Already have an account? Login</RouterLink>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f4f4f4;
  padding-bottom:  1rem;
  border-radius: 0.5rem;
  min-width: 300px;
  
}
.form-container .input {
  width: 80%;
  min-width: 200px;
  max-width: 500px;
  
}


.form-container h1 {
  letter-spacing: 0.5rem;
  align-self: center;
  color: var(--dark-primary);
}

.form-container button {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: var(--primary);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  max-width: 200px;
  width: 100%;
  margin: 1rem auto;
}

.form-container button:hover {
  background-color: var(--dark-primary);
}
.link {
  text-align: end;
  color: var(--primary);
  font-weight: bold;
  text-decoration: none;
  padding:  0.5rem;
}
.link:hover {
  text-decoration: underline;
}
</style>
