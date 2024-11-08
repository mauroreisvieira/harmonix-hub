import type { Linter } from "eslint";

interface EslintConfigOptions {
  /** Whether to enable React-specific ESLint rules. */
  useReact?: boolean;
}

/**
 * Generate ESLint configuration based on provided options.
 *
 * @param options Configuration options.
 * @returns ESLint configuration object.
 */
export const getEslintConfig = (options?: EslintConfigOptions): Linter.Config => {
  return {
    env: {
      es2021: true,
      node: true,
      jest: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:eslint-comments/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      ...(options?.useReact
        ? [
            "plugin:react/recommended",
            "plugin:react-hooks/recommended",
            "plugin:jsx-a11y/recommended",
          ]
        : []),
    ],
    parserOptions: {
      sourceType: "module",
      ecmaVersion: 2020,
    },
    plugins: [
      "@typescript-eslint/eslint-plugin",
      "@typescript-eslint",
      "prettier",
      ...(options?.useReact ? ["react-hooks"] : []),
    ],
    rules: {
      "no-console": "error",
      ...(options?.useReact
        ? {
            "react/jsx-key": "off",
            "react/prop-types": "off",
            "react/display-name": "off",
            "react/jsx-first-prop-new-line": ["error", "multiline"],
            "react/jsx-indent-props": ["error", 2],
            "react/self-closing-comp": "error",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "error",
            "jsx-a11y/no-noninteractive-element-interactions": "warn",
          }
        : {}),
    },
    ignorePatterns: ["dist"],
  };
};
