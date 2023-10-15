<script setup lang="ts">
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
const router = useRouter();
const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <div id="btn_group">
    <button @click="goBack" type="button"><Icon icon="ep:back" class="icon" /></button>
  </div>
</template>

<style scoped>
.icon {
  padding-top: 0.5rem;
}

#btn_group {
  z-index: 100;
  width: 4rem;
  height: 3rem;
}

#btn_group button {
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  outline: none;
  font-size: 2rem;
}
</style>
