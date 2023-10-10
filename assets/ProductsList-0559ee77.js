import { d as defineComponent, m as watch, a as computed, o as openBlock, c as createElementBlock, f as createBaseVNode, e as createVNode, h as unref, F as Fragment, k as renderList, I as Icon, n as normalizeClass, t as toDisplayString, _ as _export_sfc, r as ref, z as onMounted, A as onBeforeUnmount, g as createTextVNode, w as withCtx, T as Transition, B as withModifiers, y as createCommentVNode, u as useProducts, C as useCart, D as createBlock, E as router, p as pushScopeId, i as popScopeId } from "./index-ce4a082d.js";
import { S as SalesRibbon } from "./SalesRibbon-bceaca1d.js";
const _hoisted_1$4 = { class: "pagination-container" };
const _hoisted_2$4 = { class: "pagination" };
const _hoisted_3$3 = { class: "pagination-item" };
const _hoisted_4$1 = ["disabled"];
const _hoisted_5$1 = { class: "pagination-item" };
const _hoisted_6$1 = ["disabled"];
const _hoisted_7$1 = { class: "pagination-item" };
const _hoisted_8$1 = ["onClick", "disabled", "aria-label"];
const _hoisted_9$1 = { class: "pagination-item" };
const _hoisted_10$1 = ["disabled"];
const _hoisted_11 = { class: "pagination-item" };
const _hoisted_12 = ["disabled"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  props: {
    maxVisibleButtons: {
      //nombre de page max qui sera afficher
      type: Number,
      required: false,
      default: 5
    },
    totalPages: {
      //nombre de page total
      type: Number,
      required: false
    },
    total: {
      //nombre de produit total
      type: Number,
      required: true
    },
    perPage: {
      //nombre de produit par page
      type: Number,
      required: true,
      default: 10
    },
    currentPage: {
      //page actuelle
      type: Number,
      required: true,
      default: 1
    }
  },
  emits: ["pagechanged"],
  setup(__props, { emit }) {
    const props = __props;
    watch(
      () => props.perPage,
      () => {
        if (props.currentPage > totalPages.value) {
          emit("pagechanged", totalPages.value);
        }
      }
    );
    const totalPages = computed(() => {
      return Math.ceil(props.total / props.perPage);
    });
    const startPage = computed(() => {
      if (props.currentPage === 1) {
        return 1;
      } else if (props.currentPage === totalPages.value) {
        return totalPages.value - props.maxVisibleButtons + 1;
      } else
        return props.currentPage - 1;
    });
    const endPage = computed(() => {
      return Math.min(startPage.value + props.maxVisibleButtons - 1, totalPages.value);
    });
    const pages = computed(() => {
      const range = [];
      for (let i = startPage.value; i <= endPage.value; i += 1) {
        range.push({
          name: i,
          isDisabled: i === props.currentPage
        });
      }
      return range;
    });
    const isInFirstPage = computed(() => {
      return props.currentPage === 1;
    });
    const isInLastPage = computed(() => {
      return props.currentPage === totalPages.value;
    });
    const onClickFirstPage = () => {
      emit("pagechanged", 1);
    };
    const onClickPreviousPage = () => {
      emit("pagechanged", props.currentPage - 1);
    };
    const onClickPage = (page) => {
      emit("pagechanged", page);
    };
    const onClickNextPage = () => {
      emit("pagechanged", props.currentPage + 1);
    };
    const onClickLastPage = () => {
      emit("pagechanged", totalPages.value);
    };
    const isPageActive = (page) => {
      return props.currentPage === page;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("ul", _hoisted_2$4, [
          createBaseVNode("li", _hoisted_3$3, [
            createBaseVNode("button", {
              type: "button",
              onClick: onClickFirstPage,
              disabled: isInFirstPage.value,
              "aria-label": "Allez a la premiere page"
            }, [
              createVNode(unref(Icon), {
                class: "icon",
                icon: "carbon:page-first",
                width: "24",
                height: "24"
              })
            ], 8, _hoisted_4$1)
          ]),
          createBaseVNode("li", _hoisted_5$1, [
            createBaseVNode("button", {
              type: "button",
              onClick: onClickPreviousPage,
              disabled: isInFirstPage.value,
              "aria-label": "Allez à la page précédente"
            }, [
              createVNode(unref(Icon), {
                class: "icon",
                icon: "carbon:previous-filled",
                width: "24",
                height: "24"
              })
            ], 8, _hoisted_6$1)
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(pages.value, (page) => {
            return openBlock(), createElementBlock("li", _hoisted_7$1, [
              createBaseVNode("button", {
                class: normalizeClass(["pagination-item-number", { active: isPageActive(page.name) }]),
                type: "button",
                onClick: ($event) => onClickPage(page.name),
                disabled: page.isDisabled,
                "aria-label": `Allez a la page ${page.name}`
              }, toDisplayString(page.name), 11, _hoisted_8$1)
            ]);
          }), 256)),
          createBaseVNode("li", _hoisted_9$1, [
            createBaseVNode("button", {
              type: "button",
              onClick: onClickNextPage,
              disabled: isInLastPage.value,
              "aria-label": "Allez a la page suivante"
            }, [
              createVNode(unref(Icon), {
                class: "icon",
                icon: "carbon:next-filled",
                width: "24",
                height: "24"
              })
            ], 8, _hoisted_10$1)
          ]),
          createBaseVNode("li", _hoisted_11, [
            createBaseVNode("button", {
              type: "button",
              onClick: onClickLastPage,
              disabled: isInLastPage.value,
              "aria-label": "Allez a la derniere page"
            }, [
              createVNode(unref(Icon), {
                class: "icon",
                icon: "carbon:page-last",
                width: "24",
                height: "24"
              })
            ], 8, _hoisted_12)
          ])
        ])
      ]);
    };
  }
});
const Pagination_vue_vue_type_style_index_0_scoped_ded5b424_lang = "";
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ded5b424"]]);
const _hoisted_1$3 = { class: "selected-option" };
const _hoisted_2$3 = {
  key: 0,
  class: "options"
};
const _hoisted_3$2 = ["onClick"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PerPageSelect",
  emits: ["update:itemsPerPage"],
  setup(__props, { emit }) {
    const selectedValue = ref(10);
    const options = ref([
      { value: 10, label: "10 items per page" },
      { value: 25, label: "25 items per page" },
      { value: 40, label: "40 items per page" }
    ]);
    const isOpen = ref(false);
    const handleChange = (value) => {
      selectedValue.value = value;
      emit("update:itemsPerPage", value);
      isOpen.value = false;
    };
    const handleOutsideClick = (event) => {
      if (isOpen.value) {
        const target = event.target;
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "select-wrapper",
        onClick: _cache[0] || (_cache[0] = ($event) => isOpen.value = !isOpen.value)
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          createTextVNode(toDisplayString(selectedValue.value) + " ITEMS PER PAGE ", 1),
          createBaseVNode("div", {
            class: normalizeClass(["arrow-down", { "arrow-up": isOpen.value }])
          }, null, 2)
        ]),
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            isOpen.value ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(options.value, (option) => {
                return openBlock(), createElementBlock("div", {
                  class: "option",
                  key: option.value,
                  onClick: withModifiers(($event) => handleChange(option.value), ["stop"])
                }, toDisplayString(option.label), 9, _hoisted_3$2);
              }), 128))
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const PerPageSelect_vue_vue_type_style_index_0_scoped_3a937063_lang = "";
const PerPageSelect = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3a937063"]]);
const _sfc_main$2 = {
  props: {
    fillColor: String
  }
};
const Star_vue_vue_type_style_index_0_scoped_0a4c50e4_lang = "";
const _hoisted_1$2 = { class: "star" };
const _hoisted_2$2 = {
  width: "50px",
  height: "50px",
  viewBox: "0 0 32 32"
};
const _hoisted_3$1 = ["fill"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    (openBlock(), createElementBlock("svg", _hoisted_2$2, [
      createBaseVNode("path", {
        fill: $props.fillColor,
        d: "M16 1.13l1.31 4.03h4.24l-3.43 2.49 1.31 4.03-3.43-2.5-3.43 2.5 1.31-4.03-3.43-2.49h4.24z"
      }, null, 8, _hoisted_3$1)
    ]))
  ]);
}
const Star = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-0a4c50e4"]]);
const _hoisted_1$1 = { class: "star-rating" };
const _hoisted_2$1 = { class: "stars" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StarRating",
  props: {
    rating: {
      type: Number,
      required: true,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const getStarColor = (index) => {
      return index <= Math.round(props.rating) ? "#fecf0a" : "#c5cad4";
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          (openBlock(), createElementBlock(Fragment, null, renderList(5, (index) => {
            return createVNode(Star, {
              key: index,
              fillColor: getStarColor(index)
            }, null, 8, ["fillColor"]);
          }), 64)),
          createBaseVNode("p", null, toDisplayString(__props.rating), 1)
        ])
      ]);
    };
  }
});
const StarRating_vue_vue_type_style_index_0_scoped_fc6432a7_lang = "";
const StarRating = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fc6432a7"]]);
const _withScopeId = (n) => (pushScopeId("data-v-cd90ef16"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "products" };
const _hoisted_2 = { class: "select-wrapper" };
const _hoisted_3 = { class: "products-list" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "product-info" };
const _hoisted_7 = { class: "product-name" };
const _hoisted_8 = { class: "product-brand" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "product-price" }, null, -1));
const _hoisted_10 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductsList",
  props: {
    products: {
      type: Array,
      default: []
    },
    sales: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const itemsPerPage = ref(10);
    const productsStore = useProducts();
    const cartStore = useCart();
    const currentPage = computed(() => {
      return productsStore.currentPage;
    });
    const onPageChange = (value) => {
      productsStore.setCurrentPage(value);
      productsStore.fetchProducts();
      window.scrollTo(0, 0);
    };
    const updateItemsPerPage = (value) => {
      itemsPerPage.value = value;
      productsStore.setTotalPages(value);
      productsStore.fetchProducts();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          __props.sales ? (openBlock(), createBlock(PerPageSelect, {
            key: 0,
            class: "select",
            itemsPerPage: itemsPerPage.value,
            "onUpdate:itemsPerPage": updateItemsPerPage
          }, null, 8, ["itemsPerPage"])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.products, (product) => {
            return openBlock(), createElementBlock("div", {
              class: "products-list-item",
              key: product.id
            }, [
              createBaseVNode("div", {
                onClick: ($event) => unref(router).push(`/products/${product.id}`),
                class: "product-image"
              }, [
                createBaseVNode("img", {
                  src: product.image_link,
                  alt: "product",
                  style: { "width": "100%" }
                }, null, 8, _hoisted_5)
              ], 8, _hoisted_4),
              product.discount && product.discount.percent > 0 ? (openBlock(), createBlock(SalesRibbon, {
                key: 0,
                product
              }, null, 8, ["product"])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("p", _hoisted_7, toDisplayString(product.name), 1),
                createBaseVNode("p", _hoisted_8, toDisplayString(product.brand), 1),
                _hoisted_9,
                product.rating ? (openBlock(), createBlock(StarRating, {
                  key: 0,
                  rating: product.rating
                }, null, 8, ["rating"])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", null, [
                createBaseVNode("button", {
                  class: "add-to-cart-btn",
                  onClick: ($event) => unref(cartStore).addProduct(product.id)
                }, "ADD TO CART", 8, _hoisted_10)
              ])
            ]);
          }), 128))
        ]),
        __props.sales ? (openBlock(), createBlock(Pagination, {
          key: 0,
          total: unref(productsStore).getTotalProducts,
          "per-page": itemsPerPage.value,
          "current-page": currentPage.value,
          onPagechanged: _cache[0] || (_cache[0] = ($event) => onPageChange($event))
        }, null, 8, ["total", "per-page", "current-page"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const ProductsList_vue_vue_type_style_index_0_scoped_cd90ef16_lang = "";
const ProductsList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cd90ef16"]]);
export {
  ProductsList as P
};
