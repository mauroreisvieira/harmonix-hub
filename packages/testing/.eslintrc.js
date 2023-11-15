const { getEslintConfig } = require("@harmonix-hub/eslint");

/** @type import("eslint").Linter.Config */
const config = {
  ...getEslintConfig(),
};

module.exports = config;
