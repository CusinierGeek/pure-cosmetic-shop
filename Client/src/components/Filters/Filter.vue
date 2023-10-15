<script setup lang="ts">
import RatingFilter from "./RatingFilter.vue";
import CategoryFilter from "./CategoryFilter.vue";
import PriceFilter from "./PriceFilter.vue";
import BrandFilter from "./BrandFilter.vue";
import { ref } from "vue";
import { useProducts } from "@/shared/stores";
import SortToggleBtn from "../Widgets/SortToggleBtn.vue";

const productsStore = useProducts();

const listCategories = ref<string[]>([]);
const listBrands = ref<string[]>([]);

productsStore.getCategoryNames.then((categories) => {
  listCategories.value = categories;
  
});

productsStore.getBrandNames.then((brands) => {
  listBrands.value = brands;
  
});

const updateRatingFilter = (newRating: number) => {
  productsStore.setFileteredRating(newRating);
};

const updateCategoryFilter = (newCategory: string[]) => {
  if (newCategory.length === 0) {
    productsStore.setFilterCategories(listCategories.value);
    return;
  }

  productsStore.setFilterCategories(newCategory);
};

const updateBrandFilter = (newBrand: string[]) => {
  if (newBrand.length === 0) {
    productsStore.setFilterBrands(listBrands.value);
    return;
  }
  productsStore.setFilterBrands(newBrand);
};

const updatePriceUpFilter = (newPrice: number) => {
  productsStore.setFilterPriceUpper(newPrice);
};

const updatePriceDownFilter = (newPrice: number) => {
  productsStore.setFilterPriceLower(newPrice);
};
</script>

<template>
  <div class="filters">
    <SortToggleBtn />
    <RatingFilter @update:rating="updateRatingFilter" />
    <CategoryFilter @list-categories-selected="updateCategoryFilter" :list-categories="listCategories" />
    <PriceFilter
      @update-pricelower="updatePriceDownFilter"
      @update-priceupper="updatePriceUpFilter"
      :minimum="0"
      :maximum="100"
    />
    <BrandFilter @list-brands-selected="updateBrandFilter" :list-brands="listBrands" />
  </div>
</template>

<style scoped>
.filters {
  width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 100;
}

.ToggleBtn {
  margin-top: 4vh;
}
</style>
