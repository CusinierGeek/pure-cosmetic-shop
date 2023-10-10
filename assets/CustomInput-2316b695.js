import { d as defineComponent, r as ref, a as computed, o as openBlock, c as createElementBlock, f as createBaseVNode, t as toDisplayString, l as withDirectives, Y as vModelText, n as normalizeClass, $ as vModelDynamic, y as createCommentVNode, _ as _export_sfc } from "./index-ce4a082d.js";
const _hoisted_1 = { class: "form-container" };
const _hoisted_2 = ["name", "id", "required", "disabled", "readonly", "autofocus", "autocomplete"];
const _hoisted_3 = ["type", "placeholder", "name", "id", "required", "disabled", "readonly", "autofocus", "autocomplete"];
const _hoisted_4 = {
  key: 2,
  class: "error"
};
const _hoisted_5 = {
  key: 3,
  class: "error"
};
const _hoisted_6 = {
  key: 4,
  class: "error"
};
const _hoisted_7 = {
  key: 5,
  class: "error"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CustomInput",
  props: {
    label: String,
    type: String,
    placeholder: String,
    modelValue: {
      type: String,
      required: true
    },
    name: String,
    id: String,
    required: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    autocomplete: String,
    minLength: {
      type: String,
      default: "0"
    },
    maxLength: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const data = ref(props.modelValue);
    const hasFocus = ref(false);
    const isWriting = computed(() => hasFocus.value && data.value.length);
    const touched = ref(false);
    const hasError = computed(() => !hasFocus.value && touched.value && data.value.length < Number(props.minLength));
    const isValid = computed(() => !hasFocus.value && touched.value && !hasError.value);
    const updateValue = (event) => {
      const inputElement = event.target;
      emit("update:modelValue", inputElement.value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("label", null, toDisplayString(__props.label), 1),
        __props.type === "credit-card" ? withDirectives((openBlock(), createElementBlock("input", {
          key: 0,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => data.value = $event),
          onInput: updateValue,
          onFocus: _cache[1] || (_cache[1] = ($event) => (hasFocus.value = true, touched.value = true)),
          onBlur: _cache[2] || (_cache[2] = ($event) => hasFocus.value = false),
          class: normalizeClass({ isWriting: isWriting.value, hasError: hasError.value, isValid: isValid.value }),
          name: __props.name,
          id: __props.id,
          required: __props.required,
          disabled: __props.disabled,
          readonly: __props.readonly,
          autofocus: __props.autofocus,
          autocomplete: __props.autocomplete,
          pattern: "[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}",
          placeholder: "XXXX XXXX XXXX XXXX"
        }, null, 42, _hoisted_2)), [
          [vModelText, data.value]
        ]) : withDirectives((openBlock(), createElementBlock("input", {
          key: 1,
          type: __props.type,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => data.value = $event),
          onInput: updateValue,
          onFocus: _cache[4] || (_cache[4] = ($event) => (hasFocus.value = true, touched.value = true)),
          onBlur: _cache[5] || (_cache[5] = ($event) => hasFocus.value = false),
          class: normalizeClass({ isWriting: isWriting.value, hasError: hasError.value, isValid: isValid.value }),
          placeholder: __props.placeholder,
          name: __props.name,
          id: __props.id,
          required: __props.required,
          disabled: __props.disabled,
          readonly: __props.readonly,
          autofocus: __props.autofocus,
          autocomplete: __props.autocomplete
        }, null, 42, _hoisted_3)), [
          [vModelDynamic, data.value]
        ]),
        hasError.value && __props.type === "email" ? (openBlock(), createElementBlock("p", _hoisted_4, "Please enter a valid email address")) : createCommentVNode("", true),
        hasError.value && __props.type === "password" ? (openBlock(), createElementBlock("p", _hoisted_5, " Password must be at least " + toDisplayString(__props.minLength) + " characters long ", 1)) : createCommentVNode("", true),
        hasError.value && __props.type === "text" ? (openBlock(), createElementBlock("p", _hoisted_6, "Please enter at least " + toDisplayString(__props.minLength) + " characters", 1)) : createCommentVNode("", true),
        hasError.value && __props.type === "credit-card" ? (openBlock(), createElementBlock("p", _hoisted_7, "Please enter a valid credit card number")) : createCommentVNode("", true)
      ]);
    };
  }
});
const CustomInput_vue_vue_type_style_index_0_scoped_ad4810a8_lang = "";
const CustomInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ad4810a8"]]);
export {
  CustomInput as C
};
