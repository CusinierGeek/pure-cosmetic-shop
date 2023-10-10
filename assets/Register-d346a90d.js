import { C as CustomInput } from "./CustomInput-2316b695.js";
import { d as defineComponent, j as reactive, o as openBlock, c as createElementBlock, e as createVNode, f as createBaseVNode, w as withCtx, g as createTextVNode, h as unref, R as RouterLink, p as pushScopeId, i as popScopeId, _ as _export_sfc, D as createBlock, V as createUser, E as router } from "./index-ce4a082d.js";
const _withScopeId = (n) => (pushScopeId("data-v-5e8e080a"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "form-container" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "REGISTER", -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RegisterModal",
  emits: ["register"],
  setup(__props, { emit }) {
    const state = reactive({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
    const register = () => {
      emit("register", state);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createVNode(CustomInput, {
          class: "input",
          label: "FIRST NAME",
          type: "text",
          placeholder: "Enter your first name",
          name: "first-name",
          id: "first-name",
          required: "",
          autocomplete: "given-name",
          "min-length": "2",
          modelValue: state.firstName,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.firstName = $event)
        }, null, 8, ["modelValue"]),
        createVNode(CustomInput, {
          class: "input",
          label: "LAST NAME",
          type: "text",
          placeholder: "Enter your last name",
          name: "last-name",
          id: "last-name",
          required: "",
          autocomplete: "family-name",
          "min-length": "2",
          modelValue: state.lastName,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.lastName = $event)
        }, null, 8, ["modelValue"]),
        createVNode(CustomInput, {
          class: "input",
          label: "EMAIL",
          type: "email",
          placeholder: "Enter your email",
          name: "email",
          id: "email",
          required: "",
          autocomplete: "email",
          "min-length": "5",
          modelValue: state.email,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => state.email = $event)
        }, null, 8, ["modelValue"]),
        createVNode(CustomInput, {
          class: "input",
          label: "PASSWORD",
          type: "password",
          placeholder: "Enter your password",
          name: "password",
          id: "password",
          required: "",
          autocomplete: "new-password",
          "min-length": "8",
          modelValue: state.password,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.password = $event)
        }, null, 8, ["modelValue"]),
        createBaseVNode("button", { onClick: register }, "REGISTER"),
        createVNode(unref(RouterLink), {
          class: "link",
          to: "/login"
        }, {
          default: withCtx(() => [
            createTextVNode("Already have an account? Login")
          ]),
          _: 1
        })
      ]);
    };
  }
});
const RegisterModal_vue_vue_type_style_index_0_scoped_5e8e080a_lang = "";
const RegisterModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5e8e080a"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Register",
  setup(__props) {
    const SignUp = (state) => {
      const result = createUser(state);
      result.then(() => {
        router.push("/login");
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RegisterModal, {
        onRegister: SignUp,
        class: "register"
      });
    };
  }
});
const Register_vue_vue_type_style_index_0_scoped_0455ae39_lang = "";
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0455ae39"]]);
export {
  Register as default
};
