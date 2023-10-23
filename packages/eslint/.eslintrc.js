/** @type import("eslint").Linter.Config */

const config = {
  extends: "./dist/index.js",
  rules: {
    "unicorn/prefer-module": 0,
  },
};

module.exports = config;
