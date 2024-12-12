import prettierConfig from "eslint-config-prettier";
import hxh from "@harmonix-hub/eslint";

/** @type import("eslint").Linter.Config */
export default [
  {
    files: ["*.ts", "*.tsx"]
  },
  {
    ignores: ["dist", "node_modules", "/**/*.d.ts", "**/*.js"]
  },
  ...hxh.tsConfigs,
  hxh.reactConfigs,
  prettierConfig,
];
