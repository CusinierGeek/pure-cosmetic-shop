<template>
  <div class="star">
    <svg width="50px" height="50px" viewBox="0 0 32 32">
      <path
        :fill="fillColor"
        d="M16 1.13l1.31 4.03h4.24l-3.43 2.49 1.31 4.03-3.43-2.5-3.43 2.5 1.31-4.03-3.43-2.49h4.24z"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    fillColor: String,
  },
};
</script>

<style scoped>
.star {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
