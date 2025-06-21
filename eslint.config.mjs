// @ts-check

import js from "@eslint/js";
import globals from "globals";
import * as tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  // Base JS configuration for all JavaScript/TypeScript files
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // TypeScript configuration
  ...tseslint.configs.recommended,

  // React configuration with version specified
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect"
      }
    }
  },

  // Override for root config files
  {
    files: ["*.{js,mjs,cjs}"],
    ignores: ["src/**"],
    languageOptions: {
      globals: {
        ...globals.node,
        module: "writable"
      }
    }
  },

  // Override for source files to disable specific rules
  {
    files: ["src/**/*.{js,ts}"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off"
    }
  }
];