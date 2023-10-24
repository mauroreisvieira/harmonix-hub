const { getPrettierConfig } = require("./src/index");

 /** @type {import("prettier").Config} */
const config = {
  ...getPrettierConfig(),
};

module.exports = config;
