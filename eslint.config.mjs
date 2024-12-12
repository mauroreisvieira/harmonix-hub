import tsConfig from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import harmonixConfig from "@harmonix-hub/eslint";

/** @type import("eslint").Linter.Config */
export default [
  {
    files: ["*.ts", "*.tsx"]
  },
  {
    ignores: ["dist", "node_modules", "**/*.js"]
  },
  ...tsConfig.configs.recommended,
  harmonixConfig.tsConfigs,
  harmonixConfig.reactConfigs,
  harmonixConfig.jestConfigs,
  prettierConfig,
];
