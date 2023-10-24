# @harmony-configs/tsconfig

This package provides TypeScript configurations for projects developed with Code Harmony Kit.

## Installation

You can install this TypeScript configuration package using npm or yarn.

### Using npm

```bash
npm install @harmony-configs/tsconfig --save-dev
```

## Usage

To use the TypeScript configurations provided by this package, create a TypeScript configuration file in your project directory (e.g., `tsconfig.json`), and extend the configuration from `@harmony-configs/tsconfig`.

Example of `tsconfig.json` configuration file:

```json
{
  "extends": "@harmony-configs/tsconfig/base.json",
  "compilerOptions": {
    // Add additional project-specific TypeScript compiler options here
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts"
  ]
}
```

By extending `@harmony-configs/tsconfig`, you inherit the recommended TypeScript compiler options for Code Harmony Kit projects. You can also add or override compiler options in your project-specific TypeScript configuration file.
