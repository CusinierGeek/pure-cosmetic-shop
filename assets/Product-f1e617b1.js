import { d as defineComponent, G as readonly, o as openBlock, c as createElementBlock, f as createBaseVNode, t as toDisplayString, y as createCommentVNode, _ as _export_sfc, j as reactive, H as normalizeStyle, e as createVNode, h as unref, p as pushScopeId, i as popScopeId, C as useCart, u as useProducts, a as computed, g as createTextVNode, D as createBlock, F as Fragment, J as useRouter, r as ref, K as useRoute, L as watchEffect, M as fetchProductById } from "./index-ce4a082d.js";
import { B as BackButton } from "./BackButton-42076dde.js";
import { S as SalesRibbon } from "./SalesRibbon-bceaca1d.js";
const _hoisted_1$4 = { class: "img-title-container" };
const _hoisted_2$3 = { class: "img-container" };
const _hoisted_3$2 = ["src"];
const _hoisted_4$2 = { class: "h2-container" };
const _hoisted_5$2 = { class: "share-title" };
const _hoisted_6$2 = {
  key: 0,
  class: "share-content"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ImageTitleContainer",
  props: {
    imgUrl: {
      type: readonly(String),
      required: true
    },
    title: {
      type: readonly(String),
      required: true
    },
    description: {
      type: readonly(String),
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("img", {
            src: props.imgUrl,
            alt: "product image"
          }, null, 8, _hoisted_3$2)
        ]),
        createBaseVNode("div", _hoisted_4$2, [
          createBaseVNode("h2", _hoisted_5$2, toDisplayString(props.title), 1),
          props.title.length < 70 ? (openBlock(), createElementBlock("p", _hoisted_6$2, toDisplayString(props.description.length > 100 ? props.description.substring(0, 100) + "..." : props.description), 1)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const ImageTitleContainer_vue_vue_type_style_index_0_scoped_d540147a_lang = "";
const ImageTitleContainer = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d540147a"]]);
const _hoisted_1$3 = { class: "link-container" };
const _hoisted_2$2 = ["href"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LinkContainer",
  props: {
    link: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const state = reactive({
      isCopied: false,
      copyStatus: "Copy",
      backgroundColor: "var(--primary)"
    });
    const copyToClipboard = async () => {
      navigator.clipboard.writeText(props.link);
      await new Promise((resolve) => {
        state.isCopied = true;
        state.copyStatus = "Copied";
        state.backgroundColor = "background-color: var(--dark-primary)";
        setTimeout(() => {
          state.isCopied = false;
          state.copyStatus = "Copy";
          state.backgroundColor = "background-color: var(--primary)";
          resolve(true);
        }, 1e3);
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("a", {
          href: props.link
        }, toDisplayString(props.link), 9, _hoisted_2$2),
        createBaseVNode("button", {
          class: "copy-btn",
          onClick: copyToClipboard,
          style: normalizeStyle(state.backgroundColor)
        }, toDisplayString(state.copyStatus), 5)
      ]);
    };
  }
});
const LinkContainer_vue_vue_type_style_index_0_scoped_eaa94859_lang = "";
const LinkContainer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-eaa94859"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-8e68634d"), n = n(), popScopeId(), n);
const _hoisted_1$2 = {
  key: 0,
  class: "share-modal-window-container"
};
const _hoisted_2$1 = { class: "share-modal-inner-part-container" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", { class: "share-text" }, "Share", -1));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-times" }, null, -1));
const _hoisted_5$1 = [
  _hoisted_4$1
];
const _hoisted_6$1 = { class: "components-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ShareModalWindow",
  props: {
    product: {
      type: Object,
      required: true
    },
    isShown: {
      type: Boolean,
      required: true
    }
  },
  emits: ["toggleShare"],
  setup(__props, { emit }) {
    const props = __props;
    const currentFullURL = window.location.href;
    const exit = () => {
      emit("toggleShare");
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return props.isShown ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$1, [
          _hoisted_3$1,
          createBaseVNode("div", {
            class: "share-exit",
            onClick: exit
          }, _hoisted_5$1),
          createBaseVNode("div", _hoisted_6$1, [
            createVNode(ImageTitleContainer, {
              class: "img-title-container",
              imgUrl: (_a = __props.product) == null ? void 0 : _a.image_link,
              title: (_b = __props.product) == null ? void 0 : _b.name,
              description: ((_c = __props.product) == null ? void 0 : _c.description) ? (_d = __props.product) == null ? void 0 : _d.description : ""
            }, null, 8, ["imgUrl", "title", "description"]),
            createVNode(LinkContainer, {
              class: "link-container",
              link: unref(currentFullURL)
            }, null, 8, ["link"])
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const ShareModalWindow_vue_vue_type_style_index_0_scoped_8e68634d_lang = "";
const ShareModalWindow = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8e68634d"]]);
const _withScopeId = (n) => (pushScopeId("data-v-0d49ea42"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "container" };
const _hoisted_2 = {
  key: 0,
  class: "product"
};
const _hoisted_3 = { class: "product-image" };
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "product-description" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("b", null, null, -1));
const _hoisted_7 = { class: "product-info" };
const _hoisted_8 = { class: "product-name" };
const _hoisted_9 = { class: "product-price" };
const _hoisted_10 = {
  key: 0,
  class: "old-price"
};
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_12 = { class: "btns" };
const _hoisted_13 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Product",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const cartStore = useCart();
    useProducts();
    const product = computed(() => props.product);
    const discountedPrice = computed(() => {
      var _a;
      if (!product.value)
        return 0;
      return ((_a = product.value.discount) == null ? void 0 : _a.percent) ? product.value.price * (1 - product.value.discount.percent / 100) : product.value.price;
    });
    const toggleShare = () => {
      state.isShown = state.isShown ? false : true;
    };
    const state = reactive({
      isShown: false
    });
    const limitDescription = (description) => {
      if (description === null) {
        return "";
      }
      const words = description.split(" ");
      if (words.length <= 25) {
        return description;
      }
      const limitedDescription = words.slice(0, 25).join(" ");
      return `${limitedDescription}...`;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(BackButton, { class: "back-button" }),
        createBaseVNode("div", _hoisted_1$1, [
          product.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("img", {
                src: product.value.image_link,
                alt: "product"
              }, null, 8, _hoisted_4),
              createBaseVNode("p", _hoisted_5, [
                _hoisted_6,
                createTextVNode(toDisplayString(limitDescription(product.value.description)), 1)
              ])
            ]),
            product.value.discount && product.value.discount.percent > 0 ? (openBlock(), createBlock(SalesRibbon, {
              key: 0,
              product: product.value
            }, null, 8, ["product"])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("h1", _hoisted_8, toDisplayString(product.value.name), 1),
              createBaseVNode("p", _hoisted_9, [
                product.value.discount && product.value.discount.percent > 0 ? (openBlock(), createElementBlock("span", _hoisted_10, [
                  createTextVNode(toDisplayString(product.value.price.toFixed(2)) + "$", 1),
                  _hoisted_11
                ])) : createCommentVNode("", true),
                createTextVNode(toDisplayString(discountedPrice.value.toFixed(2)) + "$ ", 1)
              ]),
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("button", {
                  class: "add-to-cart",
                  onClick: _cache[0] || (_cache[0] = ($event) => unref(cartStore).addProduct(product.value.id))
                }, "ADD TO CART"),
                createBaseVNode("button", {
                  class: "share",
                  onClick: toggleShare
                }, "SHARE")
              ])
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_13, "WE CAN'T FIND THE PRODUCT")),
          createVNode(ShareModalWindow, {
            product: product.value,
            isShown: state.isShown,
            onToggleShare: toggleShare
          }, null, 8, ["product", "isShown"])
        ])
      ], 64);
    };
  }
});
const Product_vue_vue_type_style_index_0_scoped_0d49ea42_lang = "";
const Product$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0d49ea42"]]);
const _hoisted_1 = { class: "product-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Product",
  setup(__props) {
    const router = useRouter();
    const product = ref(null);
    const route = useRoute();
    watchEffect(async () => {
      const id = Array.isArray(route.params.id) ? parseInt(route.params.id[0]) : parseInt(route.params.id);
      const foundProduct = await fetchProductById(id);
      if (foundProduct) {
        product.value = foundProduct;
      } else {
        router.push("/404");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(BackButton, { class: "back-button" }),
        product.value ? (openBlock(), createBlock(Product$1, {
          key: 0,
          product: product.value
        }, null, 8, ["product"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const Product_vue_vue_type_style_index_0_scoped_327c0a8b_lang = "";
const Product = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-327c0a8b"]]);
export {
  Product as default
};
