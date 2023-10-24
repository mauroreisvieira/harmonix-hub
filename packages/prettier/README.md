# @harmony-configs/prettier

This package provides Prettier configurations for projects developed with Code Harmony Kit.

## Installation

You can install this Prettier configuration package using npm.

```bash
npm install @harmony-configs/prettier --save-dev
```

## Usage

To use the Prettier configurations provided by this package, create a Prettier configuration file in your project directory (e.g., `.prettierrc`, `.prettierrc.js`, or `prettier.config.js`), and extend the configuration from `@harmony-configs/prettier`.

Example of `.prettierrc.js` configuration file:

```js
module.exports = {
  ...require('@harmony-configs/prettier'),
  // Add additional project-specific Prettier configurations here
};
```

By extending `@harmony-configs/prettier`, you inherit the recommended Prettier configurations for Code Harmony Kit projects. You can also add or override configurations in your project-specific Prettier configuration file.
