<script setup lang="ts">
import { computed, watch } from "vue";
import { Icon } from "@iconify/vue";
//emit qui enverra la current page au parent
const emit = defineEmits(["pagechanged"]);
const props = defineProps({
  maxVisibleButtons: {
    //nombre de page max qui sera afficher
    type: Number,
    required: false,
    default: 5,
  },
  totalPages: {
    //nombre de page total
    type: Number,
    required: false,
  },
  total: {
    //nombre de produit total
    type: Number,
    required: true,
  },
  perPage: {
    //nombre de produit par page
    type: Number,
    required: true,
    default: 10,
  },
  currentPage: {
    //page actuelle
    type: Number,
    required: true,
    default: 1,
  },
});
//watch qui permet de changer la current page pour la derniere page si le nombre de page total est inferieur a la current page
watch(
  () => props.perPage,
  () => {
    if (props.currentPage > totalPages.value) {
      emit("pagechanged", totalPages.value);
    }
  }
);

// calcul le nombre de page total en fonction du nombre de produit et du nombre de produit par page
const totalPages = computed(() => {
  return Math.ceil(props.total / props.perPage);
});

//set la premiere page(numero qui commencera la liste des pages en fonction de la current page)
const startPage = computed(() => {
  if (props.currentPage === 1) {
    return 1;
  }
  // si la current page est la derniere on calcule un nombre de page qui sera afficher avant
  else if (props.currentPage === totalPages.value) {
    return totalPages.value - props.maxVisibleButtons + 1;
  }
  //sinon on commence une page avant la current page
  else return props.currentPage - 1;
});
// on returne la derniere page qui serait afficher en fonction de la start page
// ou la endpage doit etre inferieur ou egale au nombre de page total
const endPage = computed(() => {
  return Math.min(startPage.value + props.maxVisibleButtons - 1, totalPages.value);
});
//on creer un tableau avec le nombre de page(range) qui sera afficher
const pages = computed(() => {
  const range = [];

  for (let i = startPage.value; i <= endPage.value; i += 1) {
    range.push({
      name: i,
      isDisabled: i === props.currentPage,
    });
  }

  return range;
});
//permet de désactiver le bouton debut et précendent si on est sur la premiere page
const isInFirstPage = computed(() => {
  return props.currentPage === 1;
});

//permet de désactiver le bouton suivant et fin si on est sur la derniere page via le :disabled u bouton
const isInLastPage = computed(() => {
  return props.currentPage === totalPages.value;
});

//fonction qui permet de modifier la current page en fonction du bouton cliquer et de L'emit au parent
const onClickFirstPage = () => {
  emit("pagechanged", 1);
};

const onClickPreviousPage = () => {
  emit("pagechanged", props.currentPage - 1);
};

const onClickPage = (page: number) => {
  emit("pagechanged", page);
};

const onClickNextPage = () => {
  emit("pagechanged", props.currentPage + 1);
};

const onClickLastPage = () => {
  emit("pagechanged", totalPages.value);
};
const isPageActive = (page: number) => {
  return props.currentPage === page;
};
</script>

<template>
  <div class="pagination-container">
    <ul class="pagination">
      <li class="pagination-item">
        <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage" aria-label="Allez a la premiere page">
          <Icon class="icon" icon="carbon:page-first" width="24" height="24" />
        </button>
      </li>

      <li class="pagination-item">
        <button
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
          aria-label="Allez à la page précédente"
        >
          <Icon class="icon" icon="carbon:previous-filled" width="24" height="24" />
        </button>
      </li>

      <li v-for="page in pages" class="pagination-item">
        <button
          class="pagination-item-number"
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="{ active: isPageActive(page.name) }"
          :aria-label="`Allez a la page ${page.name}`"
        >
          {{ page.name }}
        </button>
      </li>

      <li class="pagination-item">
        <button type="button" @click="onClickNextPage" :disabled="isInLastPage" aria-label="Allez a la page suivante">
          <Icon class="icon" icon="carbon:next-filled" width="24" height="24" />
        </button>
      </li>

      <li class="pagination-item">
        <button type="button" @click="onClickLastPage" :disabled="isInLastPage" aria-label="Allez a la derniere page">
          <Icon class="icon" icon="carbon:page-last" width="24" height="24" />
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.pagination {
  list-style: none;
  display: flex;
  gap: 10px;
}

.pagination-item {
  display: flex;
}

.pagination-item button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
}

.pagination-item-number {
  color: var(--font-primary);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination-item-number.active {
  border: 1px solid var(--dark-primary);
}

.pagination-item button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.icon {
  color: var(--dark-primary);
}
</style>
