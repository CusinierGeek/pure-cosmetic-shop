import { d as defineComponent, u as useProducts, r as ref, o as openBlock, c as createElementBlock, _ as _export_sfc, a as computed, b as resolveComponent, e as createVNode, w as withCtx, F as Fragment, f as createBaseVNode, g as createTextVNode, h as unref, I as Icon, p as pushScopeId, i as popScopeId } from "./index-ce4a082d.js";
import { P as ProductsList } from "./ProductsList-0559ee77.js";
import "./SalesRibbon-bceaca1d.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddSaleButton",
  setup(__props) {
    const productsStore = useProducts();
    const numberOfSales = ref(10);
    const addSale = () => {
      productsStore.generateSales(numberOfSales.value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "add-sale-button",
        onClick: addSale
      }, "ADD SALES");
    };
  }
});
const AddSaleButton_vue_vue_type_style_index_0_scoped_40f770f9_lang = "";
const AddSaleButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-40f770f9"]]);
const _withScopeId = (n) => (pushScopeId("data-v-6edfd981"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "shipping" }, "FREE SHIPPING | WITH ORDERS OVER $150", -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "banner" }, [
  /* @__PURE__ */ createBaseVNode("h1", null, "LEVEL UP WITH OUR LATEST DEALS")
], -1));
const _hoisted_3 = { class: "products-button" };
const _hoisted_4 = {
  key: 0,
  class: "products"
};
const _hoisted_5 = {
  key: 1,
  class: "products"
};
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "NO PRODUCT ON SALE", -1));
const _hoisted_7 = [
  _hoisted_6
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Home",
  setup(__props) {
    const productsStore = useProducts();
    const productsOnSale = computed(() => {
      return productsStore.getSales;
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        createVNode(_component_router_link, {
          to: "/products",
          class: "products-link"
        }, {
          default: withCtx(() => [
            createBaseVNode("button", _hoisted_3, [
              createTextVNode("SHOP ALL PRODUCTS"),
              createVNode(unref(Icon), {
                icon: "ph:arrow-right-light",
                class: "icon"
              })
            ])
          ]),
          _: 1
        }),
        productsOnSale.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createVNode(ProductsList, { products: productsOnSale.value }, null, 8, ["products"])
        ])) : (openBlock(), createElementBlock("div", _hoisted_5, _hoisted_7)),
        createVNode(AddSaleButton, { class: "addSale" })
      ], 64);
    };
  }
});
const Home_vue_vue_type_style_index_0_scoped_6edfd981_lang = "";
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6edfd981"]]);
export {
  Home as default
};
