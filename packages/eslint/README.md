# @harmonix-hub/eslint

This package provides ESLint configurations for projects developed with Harmonix hub.

## Installation

You can install this ESLint configuration package using npm.

```bash
npm install eslint-config-prettier @harmonix-hub/eslint --save-dev
```

## Usage

To use the ESLint configurations provided by this package, create an ESLint configuration file in your project directory (e.g., `eslint.config.mjs`), apply the configuration from `@harmonix-hub/eslint`.

Example `eslint.config.mjs` configuration file:

```js
import prettierConfig from "eslint-config-prettier";
import hxh from "@harmonix-hub/eslint";

/** @type import("eslint").Linter.Config */
export default [
  {
    files: ["*.ts", "*.tsx"]
  },
  {
    ignores: ["dist", "node_modules", "**/*.js"]
  },
  ...hxh.tsConfigs,
  hxh.reactConfigs,
  hxh.jestConfigs,
  prettierConfig,
];

```

By extending `@harmonix-hub/eslint`, you inherit the recommended ESLint rules for Harmonix hub projects.
You can also add or override rules in your project-specific ESLint configuration file.
