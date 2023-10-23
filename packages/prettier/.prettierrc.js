const baseConfig = require("./dist/index");

/**
 * https://prettier.io/docs/en/options
 * @type import("prettier").Options
 */

const config = {
  ...baseConfig,
};

module.exports = config;
