// eslint-disable-next-line @typescript-eslint/no-require-imports
const { prettierConfig } = require("@harmonix-hub/prettier");

/** @type {import("prettier").Config} */
const config = {
  ...prettierConfig,
  tabWidth: 2
};

module.exports = config;
