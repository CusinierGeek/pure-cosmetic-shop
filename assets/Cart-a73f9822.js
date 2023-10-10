import { d as defineComponent, C as useCart, r as ref, X as onBeforeMount, a as computed, o as openBlock, c as createElementBlock, f as createBaseVNode, t as toDisplayString, D as createBlock, y as createCommentVNode, g as createTextVNode, e as createVNode, h as unref, I as Icon, p as pushScopeId, i as popScopeId, _ as _export_sfc, F as Fragment, k as renderList } from "./index-ce4a082d.js";
import { S as SalesRibbon } from "./SalesRibbon-bceaca1d.js";
import { B as BackButton } from "./BackButton-42076dde.js";
const _withScopeId = (n) => (pushScopeId("data-v-e985edab"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "cart-item" };
const _hoisted_2 = { class: "cart-item__image" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "cart-item__info" };
const _hoisted_5 = { class: "cart-item__name" };
const _hoisted_6 = { class: "cart-item__price" };
const _hoisted_7 = {
  key: 0,
  class: "old-price"
};
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_9 = { class: "cart-item__quantity" };
const _hoisted_10 = { class: "cart-item__total" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CartItem",
  props: {
    productId: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const cartStore = useCart();
    const product = ref(null);
    onBeforeMount(() => {
      product.value = cartStore.getProductById(props.productId);
    });
    const discountedPrice = computed(() => {
      var _a;
      if (!product.value)
        return 0;
      return ((_a = product.value.discount) == null ? void 0 : _a.percent) ? product.value.price * (1 - product.value.discount.percent / 100) : product.value.price;
    });
    const quantity = computed(() => {
      return props.quantity;
    });
    const total = computed(() => {
      if (!product.value)
        return 0;
      return discountedPrice.value * quantity.value || 0;
    });
    const removeProduct = async () => {
      if (!product.value)
        return;
      cartStore.removeProduct(product.value.id);
    };
    const addProduct = async () => {
      if (!product.value)
        return;
      cartStore.addProduct(product.value.id);
    };
    const subtractProduct = async () => {
      if (!product.value)
        return;
      cartStore.subtractProduct(product.value.id);
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("img", {
            src: (_a = product.value) == null ? void 0 : _a.image_link,
            alt: "product.name"
          }, null, 8, _hoisted_3)
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("h3", _hoisted_5, toDisplayString((_b = product.value) == null ? void 0 : _b.name), 1),
          ((_c = product.value) == null ? void 0 : _c.discount) && ((_d = product.value) == null ? void 0 : _d.discount.end_date) > (/* @__PURE__ */ new Date()).toISOString() ? (openBlock(), createBlock(SalesRibbon, {
            key: 0,
            product: product.value
          }, null, 8, ["product"])) : createCommentVNode("", true),
          createBaseVNode("p", _hoisted_6, [
            ((_f = (_e = product.value) == null ? void 0 : _e.discount) == null ? void 0 : _f.percent) && product.value.discount.percent > 0 ? (openBlock(), createElementBlock("span", _hoisted_7, [
              createTextVNode(toDisplayString(product.value.price.toFixed(2)) + "$", 1),
              _hoisted_8
            ])) : createCommentVNode("", true),
            createTextVNode(toDisplayString(discountedPrice.value.toFixed(2)) + "$ ", 1)
          ]),
          createBaseVNode("div", _hoisted_9, [
            createTextVNode(" QUANTITY : "),
            createBaseVNode("button", {
              class: "cart-item__subtract",
              onClick: subtractProduct
            }, "-"),
            createTextVNode(" " + toDisplayString(quantity.value) + " ", 1),
            createBaseVNode("button", {
              class: "cart-item__add",
              onClick: addProduct
            }, "+")
          ]),
          createBaseVNode("p", _hoisted_10, "TOTAL : " + toDisplayString(total.value.toFixed(2)) + "$", 1),
          createBaseVNode("button", {
            class: "cart-item__remove",
            onClick: removeProduct
          }, [
            createVNode(unref(Icon), {
              icon: "ph:trash-thin",
              color: "black",
              width: "32",
              height: "32"
            })
          ])
        ])
      ]);
    };
  }
});
const CartItem_vue_vue_type_style_index_0_scoped_e985edab_lang = "";
const CartItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e985edab"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Cart",
  setup(__props) {
    const cartStore = useCart();
    const cartItems = computed(() => cartStore.getCartItems);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(BackButton, { class: "back-button" }),
        (openBlock(true), createElementBlock(Fragment, null, renderList(cartItems.value, (product) => {
          return openBlock(), createBlock(CartItem, {
            key: product.productId,
            "product-id": product.productId,
            quantity: product.quantity
          }, null, 8, ["product-id", "quantity"]);
        }), 128))
      ], 64);
    };
  }
});
const Cart_vue_vue_type_style_index_0_scoped_661b4928_lang = "";
const Cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-661b4928"]]);
export {
  Cart as C
};
