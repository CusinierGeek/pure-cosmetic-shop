<script setup lang="ts">
import LoginModal from "@/components/Authentification/LoginModal.vue";
import { signIn } from "@/shared/services/auth.service";
import { router } from "@/router";

const login = (state: any) => {
  const result = signIn(state);

  result.then(() => {
    router.push({ name: "Home" });
  });
};
</script>

<template>
  <LoginModal @sign-in="login" class="login" />
</template>

<style scoped>
.login {
  height: 50vh;
  min-height: 400px;
  max-width: 600px;
}
</style>
