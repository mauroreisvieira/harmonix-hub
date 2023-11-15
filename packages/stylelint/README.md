# @harmonix-hub/stylelint

This package provides Stylelint configurations for projects developed with Harmonix hub.

## Installation

You can install this Stylelint configuration package using npm.

```bash
npm install @harmonix-hub/stylelint --save-dev
```

## Usage

To use the Stylelint configurations provided by this package, create an Stylelint configuration file in your project directory (e.g., `stylelint.config.js`), and extend the configuration from `@harmonix-hub/stylelint`.

Example `stylelint.config.js` configuration file:

```js
const { getStyleLintConfig } = require("@harmonix-hub/stylelint");

const baseConfig = getStyleLintConfig();

/** @type {import("stylelint").Config} */
module.exports = {
  /**
   * Use main configuration from shared infrastructure
   */
  ...baseConfig,
  /**
   * Add additional configurations below
   * When adding a new config entry,
   */
  ignoreFiles: [...(baseConfig.ignoreFiles || []), "example**"],
};
```

By extending `@harmonix-hub/stylelint`, you inherit the recommended ESLint rules for Harmonix hub projects.
You can also add or override rules in your project-specific ESLint configuration file.
