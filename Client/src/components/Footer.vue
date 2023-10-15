<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="footer-container">
    <div>123 Wall Street, NY</div>
    <div class="follow">FOLLOW US</div>
    <div class="footer-social-network">
      <a href="#!" class="">
        <Icon icon="mdi:facebook" width="24" height="24" />
      </a>
      <a href="#!" class="">
        <Icon icon="mdi:twitter" width="24" height="24" />
      </a>
      <a href="#!" class="">
        <Icon icon="carbon:logo-instagram" width="24" height="24" />
      </a>
      <a href="#!" class="">
        <Icon icon="carbon:logo-linkedin" width="24" height="24" />
      </a>
      <a href="#!" class="">
        <Icon icon="carbon:logo-github" width="24" height="24" />
      </a>
    </div>

    <div class="footer-copyright">©2023 THE BUGGER KINGS</div>
  </div>
</template>

<style scoped>
.footer-container {
  width: 100%;
  background-color: var(--primary);
  color: black;
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  bottom: 0;
  overflow: hidden;
  min-height: 7rem;
}

.footer-social-network {
  display: flex;
  gap: 2rem;
}

.footer-social-network a {
  color: var(--dark-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-social-network a:hover {
  color: black;
}

.footer-copyright {
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 0.5rem;
}
</style>
