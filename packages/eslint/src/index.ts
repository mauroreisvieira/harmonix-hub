import type { Linter } from "eslint";

/**
 * Eslint configuration object extending the most performant and
 * commonly used configurations, it alo has some overrides to prevent conflicts with prettier
 */

const config: Linter.Config = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // https://www.npmjs.com/package/eslint-plugin-import
    "plugin:import/recommended",
    // https://www.npmjs.com/package/eslint-plugin-workspaces
    "plugin:workspaces/recommended",
    // https://www.npmjs.com/package/eslint-plugin-prettier
    "plugin:prettier/recommended",
  ],
  rules: {
    "tsdoc/syntax": "warn",
    // Sync with linters, formatters, git and editor configs
    // prevent git changes caused from contributors using different OS's
    "linebreak-style": ["error", "unix"],
    // Sync with linters, formatters and editor configs
    "max-len": [
      "error",
      {
        code: 100,
        ignoreComments: true,
        ignoreStrings: true,
      },
    ],
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["**/*.test.ts*"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
    },
    {
      files: ["**/*.ts*"],
      plugins: ["eslint-plugin-tsdoc"],
      extends: [
        // https://www.npmjs.com/package/eslint-config-ts-important-stuff
        "ts-important-stuff",
        // https://www.npmjs.com/package/eslint-config-ts-react-important-stuff
        "ts-react-important-stuff",
        // https://www.npmjs.com/package/eslint-config-standard-with-typescript
        "standard-with-typescript",
        // https://www.npmjs.com/package/eslint-plugin-etc
        "plugin:etc/recommended",
        // https://www.npmjs.com/package/eslint-plugin-unicorn
        "plugin:unicorn/recommended",
        // https://www.npmjs.com/package/eslint-plugin-prettier (override plugins above)
        "plugin:prettier/recommended",
      ],
      rules: {
        // Prefer component arrow functions
        "react/function-component-definition": [
          1,
          {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
          },
        ],
        // Ignore to allow usage of tsconfig aliases
        "import/no-unresolved": 1,
        // Allow abbreviations
        "unicorn/prevent-abbreviations": [
          1,
          {
            checkProperties: true,
            allowList: {
              db: true,
              param: true,
              params: true,
              props: true,
              Props: true,
            },
          },
        ],
        "@typescript-eslint/strict-boolean-expressions": 1,
        "unicorn/filename-case": [
          1,
          {
            cases: {
              kebabCase: true,
              pascalCase: true,
            },
          },
        ],
        "react/button-has-type": 1,
        "no-implicit-coercion": 1,
        "unicorn/no-array-reduce": 1,
        "unicorn/no-array-for-each": 1,
        "capitalized-comments": 1,
      },
    },
  ],
  ignorePatterns: ["dist"],
};

export default config;

module.exports = config;
