<script setup lang="ts">
import { ref,onBeforeUnmount,onMounted } from "vue";

const selectedValue = ref(10);
const options = ref([
  { value: 10, label: "10 items per page" },
  { value: 25, label: "25 items per page" },
  { value: 40, label: "40 items per page" },
]);
const isOpen = ref(false);
const emit = defineEmits(["update:itemsPerPage"]);
const handleChange = (value: number) => {
  selectedValue.value = value;
  emit("update:itemsPerPage", value);
  isOpen.value = false;
};
const handleOutsideClick = (event: MouseEvent) => {
  if (isOpen.value) {
    const target = event.target as HTMLElement;
    if (!target.closest(".select-wrapper")) {
      isOpen.value = false;
    }
  }
};
onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutsideClick);
});
</script>

<template>
  <div class="select-wrapper" @click="isOpen = !isOpen">
    <div class="selected-option">
      {{ selectedValue }} ITEMS PER PAGE
      <div class="arrow-down" :class="{ 'arrow-up': isOpen }"></div>
    </div>
    <transition name="fade">
      <div class="options" v-if="isOpen">
        <div class="option" v-for="option in options" :key="option.value" @click.stop="handleChange(option.value)">
          {{ option.label }}
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.options {
  position: absolute;
  background-color: #f5f5f5;
  width: 140px;
  text-align: center;
  border-radius: 10px;
  right: 0;
  top:  calc(100% + 1px);
  box-shadow: 0px 2px 4px rgba(224, 223, 223, 0.1);
  z-index: 4; /* Assurez-vous que les options sont au-dessus du reste du contenu */
}


.option {
  padding: 10px;
  cursor: pointer;
}

.option:hover {
  background-color: var(--primary);
  color: black;
}
.arrow-down {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
  display: inline-block;
  margin-left: 10px;
}
.arrow-up {
  transform: rotate(180deg);
}
.select-wrapper {
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 10%;
}
.selected-option {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #f5f5f5;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .select-wrapper {
    width: 65%;
    margin-top: 0.1vh;
    margin-left: 20.1vh;
    z-index: 1;
    width: 14rem;
  }

  .options {
    width: 59.5%;
    right: 9px;
  }

  .options:hover {
    background-color: var(--primary);
  }
}
</style>
