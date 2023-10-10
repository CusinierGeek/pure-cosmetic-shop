import { d as defineComponent, O as withAsyncContext, o as openBlock, c as createElementBlock, f as createBaseVNode, h as unref, t as toDisplayString, M as fetchProductById, _ as _export_sfc, F as Fragment, k as renderList, D as createBlock, E as router, p as pushScopeId, i as popScopeId, r as ref, P as useOrderHistory, Q as Teleport, N as useUser, j as reactive, e as createVNode, n as normalizeClass, I as Icon, y as createCommentVNode } from "./index-ce4a082d.js";
import { C as CustomInput } from "./CustomInput-2316b695.js";
const _hoisted_1$5 = { class: "container-product" };
const _hoisted_2$5 = { class: "product-image" };
const _hoisted_3$5 = ["src"];
const _hoisted_4$5 = { class: "product-name" };
const _hoisted_5$4 = { class: "product-price" };
const _hoisted_6$4 = { class: "product-quanity" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "OrderedProduct",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    async function getProductById(productId) {
      const product2 = await fetchProductById(productId);
      return product2;
    }
    const product = ([__temp, __restore] = withAsyncContext(() => {
      var _a;
      return getProductById((_a = props.product) == null ? void 0 : _a.productId);
    }), __temp = await __temp, __restore(), __temp);
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("img", {
            src: unref(product).image_url
          }, null, 8, _hoisted_3$5)
        ]),
        createBaseVNode("div", _hoisted_4$5, toDisplayString(unref(product).name), 1),
        createBaseVNode("div", _hoisted_5$4, toDisplayString((_a = props.product) == null ? void 0 : _a.quantity) + "$", 1),
        createBaseVNode("div", _hoisted_6$4, toDisplayString((_b = props.product) == null ? void 0 : _b.quantity), 1)
      ]);
    };
  }
});
const OrderedProduct_vue_vue_type_style_index_0_scoped_4e127e21_lang = "";
const OrderedProduct = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-4e127e21"]]);
const _withScopeId$3 = (n) => (pushScopeId("data-v-cf050ffa"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "container" };
const _hoisted_2$4 = { class: "order-header" };
const _hoisted_3$4 = { class: "order-info" };
const _hoisted_4$4 = { class: "order-info-item" };
const _hoisted_5$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("p", { class: "info-label" }, "ORDER PLACED", -1));
const _hoisted_6$3 = { class: "order-info-item" };
const _hoisted_7$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("p", { class: "info-label" }, "TOTAL", -1));
const _hoisted_8$3 = { class: "order-info-item" };
const _hoisted_9$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("p", { class: "info-label" }, "SHIP TO", -1));
const _hoisted_10$2 = { class: "order-info-item" };
const _hoisted_11$1 = { class: "info-label" };
const _hoisted_12$1 = { class: "ordered-products" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Order",
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const goToProductPage = (productId) => {
      router.push(`/products/${productId}`);
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("div", _hoisted_3$4, [
            createBaseVNode("div", _hoisted_4$4, [
              _hoisted_5$3,
              createBaseVNode("p", null, toDisplayString(new Date((_a = props.order) == null ? void 0 : _a.orderDate).toLocaleString()), 1)
            ]),
            createBaseVNode("div", _hoisted_6$3, [
              _hoisted_7$3,
              createBaseVNode("p", null, toDisplayString((_b = props.order) == null ? void 0 : _b.total.toFixed(2)) + " $", 1)
            ]),
            createBaseVNode("div", _hoisted_8$3, [
              _hoisted_9$3,
              createBaseVNode("p", null, toDisplayString((_c = props.order) == null ? void 0 : _c.shippingInfoStreet), 1)
            ]),
            createBaseVNode("div", _hoisted_10$2, [
              createBaseVNode("p", _hoisted_11$1, "ORDER #" + toDisplayString((_d = props.order) == null ? void 0 : _d.orderNumber), 1)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_12$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList((_e = props.order) == null ? void 0 : _e.orderItems, (product) => {
            return openBlock(), createBlock(OrderedProduct, {
              key: product.productId,
              product,
              class: "item",
              onClick: ($event) => goToProductPage(product.productId)
            }, null, 8, ["product", "onClick"]);
          }), 128))
        ])
      ]);
    };
  }
});
const Order_vue_vue_type_style_index_0_scoped_cf050ffa_lang = "";
const Order = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-cf050ffa"]]);
const _withScopeId$2 = (n) => (pushScopeId("data-v-b54fc5e6"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "modal-overlay" };
const _hoisted_2$3 = { class: "modal-container" };
const _hoisted_3$3 = { class: "modal-content" };
const _hoisted_4$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h1", null, "SEE ALL YOUR ORDERS BELOW", -1));
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "OrderHistory",
  emits: ["close-modal"],
  setup(__props, { emit }) {
    const showModal = ref(false);
    const closeModal = () => {
      showModal.value = false;
      emit("close-modal");
    };
    const orderHistoryStore = useOrderHistory();
    const orders = orderHistoryStore.getOrders;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("div", _hoisted_2$3, [
            createBaseVNode("div", { class: "modal-header" }, [
              createBaseVNode("button", {
                onClick: closeModal,
                class: "close-modal"
              }, "×")
            ]),
            createBaseVNode("div", _hoisted_3$3, [
              _hoisted_4$3,
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(orders), (order) => {
                return openBlock(), createBlock(Order, { order }, null, 8, ["order"]);
              }), 256))
            ])
          ])
        ])
      ]);
    };
  }
});
const OrderHistory_vue_vue_type_style_index_0_scoped_b54fc5e6_lang = "";
const OrderHistory = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b54fc5e6"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-03513f0c"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { class: "modal-overlay" };
const _hoisted_2$2 = { class: "modal-container" };
const _hoisted_3$2 = { class: "modal-content" };
const _hoisted_4$2 = { class: "add-card-form" };
const _hoisted_5$2 = { class: "form-group" };
const _hoisted_6$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "cardType",
  class: "card-type-label"
}, "CARD TYPE :", -1));
const _hoisted_7$2 = { class: "card-icons" };
const _hoisted_8$2 = { class: "form-group" };
const _hoisted_9$2 = { class: "form-group" };
const _hoisted_10$1 = { class: "form-group" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PaymentMethods",
  emits: ["close-modal"],
  setup(__props, { emit }) {
    const userStore = useUser();
    const currentUser = userStore.GetUser;
    const formData = reactive({
      cardType: "",
      cardNumber: "",
      expiryDate: "",
      cvv: ""
    });
    const showPayModal = ref(false);
    const selectedCardType = ref("");
    const selectCardType = (type) => {
      selectedCardType.value = type;
      formData.cardType = type;
    };
    const closeModal = () => {
      showPayModal.value = false;
      emit("close-modal");
    };
    const savePaymentMethod = () => {
      const newCard = {
        cardType: formData.cardType,
        cardNumber: formData.cardNumber,
        expiryDate: formData.expiryDate,
        cvv: formData.cvv
      };
      currentUser.cards.push(newCard);
      userStore.addCard(newCard);
      formData.cardType = "";
      formData.cardNumber = "";
      formData.expiryDate = "";
      formData.cvv = "";
      closeModal();
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2$2, [
            createBaseVNode("div", { class: "modal-header" }, [
              createBaseVNode("button", {
                onClick: closeModal,
                class: "close-modal"
              }, "×")
            ]),
            createBaseVNode("div", _hoisted_3$2, [
              createBaseVNode("div", _hoisted_4$2, [
                createBaseVNode("form", null, [
                  createBaseVNode("div", _hoisted_5$2, [
                    _hoisted_6$2,
                    createBaseVNode("div", _hoisted_7$2, [
                      createVNode(unref(Icon), {
                        class: normalizeClass([{ selected: selectedCardType.value === "Visa" }, "visa"]),
                        icon: "logos:visa",
                        width: "40",
                        height: "40",
                        onClick: _cache[0] || (_cache[0] = ($event) => selectCardType("Visa"))
                      }, null, 8, ["class"]),
                      createVNode(unref(Icon), {
                        class: normalizeClass([{ selected: selectedCardType.value === "MasterCard" }, "mastercard"]),
                        icon: "logos:mastercard",
                        width: "40",
                        height: "40",
                        onClick: _cache[1] || (_cache[1] = ($event) => selectCardType("MasterCard"))
                      }, null, 8, ["class"]),
                      createVNode(unref(Icon), {
                        class: normalizeClass([{ selected: selectedCardType.value === "PayPal" }, "paypal"]),
                        icon: "logos:paypal",
                        width: "30",
                        height: "30",
                        onClick: _cache[2] || (_cache[2] = ($event) => selectCardType("PayPal"))
                      }, null, 8, ["class"])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_8$2, [
                    createVNode(CustomInput, {
                      label: "CARD NUMBER :",
                      type: "credit-card",
                      required: "",
                      "min-length": "16",
                      modelValue: formData.cardNumber,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.cardNumber = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_9$2, [
                    createVNode(CustomInput, {
                      label: "EXPIRY DATE :",
                      type: "expiry-date",
                      required: "",
                      "min-length": "8",
                      modelValue: formData.expiryDate,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.expiryDate = $event),
                      placeholder: "DD/MM/YY"
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_10$1, [
                    createVNode(CustomInput, {
                      label: "CVV :",
                      type: "cvv",
                      required: "",
                      "min-length": "3",
                      modelValue: formData.cvv,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.cvv = $event),
                      placeholder: "XXX"
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("button", {
                    onClick: savePaymentMethod,
                    type: "submit"
                  }, "ADD CARD")
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
const PaymentMethods_vue_vue_type_style_index_0_scoped_03513f0c_lang = "";
const PaymentMethods = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-03513f0c"]]);
const _hoisted_1$1 = { class: "modal-overlay" };
const _hoisted_2$1 = { class: "modal-container" };
const _hoisted_3$1 = { class: "modal-content" };
const _hoisted_4$1 = { class: "add-address-form" };
const _hoisted_5$1 = { class: "form-group" };
const _hoisted_6$1 = { class: "form-group" };
const _hoisted_7$1 = { class: "form-group" };
const _hoisted_8$1 = { class: "form-group" };
const _hoisted_9$1 = { class: "form-group" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Address",
  props: {
    update: {
      type: Boolean,
      required: false
    },
    address: {
      type: Object,
      required: false
    }
  },
  emits: ["close-modal"],
  setup(__props, { emit }) {
    var _a, _b, _c, _d, _e, _f;
    const props = __props;
    const userStore = useUser();
    const showAddressModal = ref(false);
    const doorNumber = ref(props.update ? ((_a = props.address) == null ? void 0 : _a.doorNumber) || "" : "");
    const street = ref(props.update ? ((_b = props.address) == null ? void 0 : _b.street) || "" : "");
    const city = ref(props.update ? ((_c = props.address) == null ? void 0 : _c.city) || "" : "");
    const zipcode = ref(props.update ? ((_d = props.address) == null ? void 0 : _d.zipcode) || "" : "");
    const country = ref(props.update ? ((_e = props.address) == null ? void 0 : _e.country) || "" : "");
    const _id = ref(((_f = props.address) == null ? void 0 : _f._id) || "");
    const isUpdating = ref(props.update);
    const closeModal = () => {
      showAddressModal.value = false;
      emit("close-modal");
    };
    const saveAddress = () => {
      const address = {
        doorNumber: doorNumber.value,
        street: street.value,
        city: city.value,
        zipcode: zipcode.value,
        country: country.value
      };
      if (isUpdating.value) {
        address._id = _id.value;
        userStore.updateAddress(address);
      } else {
        userStore.addAddress(address);
      }
      closeModal();
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("div", { class: "modal-header" }, [
              createBaseVNode("button", {
                onClick: closeModal,
                class: "close-modal"
              }, "×")
            ]),
            createBaseVNode("div", _hoisted_3$1, [
              createBaseVNode("div", _hoisted_4$1, [
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_5$1, [
                    createVNode(CustomInput, {
                      label: "STREET NUMBER :",
                      type: "street-number",
                      required: "",
                      "min-length": "1",
                      modelValue: doorNumber.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => doorNumber.value = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_6$1, [
                    createVNode(CustomInput, {
                      label: "STREET :",
                      type: "street",
                      required: "",
                      "min-length": "4",
                      modelValue: street.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => street.value = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_7$1, [
                    createVNode(CustomInput, {
                      label: "CITY :",
                      type: "city",
                      required: "",
                      "min-length": "4",
                      modelValue: city.value,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => city.value = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_8$1, [
                    createVNode(CustomInput, {
                      label: "COUNTRY :",
                      type: "country",
                      required: "",
                      "min-length": "4",
                      modelValue: country.value,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => country.value = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_9$1, [
                    createVNode(CustomInput, {
                      label: "ZIP CODE :",
                      type: "zip-code",
                      required: "",
                      "min-length": "5",
                      modelValue: zipcode.value,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => zipcode.value = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  isUpdating.value ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    onClick: saveAddress
                  }, "UPDATE")) : (openBlock(), createElementBlock("button", {
                    key: 1,
                    onClick: saveAddress
                  }, "SAVE"))
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
const Address_vue_vue_type_style_index_0_scoped_ecfc3a97_lang = "";
const Address = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ecfc3a97"]]);
const _withScopeId = (n) => (pushScopeId("data-v-a2ea91e9"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "text" };
const _hoisted_2 = { class: "banner" };
const _hoisted_3 = { class: "containers" };
const _hoisted_4 = { class: "container" };
const _hoisted_5 = { class: "header" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "title" }, "ORDER HISTORY", -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "details" }, "View your orders below", -1));
const _hoisted_8 = { class: "container" };
const _hoisted_9 = { class: "header" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "title" }, "PAYMENT METHODS", -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "details" }, "View your payment methods below", -1));
const _hoisted_12 = { class: "card-container" };
const _hoisted_13 = { class: "card-list" };
const _hoisted_14 = { class: "container" };
const _hoisted_15 = { class: "header" };
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "title" }, "ADDRESSES", -1));
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "details" }, "View your addresses below", -1));
const _hoisted_18 = { class: "address-container" };
const _hoisted_19 = { class: "address-list" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Profile",
  setup(__props) {
    var _a;
    const userStore = useUser();
    const currentUser = userStore.GetUser;
    const showOrderHistoryModal = ref(false);
    const showPaymentMethods = ref(false);
    const showAddressModal = ref(false);
    const selectedAddress = ref();
    const isUpdating = ref(false);
    const orderHistoryStore = useOrderHistory();
    const userId = (_a = userStore.GetUser) == null ? void 0 : _a._id;
    orderHistoryStore.fetchOrders(userId ? userId : "");
    const openOrderHistoryModal = () => {
      showOrderHistoryModal.value = true;
    };
    const closeOrderHistoryModal = () => {
      showOrderHistoryModal.value = false;
    };
    const openPaymentModal = () => {
      showPaymentMethods.value = true;
    };
    const closePaymentModal = () => {
      showPaymentMethods.value = false;
    };
    const openAddressModal = () => {
      showAddressModal.value = true;
      isUpdating.value = false;
    };
    const closeAddressModal = () => {
      showAddressModal.value = false;
    };
    const openEditAddressModal = (address) => {
      selectedAddress.value = { ...address };
      showAddressModal.value = true;
      isUpdating.value = true;
    };
    const deleteAddress = async (addressId) => {
      if (currentUser.addresses && addressId) {
        const index = currentUser.addresses.findIndex((address) => address._id === addressId);
        if (index !== -1) {
          currentUser.addresses.splice(index, 1);
        }
        userStore.deleteAddress(addressId);
      }
    };
    const maskedCardNumber = (cardNumber) => {
      if (cardNumber && cardNumber.length >= 16) {
        cardNumber.substring(0, 14);
        const maskedDigits = "*".repeat(14);
        return `${maskedDigits}${cardNumber.substring(14)}`;
      }
      return "";
    };
    const deleteCard = (cardId) => {
      if (currentUser.cards && cardId) {
        const index = currentUser.cards.findIndex((card) => card._id === cardId);
        if (index !== -1) {
          currentUser.cards.splice(index, 1);
        }
        userStore.deleteCard(cardId);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("h1", _hoisted_2, "Hello, " + toDisplayString(unref(currentUser).firstName) + " !", 1)
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              _hoisted_6,
              _hoisted_7,
              createVNode(unref(Icon), {
                class: "icon",
                icon: "solar:history-line-duotone",
                width: "60",
                height: "60"
              })
            ]),
            showOrderHistoryModal.value ? (openBlock(), createBlock(OrderHistory, {
              key: 0,
              onCloseModal: closeOrderHistoryModal
            })) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: "orders",
              onClick: openOrderHistoryModal
            }, "Your orders >")
          ]),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              _hoisted_10,
              _hoisted_11,
              createVNode(unref(Icon), {
                class: "icon",
                icon: "fluent:payment-16-regular",
                width: "60",
                height: "60"
              })
            ]),
            createBaseVNode("div", _hoisted_12, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(currentUser).cards, (card) => {
                return openBlock(), createElementBlock("div", {
                  class: "card",
                  key: card._id
                }, [
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("p", null, "TYPE : " + toDisplayString(card.cardType), 1),
                    createBaseVNode("p", null, "CARD NUMBER : " + toDisplayString(maskedCardNumber(card.cardNumber)), 1),
                    createBaseVNode("p", null, "EXPIRY DATE : " + toDisplayString(new Date(card.expiryDate).toLocaleDateString()), 1),
                    createBaseVNode("p", null, "CVV : " + toDisplayString(card.cvv), 1),
                    card._id ? (openBlock(), createBlock(unref(Icon), {
                      key: 0,
                      class: "delete-card",
                      icon: "fluent:delete-20-regular",
                      onClick: ($event) => deleteCard(card._id)
                    }, null, 8, ["onClick"])) : createCommentVNode("", true)
                  ])
                ]);
              }), 128))
            ]),
            showPaymentMethods.value ? (openBlock(), createBlock(PaymentMethods, {
              key: 0,
              onCloseModal: closePaymentModal
            })) : createCommentVNode("", true),
            createVNode(unref(Icon), {
              icon: "fluent:form-new-20-regular",
              width: "40",
              height: "40",
              class: "view",
              onClick: openPaymentModal
            })
          ]),
          createBaseVNode("div", _hoisted_14, [
            createBaseVNode("div", _hoisted_15, [
              _hoisted_16,
              _hoisted_17,
              createVNode(unref(Icon), {
                class: "icon",
                icon: "iconamoon:home-light",
                width: "60",
                height: "60"
              })
            ]),
            createBaseVNode("div", _hoisted_18, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(currentUser).addresses, (address) => {
                return openBlock(), createElementBlock("div", {
                  class: "address",
                  key: address._id
                }, [
                  createBaseVNode("div", _hoisted_19, [
                    createBaseVNode("p", null, toDisplayString(address.doorNumber) + ", " + toDisplayString(address.street), 1),
                    createBaseVNode("p", null, toDisplayString(address.city), 1),
                    createBaseVNode("p", null, toDisplayString(address.country) + ", " + toDisplayString(address.zipcode), 1),
                    showAddressModal.value ? (openBlock(), createBlock(Address, {
                      key: 0,
                      update: isUpdating.value,
                      address: selectedAddress.value,
                      onCloseModal: closeAddressModal
                    }, null, 8, ["update", "address"])) : createCommentVNode("", true),
                    createVNode(unref(Icon), {
                      class: "update-card",
                      icon: "streamline:interface-edit-write-2-change-document-edit-modify-paper-pencil-write-writing",
                      width: "15",
                      onClick: ($event) => openEditAddressModal(address)
                    }, null, 8, ["onClick"]),
                    address._id ? (openBlock(), createBlock(unref(Icon), {
                      key: 1,
                      class: "del-card",
                      icon: "fluent:delete-20-regular",
                      width: "18",
                      onClick: ($event) => deleteAddress(address._id)
                    }, null, 8, ["onClick"])) : createCommentVNode("", true)
                  ])
                ]);
              }), 128))
            ]),
            showAddressModal.value ? (openBlock(), createBlock(Address, {
              key: 0,
              update: isUpdating.value,
              address: selectedAddress.value,
              onCloseModal: closeAddressModal
            }, null, 8, ["update", "address"])) : createCommentVNode("", true),
            createVNode(unref(Icon), {
              icon: "fluent:form-new-20-regular",
              width: "40",
              height: "40",
              class: "view2",
              onClick: openAddressModal
            })
          ])
        ])
      ], 64);
    };
  }
});
const Profile_vue_vue_type_style_index_0_scoped_a2ea91e9_lang = "";
const Profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a2ea91e9"]]);
export {
  Profile as default
};
