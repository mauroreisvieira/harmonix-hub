# @code-harmony-kit/tsconfig

This package provides TypeScript configurations for projects developed with Code Harmony Kit.

## Installation

You can install this TypeScript configuration package using npm or yarn.

### Using npm

```bash
npm install @code-harmony-kit/tsconfig --save-dev
```

## Usage

To use the TypeScript configurations provided by this package, create a TypeScript configuration file in your project directory (e.g., `tsconfig.json`), and extend the configuration from `@code-harmony-kit/tsconfig`.

Example of `tsconfig.json` configuration file:

```json
{
  "extends": "@code-harmony-kit/tsconfig/base.json",
  "compilerOptions": {
    // Add additional project-specific TypeScript compiler options here
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts"
  ]
}
```

By extending `@code-harmony-kit/tsconfig`, you inherit the recommended TypeScript compiler options for Code Harmony Kit projects. You can also add or override compiler options in your project-specific TypeScript configuration file.
