# @harmonix-hub/testing

This package provides Jest configurations for projects developed with Harmonix hub.

## Installation

You can install this Jest configuration package using npm.

```bash
npm install @harmonix-hub/testing --save-dev
```

## Usage

To use the Jest configurations provided by this package, create a Jest configuration file in your project directory (e.g., `jest.config.js`), and extend the configuration from `@harmonix-hub/testing`.

Example of `jest.config.js` configuration file:

```js
import { Jest } from "@harmonix-hub/testing";

const baseConfig = Jest.jestConfig();

export default {
  ...baseConfig,
};
```

By extending `@harmonix-hub/testing`, you inherit the recommended Jest configurations for Harmonix hub projects. You can also add or override configurations in your project-specific Jest configuration file.
