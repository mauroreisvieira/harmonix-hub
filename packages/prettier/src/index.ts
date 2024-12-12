import type { Options } from "prettier";

export const prettierConfig: Options = {
  quoteProps: "as-needed",
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 100,
  proseWrap: "always",
  requirePragma: false,
  semi: true,
  singleAttributePerLine: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "none",
  useTabs: false,
  overrides: [
    {
      files: ["**/package.json"],
      options: {
        useTabs: false
      }
    },
    {
      files: ["**/*.mdx"],
      options: {
        proseWrap: "preserve",
        htmlWhitespaceSensitivity: "ignore"
      }
    }
  ]
};
