/** @type import("eslint").Linter.Config */
const config = {
  extends: "@code-harmony/eslint",
  rules: {
    "unicorn/prefer-module": 0,
  },
};

module.exports = config;
