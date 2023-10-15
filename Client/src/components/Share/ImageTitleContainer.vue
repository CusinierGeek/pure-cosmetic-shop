<script setup lang="ts">
import { readonly } from "vue";
//readonly value
const props = defineProps({
  imgUrl: {
    type: readonly(String),
    required: true,
  },
  title: {
    type: readonly(String),
    required: true,
  },

  description: {
    type: readonly(String),
    required: true,
  },
});
</script>
<template>
  <div class="img-title-container">
    <div class="img-container">
      <img :src="props.imgUrl" alt="product image" />
    </div>
    <div class="h2-container">
      <h2 class="share-title">{{ props.title }}</h2>
      <p v-if="props.title.length < 70" class="share-content">
        {{ props.description.length > 100 ? props.description.substring(0, 100) + "..." : props.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.img-title-container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
.img-container {
  height: 100%;
}

.img-container img {
  width: 10vw;
  height: 10vw;
  box-shadow: 0 0 10px #333;
}

.share-title {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
</style>
