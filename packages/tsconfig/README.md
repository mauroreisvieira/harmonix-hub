# @harmonix-hub/tsconfig

This package provides TypeScript configurations for projects developed with Harmonix hub.

## Installation

You can install this TypeScript configuration package using npm or yarn.

### Using npm

```bash
npm install @harmonix-hub/tsconfig --save-dev
```

## Usage

To use the TypeScript configurations provided by this package, create a TypeScript configuration file in your project directory (e.g., `tsconfig.json`), and extend the configuration from `@harmonix-hub/tsconfig`.

Example of `tsconfig.json` configuration file:

```json
{
  "extends": "@harmonix-hub/tsconfig/base.json",
  "compilerOptions": {
    "declaration": true
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts"
  ]
}
```

By extending `@harmonix-hub/tsconfig`, you inherit the recommended TypeScript compiler options for Harmonix hub projects. You can also add or override compiler options in your project-specific TypeScript configuration file.
