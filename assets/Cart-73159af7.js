import { C as Cart$1 } from "./Cart-a73f9822.js";
import { d as defineComponent, N as useUser, C as useCart, a as computed, o as openBlock, c as createElementBlock, f as createBaseVNode, t as toDisplayString, E as router, p as pushScopeId, i as popScopeId, _ as _export_sfc, e as createVNode } from "./index-ce4a082d.js";
import "./SalesRibbon-bceaca1d.js";
import "./BackButton-42076dde.js";
const _withScopeId$1 = (n) => (pushScopeId("data-v-47ad48ac"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "summary" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", null, "ORDER SUMMARY", -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Summary",
  props: {
    checkoutText: String
  },
  setup(__props) {
    const userStore = useUser();
    const cartStore = useCart();
    const productSubtotal = computed(() => {
      return cartStore.getSubTotal;
    });
    const shippingCost = computed(() => {
      return cartStore.getShippingCost;
    });
    const tvq = computed(() => {
      return cartStore.getTvq;
    });
    const tps = computed(() => {
      return cartStore.getTps;
    });
    const total = computed(() => {
      return productSubtotal.value + shippingCost.value + tvq.value + tps.value;
    });
    const shippingCostDisplay = computed(() => {
      return shippingCost.value === 0 ? "Free" : shippingCost.value.toFixed(2) + "$";
    });
    const isAuthenticated = computed(() => {
      return userStore.isAuthenticated;
    });
    const handleCheckout = async () => {
      if (isAuthenticated.value) {
        router.push("/checkout");
      } else {
        await userStore.checkoutAsGuest();
        router.push("/checkout");
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _hoisted_2$1,
        createBaseVNode("p", null, "Product Subtotal : " + toDisplayString(productSubtotal.value.toFixed(2)) + "$", 1),
        createBaseVNode("p", null, "Estimated Shipping : " + toDisplayString(shippingCostDisplay.value), 1),
        createBaseVNode("p", null, "TVQ : " + toDisplayString(tvq.value.toFixed(2)) + "$", 1),
        createBaseVNode("p", null, "TPS : " + toDisplayString(tps.value.toFixed(2)) + "$", 1),
        createBaseVNode("p", null, "TOTAL : " + toDisplayString(total.value.toFixed(2)) + "$", 1),
        createBaseVNode("div", null, [
          createBaseVNode("button", {
            onClick: handleCheckout,
            class: "checkout-btn"
          }, toDisplayString(isAuthenticated.value ? "CHECKOUT" : "CHECKOUT AS A GUEST"), 1)
        ])
      ]);
    };
  }
});
const Summary_vue_vue_type_style_index_0_scoped_47ad48ac_lang = "";
const Summary = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-47ad48ac"]]);
const _withScopeId = (n) => (pushScopeId("data-v-f3227c40"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "cart-container" };
const _hoisted_2 = {
  key: 0,
  class: "main-cart"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "title" }, "C A R T", -1));
const _hoisted_4 = {
  key: 1,
  class: "main-cart"
};
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "title" }, "YOUR CART IS EMPTY", -1));
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = { class: "summary-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Cart",
  setup(__props) {
    const cartStore = useCart();
    const cartItems = computed(() => cartStore.getCartItems);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        cartItems.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
          _hoisted_3,
          createVNode(Cart$1)
        ])) : (openBlock(), createElementBlock("div", _hoisted_4, _hoisted_6)),
        createBaseVNode("div", _hoisted_7, [
          createVNode(Summary, { class: "summary" })
        ])
      ]);
    };
  }
});
const Cart_vue_vue_type_style_index_0_scoped_f3227c40_lang = "";
const Cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f3227c40"]]);
export {
  Cart as default
};
