<script setup lang="ts">
import { reactive, ref, watch } from "vue";

const props = defineProps({
  listCategories: {
    type: Array as () => Array<string>,
    required: true,
  },
});

const emit = defineEmits(["listCategoriesSelected"]);

const state = reactive({
  listCategoriesSelected: [] as string[],
});

watch(
  () => state.listCategoriesSelected,
  (listCategoriesSelected) => {
    emit("listCategoriesSelected", listCategoriesSelected);
  }
);
const isExpanded = ref(false);

const toggleExpansion = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div class="list-categories">
    <div class="list-categories__title">
      <h2>CATEGORIES</h2>
    </div>
    <div class="list-categories__list">
      <ul class="categories-list" :class="{ expanded: isExpanded }">
        <li v-for="(category, index) in props.listCategories" :key="index" v-show="isExpanded || index < 5">
          <input type="checkbox" :value="category" v-model="state.listCategoriesSelected" :id="`category-${index}`" />
          <label :for="`category-${index}`">{{ category }}</label>
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
.categories-list {
  max-height: 150px;
  overflow-y: hidden;
  transition: max-height 0.3s ease;
}

.categories-list.expanded {
  max-height: none;
}

h2 {
  margin-top: 10px;
}

.expand-button {
  display: block;
  margin-top: 10px;
  cursor: pointer;
}

.list-categories {
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px;
}

.list-categories__title {
  text-align: start;
}

.list-categories__list {
  margin-top: 10px;
}

.list-categories__list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-categories__list ul li {
  margin-bottom: 5px;
}

.list-categories__list ul li input[type="checkbox"] {
  display: none;
}

.list-categories__list ul li label {
  cursor: pointer;
}

.list-categories__list ul li label:hover {
  text-decoration: underline;
}

.list-categories__list ul li label::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 1px solid #ccc;
  border-radius: 2px;
  margin-right: 5px;
  vertical-align: middle;
}

.list-categories__list ul li input[type="checkbox"]:checked + label::before {
  background-color: #ccc;
}

.list-categories__list ul li input[type="checkbox"]:checked + label:hover {
  text-decoration: none;
}
</style>
