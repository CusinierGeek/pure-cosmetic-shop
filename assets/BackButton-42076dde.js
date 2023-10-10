import { d as defineComponent, J as useRouter, o as openBlock, c as createElementBlock, f as createBaseVNode, e as createVNode, h as unref, I as Icon, _ as _export_sfc } from "./index-ce4a082d.js";
const _hoisted_1 = { id: "btn_group" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BackButton",
  setup(__props) {
    const router = useRouter();
    const goBack = () => {
      router.go(-1);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("button", {
          onClick: goBack,
          type: "button"
        }, [
          createVNode(unref(Icon), {
            icon: "ep:back",
            class: "icon"
          })
        ])
      ]);
    };
  }
});
const BackButton_vue_vue_type_style_index_0_scoped_bafb778f_lang = "";
const BackButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bafb778f"]]);
export {
  BackButton as B
};
