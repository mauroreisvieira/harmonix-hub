import type { Linter } from "eslint";

/**
 * Eslint configuration object extending the most performant and
 * commonly used configurations, it alo has some overrides to prevent conflicts with prettier
 */
const config: Linter.Config = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  plugins: ["@typescript-eslint/eslint-plugin", "@typescript-eslint", "react-hooks", "prettier"],
  rules: {
    "react/jsx-key": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
    "react/self-closing-comp": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
  ignorePatterns: ["dist"],
};

export default config;

module.exports = config;
