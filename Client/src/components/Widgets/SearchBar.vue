<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, watch } from "vue";
import { useProducts } from "@/shared/stores";
import { useRouter } from "vue-router";

const router = useRouter();
const productsStore = useProducts();
const query = ref("");

function debounce<T extends any[]>(fn: (...args: T) => void, delay: number) {
  let timeoutID: ReturnType<typeof setTimeout> | null = null;

  return function (...args: T) {
    // Use rest parameters here

    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      fn(...args); // Spread the arguments here
      timeoutID = null;
    }, delay);
  };
}

const updateSearchTerm = debounce((newQuery: string) => {
  productsStore.setSearchTerm(newQuery);
}, 500);

watch(query, (newQuery) => {
  updateSearchTerm(newQuery);
});

const redirect = () => {
  router.push("/products");
};
</script>

<template>
  <div class="icon">
    <a>
      <Icon icon="material-symbols:search" width="24" height="24" />
    </a>
  </div>
  <input class="searchBar" type="text" v-model="query" @keyup.enter="redirect" />
</template>

<style scoped>
.searchBar {
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid var(--font-secondary);
  padding: 5px;
  font-family: var(--primary-font);
  color: var(--font-secondary);
  width: 150px;
  transition: width 0.3s ease-in-out;
}

.searchBar:focus {
  width: 200px;
}

.icon {
  margin-left: 40px;
  padding-right: 5px;
  color: var(--font-secondary);
}

.searchBar {
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid var(--font-secondary);
  padding: 5px;
  font-family: var(--primary-font);
  color: var(--font-secondary);
  width: 150px;
  transition: width 0.3s ease-in-out;
}

.searchBar:focus {
  width: 200px;
}

.icon {
  margin-left: 40px;
  padding-right: 5px;
  color: var(--font-secondary);
}
</style>
