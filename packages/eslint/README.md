# @harmony-configs/eslint

This package provides ESLint configurations for projects developed with Code Harmony Kit.

## Installation

You can install this ESLint configuration package using npm.

```bash
npm install @harmony-configs/eslint --save-dev
```

## Usage

To use the ESLint configurations provided by this package, create an ESLint configuration file in your project directory (e.g., `.eslintrc.js`, `.eslintrc.json`), and extend the configuration from `@harmony-configs/eslint`.

Example `.eslintrc.js` configuration file:

```js
module.exports = {
  extends: ['@harmony-configs/eslint'],
  // Add additional project-specific ESLint configurations here
  rules: {
    // Additional or override rules specific to your project
  },
};
```

By extending `@harmony-configs/eslint`, you inherit the recommended ESLint rules for Code Harmony Kit projects.
You can also add or override rules in your project-specific ESLint configuration file.
