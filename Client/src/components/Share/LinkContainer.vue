<script setup lang="ts">
import { reactive } from "vue";
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
});

const state = reactive({
  isCopied: false,
  copyStatus: "Copy",
  backgroundColor: "var(--primary)",
});

const copyToClipboard = async () => {
  navigator.clipboard.writeText(props.link);

  await new Promise((resolve) => {
    state.isCopied = true;
    state.copyStatus = "Copied";
    state.backgroundColor = "background-color: var(--dark-primary)";

    setTimeout(() => {
      state.isCopied = false;
      state.copyStatus = "Copy";
      state.backgroundColor = "background-color: var(--primary)";
      resolve(true);
    }, 1000);
  });
};
</script>

<template>
  <div class="link-container">
    <!-- <input class="link-input" type="text" :value="props.link"> -->
    <a :href="props.link">{{ props.link }}</a>
    <button class="copy-btn" @click="copyToClipboard" :style="state.backgroundColor">{{ state.copyStatus }}</button>
  </div>
</template>

<style scoped>
.link-container {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 50%;
}

.link-input {
  width: 100%;
  height: 2rem;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 0.5rem;
}

.copy-btn {
  position: absolute;
  float: right;
  right: 0;
  width: 15%;
  height: 1.5rem;
  border: 1px solid #333;
  border-radius: 1.5rem;
  background-color: var(--primary);
  color: #fff;
  transform: translate(-10%, 20%);
  cursor: pointer;
}
</style>
