# @harmonix-hub/prettier

This package provides Prettier configurations for projects developed with Harmonix hub.

## Installation

You can install this Prettier configuration package using npm.

```bash
npm install @harmonix-hub/prettier --save-dev
```

## Usage

To use the Prettier configurations provided by this package, create a Prettier configuration file in your project directory (e.g., `.prettierrc`, `.prettierrc.js`, or `prettier.config.js`), and extend the configuration from `@harmonix-hub/prettier`.

Example of `.prettierrc.js` configuration file:

```js
const { prettierConfig } = require("@harmonix-hub/prettier");

 /** @type {import("prettier").Config} */
module.exports = {
  ...prettierConfig,
};
```

By extending `@harmonix-hub/prettier`, you inherit the recommended Prettier configurations for Harmonix hub projects. You can also add or override configurations in your project-specific Prettier configuration file.
