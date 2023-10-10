import { P as ProductsList } from "./ProductsList-0559ee77.js";
import { d as defineComponent, j as reactive, o as openBlock, c as createElementBlock, f as createBaseVNode, F as Fragment, k as renderList, n as normalizeClass, l as withDirectives, v as vModelRadio, g as createTextVNode, p as pushScopeId, i as popScopeId, _ as _export_sfc, m as watch, r as ref, q as vShow, s as vModelCheckbox, t as toDisplayString, u as useProducts, a as computed, h as unref, S as SortAttributes, x as SortOrder, e as createVNode, y as createCommentVNode, I as Icon } from "./index-ce4a082d.js";
import "./SalesRibbon-bceaca1d.js";
const _withScopeId$5 = (n) => (pushScopeId("data-v-5ae8e8ca"), n = n(), popScopeId(), n);
const _hoisted_1$6 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "rating-title" }, [
  /* @__PURE__ */ createBaseVNode("h2", null, "RATING")
], -1));
const _hoisted_2$5 = { class: "star-rating" };
const _hoisted_3$4 = ["onClick", "onMouseover"];
const _hoisted_4$3 = ["value", "name", "onUpdate:modelValue", "disabled"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "RatingFilter",
  props: {
    name: String,
    value: Number,
    id: String,
    disabled: Boolean,
    required: Boolean
  },
  emits: ["update:rating"],
  setup(__props, { emit }) {
    const props = __props;
    const ratings = [1, 2, 3, 4, 5];
    const state = reactive({
      rating: props.value || 1,
      // This will be used for the hover effect
      selectedRating: props.value || 1
      // This will keep the user's selected rating
    });
    const updateRating = (newRating) => {
      if (props.disabled) {
        return;
      }
      state.selectedRating = newRating;
    };
    const starOver = (index) => {
      if (props.disabled) {
        return;
      }
      state.rating = index;
    };
    const starOut = () => {
      if (props.disabled) {
        return;
      }
      state.rating = state.selectedRating;
    };
    const set = (newRating) => {
      updateRating(newRating);
      emit("update:rating", newRating);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$6,
        createBaseVNode("div", _hoisted_2$5, [
          (openBlock(), createElementBlock(Fragment, null, renderList(ratings, (rating) => {
            return createBaseVNode("label", {
              class: normalizeClass(["star-rating__star", { "is-selected": state.rating >= rating && state.rating != null, "is-disabled": __props.disabled }]),
              key: rating,
              onClick: ($event) => set(rating),
              onMouseover: ($event) => starOver(rating),
              onMouseout: starOut
            }, [
              withDirectives(createBaseVNode("input", {
                class: "star-rating star-rating__checkbox",
                type: "radio",
                value: rating,
                name: __props.name,
                "onUpdate:modelValue": ($event) => state.rating = $event,
                disabled: __props.disabled
              }, null, 8, _hoisted_4$3), [
                [vModelRadio, state.rating]
              ]),
              createTextVNode("★ ")
            ], 42, _hoisted_3$4);
          }), 64))
        ])
      ], 64);
    };
  }
});
const RatingFilter_vue_vue_type_style_index_0_scoped_5ae8e8ca_lang = "";
const RatingFilter = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5ae8e8ca"]]);
const _withScopeId$4 = (n) => (pushScopeId("data-v-e55a523b"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "list-categories" };
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "list-categories__title" }, [
  /* @__PURE__ */ createBaseVNode("h2", null, "CATEGORIES")
], -1));
const _hoisted_3$3 = { class: "list-categories__list" };
const _hoisted_4$2 = ["value", "id"];
const _hoisted_5$2 = ["for"];
const _hoisted_6$2 = { key: 0 };
const _hoisted_7$2 = { key: 1 };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CategoryFilter",
  props: {
    listCategories: {
      type: Array,
      required: true
    }
  },
  emits: ["listCategoriesSelected"],
  setup(__props, { emit }) {
    const props = __props;
    const state = reactive({
      listCategoriesSelected: []
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        _hoisted_2$4,
        createBaseVNode("div", _hoisted_3$3, [
          createBaseVNode("ul", {
            class: normalizeClass(["categories-list", { expanded: isExpanded.value }])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.listCategories, (category, index) => {
              return withDirectives((openBlock(), createElementBlock("li", { key: index }, [
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  value: category,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.listCategoriesSelected = $event),
                  id: `category-${index}`
                }, null, 8, _hoisted_4$2), [
                  [vModelCheckbox, state.listCategoriesSelected]
                ]),
                createBaseVNode("label", {
                  for: `category-${index}`
                }, toDisplayString(category), 9, _hoisted_5$2)
              ])), [
                [vShow, isExpanded.value || index < 5]
              ]);
            }), 128))
          ], 2),
          createBaseVNode("button", {
            class: "expand-button",
            onClick: toggleExpansion
          }, [
            !isExpanded.value ? (openBlock(), createElementBlock("span", _hoisted_6$2, "SHOW MORE")) : (openBlock(), createElementBlock("span", _hoisted_7$2, "SHOW LESS"))
          ])
        ])
      ]);
    };
  }
});
const CategoryFilter_vue_vue_type_style_index_0_scoped_e55a523b_lang = "";
const CategoryFilter = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e55a523b"]]);
const _withScopeId$3 = (n) => (pushScopeId("data-v-aa8df32c"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "wrapper" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("h2", null, "PRICES", -1));
const _hoisted_3$2 = { class: "filter-price" };
const _hoisted_4$1 = { class: "price-field" };
const _hoisted_5$1 = { class: "slider-container" };
const _hoisted_6$1 = ["min", "max", "value"];
const _hoisted_7$1 = { class: "slider-value-min" };
const _hoisted_8 = { class: "slider-container" };
const _hoisted_9 = ["min", "max", "value"];
const _hoisted_10 = { class: "slider-value-max" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PriceFilter",
  props: {
    minimum: {
      type: Number,
      required: true,
      default: 0
    },
    maximum: {
      type: Number,
      required: true,
      default: 100
    }
  },
  emits: ["updatePriceupper", "updatePricelower"],
  setup(__props, { emit }) {
    const props = __props;
    const state = reactive({
      min: props.minimum,
      max: props.maximum,
      lower: props.minimum,
      upper: props.maximum
    });
    const blockLower = () => {
      if (state.lower > state.upper)
        state.lower = state.upper;
    };
    const blockUpper = () => {
      if (state.upper < state.lower)
        state.upper = state.lower;
    };
    watch(
      () => state.lower,
      (value) => emit("updatePricelower", value)
    );
    watch(
      () => state.upper,
      (value) => emit("updatePriceupper", value)
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        _hoisted_2$3,
        createBaseVNode("fieldset", _hoisted_3$2, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("input", {
                type: "range",
                min: state.min,
                max: state.max,
                value: state.lower,
                onInput: _cache[0] || (_cache[0] = ($event) => {
                  state.lower = parseInt($event.target.value);
                  blockLower();
                })
              }, null, 40, _hoisted_6$1),
              createBaseVNode("div", _hoisted_7$1, toDisplayString(state.lower), 1)
            ]),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("input", {
                type: "range",
                min: state.min,
                max: state.max,
                value: state.upper,
                onInput: _cache[1] || (_cache[1] = ($event) => {
                  state.upper = parseInt($event.target.value);
                  blockUpper();
                })
              }, null, 40, _hoisted_9),
              createBaseVNode("div", _hoisted_10, toDisplayString(state.upper), 1)
            ])
          ])
        ])
      ]);
    };
  }
});
const PriceFilter_vue_vue_type_style_index_0_scoped_aa8df32c_lang = "";
const PriceFilter = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-aa8df32c"]]);
const _withScopeId$2 = (n) => (pushScopeId("data-v-5e4cf383"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "list-brands" };
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "list-brands__title" }, [
  /* @__PURE__ */ createBaseVNode("h2", null, "BRANDS")
], -1));
const _hoisted_3$1 = { class: "list-brands__list" };
const _hoisted_4 = ["value", "id"];
const _hoisted_5 = ["for"];
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { key: 1 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BrandFilter",
  props: {
    listBrands: {
      type: Array,
      required: true
    }
  },
  emits: ["listBrandsSelected"],
  setup(__props, { emit }) {
    const props = __props;
    const state = reactive({
      listBrandsSelected: []
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        _hoisted_2$2,
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("ul", {
            class: normalizeClass(["brands-list", { expanded: isExpanded.value }])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.listBrands, (brand, index) => {
              return withDirectives((openBlock(), createElementBlock("li", { key: index }, [
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  value: brand,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.listBrandsSelected = $event),
                  id: `brand-${index}`
                }, null, 8, _hoisted_4), [
                  [vModelCheckbox, state.listBrandsSelected]
                ]),
                createBaseVNode("label", {
                  for: `brand-${index}`
                }, toDisplayString(brand), 9, _hoisted_5)
              ])), [
                [vShow, isExpanded.value || index < 5]
              ]);
            }), 128))
          ], 2),
          createBaseVNode("button", {
            class: "expand-button",
            onClick: toggleExpansion
          }, [
            !isExpanded.value ? (openBlock(), createElementBlock("span", _hoisted_6, "SHOW MORE")) : (openBlock(), createElementBlock("span", _hoisted_7, "SHOW LESS"))
          ])
        ])
      ]);
    };
  }
});
const BrandFilter_vue_vue_type_style_index_0_scoped_5e4cf383_lang = "";
const BrandFilter = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5e4cf383"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-089d61de"), n = n(), popScopeId(), n);
const _hoisted_1$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "sort-container" }, null, -1));
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", null, "SORT BY :", -1));
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SortToggleBtn",
  setup(__props) {
    const productsStore = useProducts();
    const sortAttribute = computed(() => productsStore.sortAttribute);
    const sortOrder = computed(() => productsStore.sortOrder);
    const toggleSortAttribute = (attribute) => {
      productsStore.setSortAttribute(attribute);
    };
    const toggleSortOrder = () => {
      productsStore.toggleSortOrder();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$2,
        _hoisted_2$1,
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = ($event) => toggleSortAttribute(unref(SortAttributes).RATING)),
          class: normalizeClass([{ active: sortAttribute.value === unref(SortAttributes).RATING }, "sort-button"])
        }, " RATING ", 2),
        createBaseVNode("button", {
          onClick: _cache[1] || (_cache[1] = ($event) => toggleSortAttribute(unref(SortAttributes).PRICE)),
          class: normalizeClass([{ active: sortAttribute.value === unref(SortAttributes).PRICE }, "sort-button"])
        }, " PRICE ", 2),
        createBaseVNode("button", {
          onClick: toggleSortOrder,
          class: normalizeClass([{ active: sortOrder.value === unref(SortOrder).DESC }, "sort-button"])
        }, toDisplayString(sortOrder.value === unref(SortOrder).ASC ? "ASCENDING" : "DESCENDING"), 3)
      ], 64);
    };
  }
});
const SortToggleBtn_vue_vue_type_style_index_0_scoped_089d61de_lang = "";
const SortToggleBtn = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-089d61de"]]);
const _hoisted_1$1 = { class: "filters" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Filter",
  setup(__props) {
    const productsStore = useProducts();
    const listCategories = ref([]);
    const listBrands = ref([]);
    productsStore.getCategoryNames.then((categories) => {
      listCategories.value = categories;
    });
    productsStore.getBrandNames.then((brands) => {
      listBrands.value = brands;
    });
    const updateRatingFilter = (newRating) => {
      productsStore.setFileteredRating(newRating);
    };
    const updateCategoryFilter = (newCategory) => {
      if (newCategory.length === 0) {
        productsStore.setFilterCategories(listCategories.value);
        return;
      }
      productsStore.setFilterCategories(newCategory);
    };
    const updateBrandFilter = (newBrand) => {
      if (newBrand.length === 0) {
        productsStore.setFilterBrands(listBrands.value);
        return;
      }
      productsStore.setFilterBrands(newBrand);
    };
    const updatePriceUpFilter = (newPrice) => {
      productsStore.setFilterPriceUpper(newPrice);
    };
    const updatePriceDownFilter = (newPrice) => {
      productsStore.setFilterPriceLower(newPrice);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(SortToggleBtn),
        createVNode(RatingFilter, { "onUpdate:rating": updateRatingFilter }),
        createVNode(CategoryFilter, {
          onListCategoriesSelected: updateCategoryFilter,
          "list-categories": listCategories.value
        }, null, 8, ["list-categories"]),
        createVNode(PriceFilter, {
          onUpdatePricelower: updatePriceDownFilter,
          onUpdatePriceupper: updatePriceUpFilter,
          minimum: 0,
          maximum: 100
        }),
        createVNode(BrandFilter, {
          onListBrandsSelected: updateBrandFilter,
          "list-brands": listBrands.value
        }, null, 8, ["list-brands"])
      ]);
    };
  }
});
const Filter_vue_vue_type_style_index_0_scoped_e5ad028d_lang = "";
const Filter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e5ad028d"]]);
const _withScopeId = (n) => (pushScopeId("data-v-ff276392"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "shipping" }, "FREE SHIPPING | WITH ORDERS OVER $150", -1));
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { class: "products-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Products",
  setup(__props) {
    const productsStore = useProducts();
    const filtersOpen = ref(false);
    const products = computed(() => {
      return productsStore.products;
    });
    const toggleFilter = () => {
      filtersOpen.value = !filtersOpen.value;
    };
    const closeFilter = () => {
      filtersOpen.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createBaseVNode("div", _hoisted_2, [
          !filtersOpen.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "filter-toggle",
            onClick: toggleFilter
          }, [
            createVNode(unref(Icon), {
              icon: "carbon:sort-descending",
              width: "30",
              height: "30"
            })
          ])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(["filter", { open: filtersOpen.value }])
          }, [
            createBaseVNode("button", {
              class: "close-btn",
              onClick: closeFilter
            }, "CONFIRM"),
            createVNode(Filter)
          ], 2),
          createBaseVNode("div", _hoisted_3, [
            createVNode(ProductsList, {
              sales: true,
              products: products.value
            }, null, 8, ["products"])
          ])
        ])
      ], 64);
    };
  }
});
const Products_vue_vue_type_style_index_0_scoped_ff276392_lang = "";
const Products = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ff276392"]]);
export {
  Products as default
};
