/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    /*
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    */
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "prettier/vue",
  ],
};
