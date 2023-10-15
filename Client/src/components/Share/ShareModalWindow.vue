<script setup lang="ts">
import { ProductInterface } from "@/shared/interfaces";

import ImageTitleContainer from "./ImageTitleContainer.vue";
import LinkContainer from "./LinkContainer.vue";

const props = defineProps({
  product: {
    type: Object as () => ProductInterface,
    required: true,
  },

  isShown: {
    type: Boolean,
    required: true,
  },
});

const currentFullURL = window.location.href;

const emit = defineEmits(["toggleShare"]);

const exit = () => {
  emit("toggleShare");
};
</script>

<template>
  <div class="share-modal-window-container" v-if="props.isShown">
    <div class="share-modal-inner-part-container">
      <h2 class="share-text">Share</h2>
      <div class="share-exit" @click="exit"><i class="fas fa-times"></i></div>
      <div class="components-wrapper">
        <ImageTitleContainer
          class="img-title-container"
          :imgUrl="product?.image_link"
          :title="product?.name"
          :description="product?.description ? product?.description : ''"
        />
        <LinkContainer class="link-container" :link="currentFullURL" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.share-modal-window-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  z-index: 101;
}

.share-modal-inner-part-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 50%;
  background-color: #fff;
}
.share-text {
  position: absolute;
  top: 10%;
  left: 10%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
}

.share-exit {
  position: absolute;
  top: 2.5%;
  right: 2.5%;
  font-size: 2.5rem;
  cursor: pointer;
}

.share-exit:hover {
  color: #333;
}

.components-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 8rem;
  margin-left: 5rem;
  align-items: center;
}

.link-container {
  margin-top: 10%;
}

@media (min-width: 768px) {
}
</style>
