<script setup lang="ts">
import { reactive, ref, watch } from "vue";

const props = defineProps({
  listBrands: {
    type: Array as () => Array<string>,
    required: true,
  },
});

const emit = defineEmits(["listBrandsSelected"]);
const state = reactive({
  listBrandsSelected: [] as string[],
});
watch(
  () => state.listBrandsSelected,
  (listBrandsSelected) => {
    emit("listBrandsSelected", listBrandsSelected);
  }
);

const isExpanded = ref(false);

const toggleExpansion = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div class="list-brands">
    <div class="list-brands__title">
      <h2>BRANDS</h2>
    </div>
    <div class="list-brands__list">
      <ul class="brands-list" :class="{ expanded: isExpanded }">
        <li v-for="(brand, index) in props.listBrands" :key="index" v-show="isExpanded || index < 5">
          <input type="checkbox" :value="brand" v-model="state.listBrandsSelected" :id="`brand-${index}`" />
          <label :for="`brand-${index}`">{{ brand }}</label>
        </li>
      </ul>
      <button class="expand-button" @click="toggleExpansion">
        <span v-if="!isExpanded">SHOW MORE</span>
        <span v-else>SHOW LESS</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
li {
  list-style: none;
}

.brands-list {
  max-height: 150px;
  overflow-y: hidden;
  transition: max-height 0.3s ease;
}

.brands-list.expanded {
  max-height: none;
}

.expand-button {
  display: block;
  margin-top: 10px;
  cursor: pointer;
}

.list-brands {
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px;
}

.list-brands__list {
  margin-top: 10px;
}

.list-brands__list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-brands__list ul li {
  margin-bottom: 5px;
}

.list-brands__list ul li input[type="checkbox"] {
  display: none;
}

.list-brands__list ul li label {
  cursor: pointer;
}

.list-brands__list ul li label:hover {
  text-decoration: underline;
}

.list-brands__list ul li label::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 1px solid #ccc;
  border-radius: 2px;
  margin-right: 5px;
  vertical-align: middle;
}

.list-brands__list ul li input[type="checkbox"]:checked + label::before {
  background-color: #ccc;
}

.list-brands__list ul li input[type="checkbox"]:checked + label {
}

.list-brands__list ul li input[type="checkbox"]:checked + label:hover {
  text-decoration: none;
}
</style>
