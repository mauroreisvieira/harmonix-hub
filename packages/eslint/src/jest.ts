// Plugins
import jest from "eslint-plugin-jest";
import globals from "globals";
// Types
import type { Linter } from "eslint";

const languageOptions: Linter.Config["languageOptions"] = {
  globals: {
    ...globals.browser,
    ...globals.node,
    ...globals.jest,
    it: "readonly",
    test: "readonly",
    expect: "readonly",
    indexedDB: "readonly",
    describe: "readonly"
  }
};

export const jestConfigs: Linter.Config = {
  ...jest.configs["flat/recommended"],
  plugins: {
    jest
  },
  languageOptions,
  rules: {
    "jest/no-mocks-import": "off",
    // Added this so test file don't give error when accessing DOM element using DOM api
    "testing-library/no-node-access": "off"
  }
};
