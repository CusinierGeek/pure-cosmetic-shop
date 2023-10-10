import { C as CustomInput } from "./CustomInput-2316b695.js";
import { d as defineComponent, N as useUser, W as useOrder, r as ref, X as onBeforeMount, o as openBlock, c as createElementBlock, f as createBaseVNode, t as toDisplayString, h as unref, e as createVNode, F as Fragment, k as renderList, n as normalizeClass, p as pushScopeId, i as popScopeId, _ as _export_sfc, l as withDirectives, Y as vModelText, y as createCommentVNode, u as useProducts, C as useCart, j as reactive, a as computed, E as router, z as onMounted, D as createBlock } from "./index-ce4a082d.js";
import { C as Cart } from "./Cart-a73f9822.js";
import "./SalesRibbon-bceaca1d.js";
import "./BackButton-42076dde.js";
const _withScopeId$5 = (n) => (pushScopeId("data-v-b9cc4185"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "content-box" };
const _hoisted_2$5 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("h2", null, "CREDIT CARD INFORMATION", -1));
const _hoisted_3$3 = { key: 0 };
const _hoisted_4$3 = { key: 1 };
const _hoisted_5$3 = ["onClick"];
const _hoisted_6$3 = { class: "values" };
const _hoisted_7$3 = { class: "values" };
const _hoisted_8$3 = { class: "values" };
const _hoisted_9$2 = { class: "values" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CreditCard",
  setup(__props) {
    const userStore = useUser();
    const currentUser = userStore.GetUser;
    const orderStore = useOrder();
    const cardActive = ref();
    const creditCard = ref({
      cardNumber: "",
      expirationDate: "",
      CVV: ""
    });
    const useDefaultCard = ref(false);
    onBeforeMount(() => {
      if (currentUser.firstName == "Guest") {
        useDefaultCard.value = true;
      } else {
        useDefaultCard.value = false;
      }
    });
    const toggleUseDefaultCard = () => {
      useDefaultCard.value = !useDefaultCard.value;
    };
    const maskedCardNumber = (cardNumber) => {
      if (cardNumber && cardNumber.length >= 16) {
        cardNumber.substring(0, 14);
        const maskedDigits = "*".repeat(14);
        return `${maskedDigits}${cardNumber.substring(14)}`;
      }
      return "";
    };
    const fillCardInfos = (card, index) => {
      cardActive.value = index;
      creditCard.value.cardNumber = card.cardNumber;
      creditCard.value.expirationDate = card.expiryDate;
      creditCard.value.CVV = card.cvv;
      orderStore.setCreditCardNumber(creditCard.value.cardNumber);
      orderStore.setCreditCardExpirationDate(creditCard.value.expirationDate);
      orderStore.setCreditCardCVV(creditCard.value.CVV);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        _hoisted_2$5,
        createBaseVNode("span", { onClick: toggleUseDefaultCard }, toDisplayString(useDefaultCard.value && unref(userStore).isAuthenticated ? "USE DEFAULT CARD" : "USE DIFFERENT CARD"), 1),
        useDefaultCard.value ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
          createVNode(CustomInput, {
            label: "* CARD NUMBER",
            placeholder: "XXXX-XXXX-XXXX-XXXX",
            modelValue: creditCard.value.cardNumber,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => creditCard.value.cardNumber = $event),
            onChange: _cache[1] || (_cache[1] = ($event) => unref(orderStore).setCreditCardNumber(creditCard.value.cardNumber))
          }, null, 8, ["modelValue"]),
          createVNode(CustomInput, {
            label: "* EXPIRY DATE",
            placeholder: "MM/YY",
            modelValue: creditCard.value.expirationDate,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => creditCard.value.expirationDate = $event),
            onChange: _cache[3] || (_cache[3] = ($event) => unref(orderStore).setCreditCardExpirationDate(creditCard.value.expirationDate))
          }, null, 8, ["modelValue"]),
          createVNode(CustomInput, {
            label: "* CVV",
            placeholder: "XXX",
            modelValue: creditCard.value.CVV,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => creditCard.value.CVV = $event),
            onChange: _cache[5] || (_cache[5] = ($event) => unref(orderStore).setCreditCardCVV(creditCard.value.CVV))
          }, null, 8, ["modelValue"])
        ])) : (openBlock(), createElementBlock("div", _hoisted_4$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(currentUser).cards, (cards, index) => {
            return openBlock(), createElementBlock("div", { key: index }, [
              createBaseVNode("div", {
                class: normalizeClass(["card-info", { cardActive: cardActive.value === index }]),
                onClick: ($event) => fillCardInfos(cards, index)
              }, [
                createBaseVNode("div", _hoisted_6$3, "NAME ON CARD : " + toDisplayString(unref(currentUser).firstName) + " " + toDisplayString(unref(currentUser).lastName), 1),
                createBaseVNode("div", _hoisted_7$3, "CARD NUMBER : " + toDisplayString(maskedCardNumber(cards.cardNumber)), 1),
                createBaseVNode("div", _hoisted_8$3, "EXPIRY DATE : " + toDisplayString(new Date(cards.expiryDate).toLocaleDateString()), 1),
                createBaseVNode("div", _hoisted_9$2, "CVV : " + toDisplayString(cards.cvv), 1)
              ], 10, _hoisted_5$3)
            ]);
          }), 128))
        ]))
      ]);
    };
  }
});
const CreditCard_vue_vue_type_style_index_0_scoped_b9cc4185_lang = "";
const CreditCard = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-b9cc4185"]]);
const _withScopeId$4 = (n) => (pushScopeId("data-v-375ded5f"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "content-box" };
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("h2", null, "SHIPPING INFORMATION", -1));
const _hoisted_3$2 = { key: 0 };
const _hoisted_4$2 = { key: 1 };
const _hoisted_5$2 = ["onClick"];
const _hoisted_6$2 = { class: "values" };
const _hoisted_7$2 = { class: "values" };
const _hoisted_8$2 = { class: "values" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ShippingInfo",
  setup(__props) {
    const activeAddress = ref();
    const orderStore = useOrder();
    const userStore = useUser();
    const currentUser = userStore.GetUser;
    const shippingInfo = ref({
      fullName: "",
      phoneNumber: "",
      street: "",
      city: "",
      country: "",
      zipcode: ""
    });
    const showAddress = ref(false);
    onBeforeMount(() => {
      if (currentUser.firstName == "Guest") {
        showAddress.value = true;
      } else {
        showAddress.value = false;
      }
    });
    const toggleAddress = () => {
      showAddress.value = !showAddress.value;
    };
    const fillShippingInfo = (address, index) => {
      activeAddress.value = index;
      shippingInfo.value.fullName = currentUser.firstName;
      shippingInfo.value.street = address.street;
      shippingInfo.value.city = address.city;
      shippingInfo.value.country = address.country;
      shippingInfo.value.zipcode = address.zipcode;
      orderStore.setShippingInfoFullName(shippingInfo.value.fullName);
      orderStore.setShippingInfoStreet(shippingInfo.value.street);
      orderStore.setShippingInfoCity(shippingInfo.value.city);
      orderStore.setShippingInfoCountry(shippingInfo.value.country);
      orderStore.setShippingInfoZipcode(shippingInfo.value.zipcode);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        _hoisted_2$4,
        createBaseVNode("span", { onClick: toggleAddress }, toDisplayString(showAddress.value && unref(userStore).isAuthenticated ? "USE EXISTING ADDRESS" : "USE NEW ADDRESS"), 1),
        showAddress.value ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
          withDirectives(createBaseVNode("input", {
            class: "ship1",
            placeholder: " Full Name",
            label: "* FULL NAME",
            "min-length": "2",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => shippingInfo.value.fullName = $event),
            onChange: _cache[1] || (_cache[1] = ($event) => unref(orderStore).setShippingInfoFullName(shippingInfo.value.fullName))
          }, null, 544), [
            [vModelText, shippingInfo.value.fullName]
          ]),
          createBaseVNode("div", null, [
            createVNode(CustomInput, {
              class: "ship",
              placeholder: "Street",
              label: "* STREET",
              type: "street",
              required: "",
              "min-length": "4",
              modelValue: shippingInfo.value.street,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => shippingInfo.value.street = $event),
              onChange: _cache[3] || (_cache[3] = ($event) => unref(orderStore).setShippingInfoStreet(shippingInfo.value.street))
            }, null, 8, ["modelValue"]),
            createVNode(CustomInput, {
              class: "ship",
              label: "* CITY",
              placeholder: "City",
              type: "city",
              required: "",
              "min-length": "4",
              modelValue: shippingInfo.value.city,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => shippingInfo.value.city = $event),
              onChange: _cache[5] || (_cache[5] = ($event) => unref(orderStore).setShippingInfoCity(shippingInfo.value.city))
            }, null, 8, ["modelValue"]),
            createVNode(CustomInput, {
              class: "ship",
              label: "* COUNTRY",
              placeholder: "Country",
              type: "country",
              required: "",
              "min-length": "4",
              modelValue: shippingInfo.value.country,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => shippingInfo.value.country = $event),
              onChange: _cache[7] || (_cache[7] = ($event) => unref(orderStore).setShippingInfoCountry(shippingInfo.value.country))
            }, null, 8, ["modelValue"]),
            createVNode(CustomInput, {
              class: "ship",
              label: "* ZIP CODE",
              placeholder: "Zipcode",
              type: "zip-code",
              required: "",
              "min-length": "5",
              modelValue: shippingInfo.value.zipcode,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => shippingInfo.value.zipcode = $event),
              onChange: _cache[9] || (_cache[9] = ($event) => unref(orderStore).setShippingInfoZipcode(shippingInfo.value.zipcode))
            }, null, 8, ["modelValue"])
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_4$2, [
          unref(currentUser).addresses ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(currentUser).addresses, (address, index) => {
            return openBlock(), createElementBlock("div", { key: index }, [
              createBaseVNode("div", {
                class: normalizeClass(["address-info", { addressActive: activeAddress.value === index }]),
                onClick: ($event) => fillShippingInfo(address, index)
              }, [
                createBaseVNode("div", _hoisted_6$2, toDisplayString(unref(currentUser).firstName) + " " + toDisplayString(unref(currentUser).lastName), 1),
                createBaseVNode("div", _hoisted_7$2, toDisplayString(address.doorNumber) + " " + toDisplayString(address.street) + ", " + toDisplayString(address.city), 1),
                createBaseVNode("div", _hoisted_8$2, toDisplayString(address.country) + ", " + toDisplayString(address.zipcode), 1)
              ], 10, _hoisted_5$2)
            ]);
          }), 128)) : createCommentVNode("", true)
        ]))
      ]);
    };
  }
});
const ShippingInfo_vue_vue_type_style_index_0_scoped_375ded5f_lang = "";
const ShippingInfo = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-375ded5f"]]);
const _withScopeId$3 = (n) => (pushScopeId("data-v-4ed0e42d"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "content-box" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("h2", null, "GIFT CARD", -1));
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "GiftCard",
  setup(__props) {
    const orderStore = useOrder();
    const giftCard = ref({
      cardNumber: "",
      pin: ""
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        _hoisted_2$3,
        createBaseVNode("div", null, [
          createVNode(CustomInput, {
            label: "GIFT CARD NUMBER",
            placeholder: "XXXX-XXXX-XX",
            modelValue: giftCard.value.cardNumber,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => giftCard.value.cardNumber = $event),
            onChange: _cache[1] || (_cache[1] = ($event) => unref(orderStore).setGiftCardNumber(giftCard.value.cardNumber))
          }, null, 8, ["modelValue"]),
          createVNode(CustomInput, {
            label: "PIN",
            placeholder: "XXXX",
            modelValue: giftCard.value.pin,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => giftCard.value.pin = $event),
            onChange: _cache[3] || (_cache[3] = ($event) => unref(orderStore).setGiftCardPin(giftCard.value.pin))
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
const GiftCard_vue_vue_type_style_index_0_scoped_4ed0e42d_lang = "";
const GiftCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4ed0e42d"]]);
const _withScopeId$2 = (n) => (pushScopeId("data-v-551f20f1"), n = n(), popScopeId(), n);
const _hoisted_1$2 = {
  key: 0,
  class: "confirmation-modal-window-container"
};
const _hoisted_2$2 = { class: "confirmation-modal-inner-part-container" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h2", { class: "confirmation-text" }, "CONFIRMATION", -1));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-times" }, null, -1));
const _hoisted_5$1 = [
  _hoisted_4$1
];
const _hoisted_6$1 = { class: "components-wrapper" };
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", { colspan: "2" }, "PRODUCT"),
    /* @__PURE__ */ createBaseVNode("th", null, "QUANTITY"),
    /* @__PURE__ */ createBaseVNode("th", null, "PRICE")
  ])
], -1));
const _hoisted_8$1 = ["src"];
const _hoisted_9$1 = { class: "shipping-info" };
const _hoisted_10$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", null, "SHIPPING INFORMATIONS", -1));
const _hoisted_11$1 = { key: 0 };
const _hoisted_12$1 = { class: "total-container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ConfirmationModalWindow",
  props: {
    data: {
      type: Object,
      required: true
    },
    show: {
      type: Boolean,
      required: false
    }
  },
  emits: ["toggleWindow"],
  setup(__props, { emit }) {
    const props = __props;
    useProducts();
    const cartStore = useCart();
    const exit = () => {
      emit("toggleWindow");
    };
    reactive({
      products: props.data.orderItems.map((item) => {
        return cartStore.getProductById(item.productId);
      })
    });
    const print = () => {
      window.print();
    };
    const subtotal = (a, b) => {
      if (a == void 0 || b == void 0) {
        return 0;
      }
      return a * b;
    };
    return (_ctx, _cache) => {
      return props.show ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          _hoisted_3$1,
          createBaseVNode("div", {
            class: "confirmation-exit",
            onClick: exit
          }, _hoisted_5$1),
          createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("button", { onClick: print }, "PRINT"),
            createBaseVNode("table", null, [
              _hoisted_7$1,
              createBaseVNode("tbody", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.data.orderItems, (item, index) => {
                  var _a, _b, _c;
                  return openBlock(), createElementBlock("tr", {
                    key: index,
                    class: "link-container"
                  }, [
                    createBaseVNode("td", null, [
                      createBaseVNode("img", {
                        class: "image",
                        src: (_a = unref(cartStore).getProductById(item.productId)) == null ? void 0 : _a.image_link
                      }, null, 8, _hoisted_8$1)
                    ]),
                    createBaseVNode("td", null, toDisplayString((_b = unref(cartStore).getProductById(item.productId)) == null ? void 0 : _b.name), 1),
                    createBaseVNode("td", null, toDisplayString(item.quantity), 1),
                    createBaseVNode("td", null, toDisplayString(`${subtotal((_c = unref(cartStore).getProductById(item.productId)) == null ? void 0 : _c.price, item.quantity)}`) + "$", 1)
                  ]);
                }), 128))
              ])
            ]),
            createBaseVNode("div", _hoisted_9$1, [
              _hoisted_10$1,
              createBaseVNode("p", null, "NAME : " + toDisplayString(__props.data.shippingInfoFullName), 1),
              createBaseVNode("p", null, "ADDRESS : " + toDisplayString(__props.data.shippingInfoStreet) + ", " + toDisplayString(__props.data.shippingInfoCity) + ", " + toDisplayString(__props.data.shippingInfoCountry), 1)
            ]),
            __props.data.total > 0 ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
              createBaseVNode("div", _hoisted_12$1, [
                createBaseVNode("p", null, "TOTAL : " + toDisplayString(__props.data.total.toFixed(2)) + "$", 1)
              ])
            ])) : createCommentVNode("", true)
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const ConfirmationModalWindow_vue_vue_type_style_index_0_scoped_551f20f1_lang = "";
const ShowConfirmationModalWindow = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-551f20f1"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-e928d1f7"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "summary" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", null, "ORDER SUMMARY", -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CheckoutSummary",
  props: {
    checkoutText: String
  },
  setup(__props) {
    const orderStore = useOrder();
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
    const placeOrder = () => {
      try {
        const result = orderStore.createOrder();
        result.then((res) => {
          if (res) {
            data = res;
            toggleConfirmationModalWindow();
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    const state = reactive({
      isConfirmationModalWindowShown: false
    });
    const toggleConfirmationModalWindow = () => {
      state.isConfirmationModalWindowShown = !state.isConfirmationModalWindowShown;
    };
    const exit = () => {
      toggleConfirmationModalWindow();
      cartStore.clearCart();
      router.push("/products");
    };
    let data = {
      customerId: "",
      orderItems: [],
      shippingInfoFullName: "",
      shippingInfoStreet: "",
      shippingInfoCity: "",
      shippingInfoCountry: "",
      shippingInfoZipcode: "",
      creditCardNumber: "",
      creditCardExpirationDate: "",
      creditCardCVV: "",
      giftCardNumber: "",
      giftCardPin: "",
      total: 0
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
            onClick: placeOrder,
            class: "checkout-btn"
          }, toDisplayString(__props.checkoutText || "CHECKOUT"), 1)
        ]),
        createVNode(ShowConfirmationModalWindow, {
          show: state.isConfirmationModalWindowShown,
          data: unref(data),
          onToggleWindow: exit
        }, null, 8, ["show", "data"])
      ]);
    };
  }
});
const CheckoutSummary_vue_vue_type_style_index_0_scoped_e928d1f7_lang = "";
const CheckoutSummary = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e928d1f7"]]);
const _withScopeId = (n) => (pushScopeId("data-v-68955890"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "shipping" }, "FREE SHIPPING | WITH ORDERS OVER $150", -1));
const _hoisted_2 = { class: "checkout" };
const _hoisted_3 = { class: "checkout-content" };
const _hoisted_4 = { class: "checkout-left" };
const _hoisted_5 = { class: "checkout-header" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "CHECKOUT", -1));
const _hoisted_7 = { class: "checkout-steps" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "step-circle" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "1")
], -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "step-circle" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "2")
], -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "step-circle" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "3")
], -1));
const _hoisted_11 = { class: "checkout-body" };
const _hoisted_12 = { class: "checkout-form" };
const _hoisted_13 = { key: 0 };
const _hoisted_14 = { key: 1 };
const _hoisted_15 = { class: "checkout-buttons" };
const _hoisted_16 = { class: "checkout-right" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Checkout",
  setup(__props) {
    const orderStore = useOrder();
    const cartStore = useCart();
    const activeStep = ref(1);
    const showGiftCard = ref(false);
    const currentView = ref("shipping");
    const showCart = ref(false);
    const userStore = useUser();
    onMounted(() => {
      const userId = userStore.GetUserId;
      if (userId == void 0) {
        return router.push("/login");
      } else {
        orderStore.setCustomerId(userId);
        orderStore.setOrderItems(cartStore.getCartItems);
        orderStore.setTotal(cartStore.getTotal);
      }
    });
    const showView = (viewName) => {
      currentView.value = viewName;
      if (viewName === "payment") {
        activeStep.value = 2;
        showCart.value = false;
      } else if (viewName === "summary") {
        activeStep.value = 3;
        showCart.value = true;
      } else if (viewName === "shipping") {
        activeStep.value = 1;
        showCart.value = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                _hoisted_6,
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("div", {
                    class: "step",
                    onClick: _cache[0] || (_cache[0] = ($event) => showView("shipping"))
                  }, [
                    _hoisted_8,
                    createBaseVNode("p", {
                      class: normalizeClass({ active: activeStep.value === 1 })
                    }, "SHIPPING INFORMATION", 2)
                  ]),
                  createBaseVNode("div", {
                    class: "step",
                    onClick: _cache[1] || (_cache[1] = ($event) => showView("payment"))
                  }, [
                    _hoisted_9,
                    createBaseVNode("p", {
                      class: normalizeClass({ active: activeStep.value === 2 })
                    }, "PAYMENT INFORMATION", 2)
                  ]),
                  createBaseVNode("div", {
                    class: "step",
                    onClick: _cache[2] || (_cache[2] = ($event) => showView("summary"))
                  }, [
                    _hoisted_10,
                    createBaseVNode("p", {
                      class: normalizeClass({ active: activeStep.value === 3 })
                    }, "ORDER SUMMARY", 2)
                  ])
                ])
              ]),
              showCart.value ? (openBlock(), createBlock(Cart, { key: 0 })) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, [
                  currentView.value === "shipping" ? (openBlock(), createBlock(ShippingInfo, { key: 0 })) : createCommentVNode("", true),
                  currentView.value === "payment" ? (openBlock(), createBlock(CreditCard, {
                    key: 1,
                    class: "card"
                  })) : createCommentVNode("", true),
                  currentView.value === "payment" ? (openBlock(), createElementBlock("p", {
                    key: 2,
                    class: "giftCard",
                    onClick: _cache[3] || (_cache[3] = ($event) => showGiftCard.value = !showGiftCard.value)
                  }, [
                    !showGiftCard.value ? (openBlock(), createElementBlock("span", _hoisted_13, "ADD GIFT CARD")) : (openBlock(), createElementBlock("span", _hoisted_14, "REMOVE GIFT CARD"))
                  ])) : createCommentVNode("", true),
                  currentView.value === "payment" && showGiftCard.value ? (openBlock(), createBlock(GiftCard, {
                    key: 3,
                    class: "card"
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_15, [
                  currentView.value === "shipping" ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    class: "next-btn",
                    onClick: _cache[4] || (_cache[4] = ($event) => showView("payment"))
                  }, "NEXT")) : createCommentVNode("", true),
                  currentView.value === "payment" ? (openBlock(), createElementBlock("button", {
                    key: 1,
                    class: "next-btn",
                    onClick: _cache[5] || (_cache[5] = ($event) => showView("summary"))
                  }, "NEXT")) : createCommentVNode("", true)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_16, [
              createVNode(CheckoutSummary, {
                checkoutText: "PLACE YOUR ORDER",
                class: "summary",
                onCheckout: _cache[6] || (_cache[6] = () => {
                })
              })
            ])
          ])
        ])
      ], 64);
    };
  }
});
const Checkout_vue_vue_type_style_index_0_scoped_68955890_lang = "";
const Checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-68955890"]]);
export {
  Checkout as default
};
