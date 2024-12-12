import jsDocConfig from "eslint-plugin-jsdoc";
import tsConfig, { type Config } from "typescript-eslint";
import tsDocConfig from "eslint-plugin-tsdoc";
import globals from "globals";
import unusedImports from "eslint-plugin-unused-imports";
// Types
import type { Linter } from "eslint";

const languageOptions: Linter.Config["languageOptions"] = {
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module"
  },
  globals: {
    ...globals.browser,
    ...globals.node,
    ...globals.es2021
  }
};
export const tsConfigs: Config = [
  ...tsConfig.configs.recommended,
  {
    ignores: ["dist", "node_modules"]
  },
  {
    files: ["*.ts", "*.tsx"],
    plugins: {
      tsdoc: tsDocConfig
    },
    rules: {
      "tsdoc/syntax": "warn"
    }
  },
  {
    plugins: {
      jsdoc: jsDocConfig,
      "unused-imports": unusedImports
    },
    languageOptions,
    rules: {
      "array-bracket-newline": ["error", "consistent"],
      "array-bracket-spacing": ["error", "never"],
      "array-callback-return": "error",
      "array-element-newline": [
        "error",
        {
          ArrayExpression: "consistent",
          ArrayPattern: { minItems: 3 }
        }
      ],
      "arrow-spacing": "error",
      "brace-style": ["error", "1tbs"],
      "comma-dangle": ["error", "never"],
      "comma-spacing": [
        "error",
        {
          after: true,
          before: false
        }
      ],
      curly: ["error", "all"],
      "default-case": "off",
      eqeqeq: ["error", "always"],
      "func-call-spacing": ["error", "never"],
      "function-call-argument-newline": ["error", "consistent"],
      indent: ["error", 4, { SwitchCase: 1, ignoredNodes: ["ConditionalExpression"] }],
      "jsdoc/newline-after-description": 0,
      "jsdoc/require-hyphen-before-param-description": 1,
      "jsdoc/require-jsdoc": [
        "error",
        {
          require: {
            ArrowFunctionExpression: true,
            ClassDeclaration: true,
            ClassExpression: true,
            FunctionDeclaration: true,
            FunctionExpression: true,
            MethodDefinition: true
          },
          contexts: [
            "TSInterfaceDeclaration",
            "TSTypeAliasDeclaration",
            "TSEnumDeclaration",
            "TSPropertySignature"
          ]
        }
      ],
      "keyword-spacing": ["error", { after: true, before: true }],
      "no-console": "error",
      "no-dupe-else-if": "error",
      "no-extend-native": "off",
      "no-nested-ternary": "error",
      "object-curly-newline": ["error", { consistent: true, multiline: true }],
      "object-curly-spacing": ["error", "always"],
      "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
      "padding-line-between-statements": [
        "error",
        // Always one empty line before return statement
        {
          blankLine: "always",
          next: "return",
          prev: "*"
        },
        // Always one empty line between methods
        {
          blankLine: "always",
          next: ["block-like", "multiline-block-like"],
          prev: ["block-like", "multiline-block-like"]
        },
        // Avoids more than one empty line
        {
          blankLine: "never",
          next: "empty",
          prev: "empty"
        }
      ],
      "space-before-blocks": "error"
    }
  }
];
