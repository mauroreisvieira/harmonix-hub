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
    ],
    plugins: [
      "stylelint-scss",
      "stylelint-order",
      "stylelint-prettier",
      "stylelint-no-unsupported-browser-features",
    ],
    rules: {
      /**
       * Rules
       */
      "at-rule-no-unknown": null,
      "selector-no-qualifying-type": true,
      "selector-no-vendor-prefix": true,
      "scss/at-rule-no-unknown": true,
      "selector-max-type": 0,
      "property-disallowed-list": ["background", "flex", "font"],
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
      "order/properties-order": [
        "appearance",
        "content",
        "user-select",
        "background-color",
        "color",
        "font-family",
        "font-size",
        "font-weight",
        "text-align",
        "letter-spacing",
        "text-transform",
        "display",
        "vertical-align",
        "flex-direction",
        "position",
        "box-sizing",
        "top",
        "right",
        "bottom",
        "left",
        "min-width",
        "width",
        "max-width",
        "min-height",
        "height",
        "max-height",
        "align-items",
        "justify-content",
        "flex-shrink",
        "flex-grow",
        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border-radius",
        "border",
        "border-top",
        "border-right",
        "border-bottom",
        "border-left",
        "border-radius",
        "outline",
        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "box-shadow",
        "overflow",
        "text-overflow",
        "opacity",
        "visibility",
        "transform",
        "transition",
        "animation",
        "z-index",
        "cursor",
      ],
      "scss/map-keys-quotes": "always",
    },
  };
};
