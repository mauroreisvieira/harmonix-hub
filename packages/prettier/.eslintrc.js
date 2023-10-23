module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  rules: {
    "unicorn/prefer-module": 0,
  },
  ignorePatterns: ["dist"],
};
