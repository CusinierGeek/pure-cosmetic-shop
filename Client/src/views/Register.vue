<script setup lang="ts">
import RegisterModal from "@/components/Authentification/RegisterModal.vue";
import { router } from "@/router";
import { createUser } from "@/shared/services";

const SignUp = (state: any) => {
  const result = createUser(state);

  result.then(() => {
    router.push("/login");
  });
};
</script>

<template>
  <RegisterModal @register="SignUp" class="register" />
</template>

<style scoped>

  .register {
   
    min-height: 400px;
    max-width: 600px;
  }

</style>
