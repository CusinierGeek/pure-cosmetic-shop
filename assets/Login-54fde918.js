import { C as CustomInput } from "./CustomInput-2316b695.js";
import { d as defineComponent, j as reactive, o as openBlock, c as createElementBlock, e as createVNode, f as createBaseVNode, w as withCtx, g as createTextVNode, h as unref, R as RouterLink, p as pushScopeId, i as popScopeId, _ as _export_sfc, D as createBlock, U as signIn, E as router } from "./index-ce4a082d.js";
const _withScopeId = (n) => (pushScopeId("data-v-3fc4952d"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "form-container" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "LOGIN", -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LoginModal",
  emits: ["signIn"],
  setup(__props, { emit }) {
    const state = reactive({
      email: "",
      password: ""
    });
    const signIn2 = () => {
      emit("signIn", state);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createVNode(CustomInput, {
          class: "input",
          label: "EMAIL",
          type: "email",
          placeholder: "Email",
          name: "email",
          id: "email",
          required: "",
          autocomplete: "email",
          "min-length": "5",
          modelValue: state.email,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.email = $event)
        }, null, 8, ["modelValue"]),
        createVNode(CustomInput, {
          class: "input",
          label: "PASSWORD",
          type: "password",
          placeholder: "Password",
          name: "password",
          id: "password",
          required: "",
          autocomplete: "new-password",
          "min-length": "3",
          modelValue: state.password,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.password = $event)
        }, null, 8, ["modelValue"]),
        createBaseVNode("button", { onClick: signIn2 }, "LOGIN"),
        createVNode(unref(RouterLink), {
          class: "link",
          to: "/register"
        }, {
          default: withCtx(() => [
            createTextVNode("Don't have an account? Register ")
          ]),
          _: 1
        })
      ]);
    };
  }
});
const LoginModal_vue_vue_type_style_index_0_scoped_3fc4952d_lang = "";
const LoginModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3fc4952d"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Login",
  setup(__props) {
    const login = (state) => {
      const result = signIn(state);
      result.then(() => {
        router.push({ name: "Home" });
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(LoginModal, {
        onSignIn: login,
        class: "login"
      });
    };
  }
});
const Login_vue_vue_type_style_index_0_scoped_af5d0675_lang = "";
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-af5d0675"]]);
export {
  Login as default
};
