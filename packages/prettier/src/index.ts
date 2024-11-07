import type { Options } from "prettier";

export const getPrettierConfig = (): Options => {
  return {
    quoteProps: "consistent",
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
    trailingComma: "all",
    useTabs: false,
    overrides: [
      // formatting the package.json with anything other than spaces will cause
      // issues when running install...
      {
        files: ["**/package.json"],
        options: {
          useTabs: false,
        },
      },
      {
        files: ["**/*.mdx"],
        options: {
          proseWrap: "preserve",
          htmlWhitespaceSensitivity: "ignore",
        },
      },
    ],
  };
};
