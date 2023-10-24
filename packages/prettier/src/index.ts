import type { Options } from "prettier";

export const getPrettierConfig = (): Options => {
  return {
    quoteProps: "consistent",
    bracketSameLine: true,
    printWidth: 100,
  }
};
