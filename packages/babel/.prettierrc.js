const { getPrettierConfig } = require("@harmonix-hub/prettier");

 /** @type {import("prettier").Config} */
const config = {
  ...getPrettierConfig(),
};

module.exports = config;
