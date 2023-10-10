import { r as ref, a as computed, z as onMounted, Z as onUnmounted, d as defineComponent, u as useProducts, h as unref, o as openBlock, c as createElementBlock, f as createBaseVNode, t as toDisplayString, y as createCommentVNode, p as pushScopeId, i as popScopeId, _ as _export_sfc } from "./index-ce4a082d.js";
function useCountdown(endDateString, onCountdownEnd) {
  const endDate = new Date(endDateString || "2023-12-31");
  const now = ref(/* @__PURE__ */ new Date());
  const timer = ref(null);
  const timeRemaining = computed(() => endDate.getTime() - now.value.getTime());
  const days = computed(() => Math.floor(timeRemaining.value / (1e3 * 60 * 60 * 24)));
  const hours = computed(() => Math.floor(timeRemaining.value % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)));
  const minutes = computed(() => Math.floor(timeRemaining.value % (1e3 * 60 * 60) / (1e3 * 60)));
  const seconds = computed(() => Math.floor(timeRemaining.value % (1e3 * 60) / 1e3));
  onMounted(() => {
    timer.value = setInterval(() => {
      now.value = /* @__PURE__ */ new Date();
      if (now.value >= endDate) {
        if (timer.value)
          clearInterval(timer.value);
        if (onCountdownEnd)
          onCountdownEnd();
      }
    }, 1e3);
  });
  onUnmounted(() => {
    if (timer.value)
      clearInterval(timer.value);
  });
  return { days, hours, minutes, seconds, timeRemaining };
}
const _withScopeId = (n) => (pushScopeId("data-v-6deda778"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "sales-ribbon"
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "title" }, "SALE", -1));
const _hoisted_3 = { class: "discount" };
const _hoisted_4 = { class: "timer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SalesRibbon",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const productsStore = useProducts();
    const handleCountdownEnd = () => {
      productsStore.removeSale(props.product.id);
    };
    const discountEndDate = computed(() => {
      var _a;
      return (_a = props.product.discount) == null ? void 0 : _a.end_date;
    });
    const { days, hours, minutes, seconds, timeRemaining } = useCountdown(discountEndDate.value, handleCountdownEnd);
    return (_ctx, _cache) => {
      return props.product.discount && unref(timeRemaining) > 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, toDisplayString(props.product.discount.percent) + "% OFF", 1),
        createBaseVNode("div", _hoisted_4, "END IN : " + toDisplayString(unref(days)) + "d " + toDisplayString(unref(hours)) + "h " + toDisplayString(unref(minutes)) + "m " + toDisplayString(unref(seconds)) + "s", 1)
      ])) : createCommentVNode("", true);
    };
  }
});
const SalesRibbon_vue_vue_type_style_index_0_scoped_6deda778_lang = "";
const SalesRibbon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6deda778"]]);
export {
  SalesRibbon as S
};
