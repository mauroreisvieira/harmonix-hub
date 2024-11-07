import type { Config } from "stylelint";

export const getStyleLintConfig = (): Config => {
  return {
    customSyntax: "postcss-scss",
    extends: [
      "stylelint-config-recommended",
      "stylelint-config-standard",
      "stylelint-config-recommended-scss",
      "stylelint-config-standard-scss",
      "stylelint-config-prettier-scss",
      "stylelint-config-recess-order",
    ],
    plugins: ["stylelint-scss", "stylelint-prettier", "stylelint-no-unsupported-browser-features"],
    rules: {
      /**
       * Rules
       */
      "at-rule-no-unknown": null,
      "selector-no-qualifying-type": true,
      "selector-no-vendor-prefix": true,
      "scss/at-rule-no-unknown": true,
      "selector-max-type": 0,
      "max-nesting-depth": 4,
      "selector-max-id": 0,
      // Regex to allow BEM selector
      "selector-class-pattern": "^([a-z][a-z0-9]*)((--?|__)?[a-z0-9]+)*$",
      /**
       * Browser compatibility
       */
      "plugin/no-unsupported-browser-features": [
        true,
        {
          severity: "warning",
        },
      ],
      /**
       * Formatting
       */
      "rule-empty-line-before": [
        "always-multi-line",
        {
          except: ["first-nested"],
          ignore: ["after-comment"],
        },
      ],
      "function-calc-no-unspaced-operator": null,
      "prettier/prettier": [
        true,
        {
          endOfLine: "lf",
        },
      ],
      "scss/map-keys-quotes": "always",
    },
  };
};
