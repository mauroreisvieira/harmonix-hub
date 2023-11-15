const { getEslintConfig } = require("./dist/index");

const baseConfig = getEslintConfig();

/** @type import("eslint").Linter.Config */
const config = {
  ...baseConfig,
  parserOptions: {
    ...baseConfig.parserOptions,
    project: ["./tsconfig.json"],
  },
  ignorePatterns: [...(baseConfig.ignorePatterns || []), "example**"],
};

module.exports = config;
