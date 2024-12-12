// Plugins
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
// Types
import type { Linter, ESLint } from "eslint";

export const reactConfigs: Linter.Config = {
  plugins: {
    ...jsxA11y.flatConfigs.strict.plugins,
    "react": react as unknown as ESLint.Plugin,
    "react-hooks": reactHooks
  },
  settings: { react: { version: "detect" } },
  rules: {
    ...reactHooks.configs.recommended.rules,
    ...jsxA11y.configs.recommended.rules,
    "react/jsx-key": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-indent-props": ["error", 2],
    "react/self-closing-comp": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "jsx-a11y/no-noninteractive-element-interactions": "warn"
  }
};
