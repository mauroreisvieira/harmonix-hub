# @harmonix-hub/eslint

This package provides ESLint configurations for projects developed with Harmonix hub.

## Installation

You can install this ESLint configuration package using npm.

```bash
npm install @harmonix-hub/eslint --save-dev
```

## Usage

To use the ESLint configurations provided by this package, create an ESLint configuration file in your project directory (e.g., `.eslintrc.js`, `.eslintrc.json`), and extend the configuration from `@harmonix-hub/eslint`.

Example `.eslintrc.js` configuration file:

```js
const { getEslintConfig } = require("@harmonix-hub/eslint");

const baseConfig = getEslintConfig();

/** @type import("eslint").Linter.Config */
module.exports {
  ...baseConfig,
  parserOptions: {
    ...baseConfig.parserOptions,
  },
};
```

By extending `@harmonix-hub/eslint`, you inherit the recommended ESLint rules for Harmonix hub projects.
You can also add or override rules in your project-specific ESLint configuration file.
