/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "plugin:@typescript-eslint/recommended"],

  parser: "vue-eslint-parser",

  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },

  plugins: ["vue", "@typescript-eslint", "pug"],

  rules: {
    // override/add rules settings here, such as:

    "vue/require-default-prop": "off",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],

    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 10,
        },
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "any",
          component: "always",
        },
      },
    ],
  },
};
