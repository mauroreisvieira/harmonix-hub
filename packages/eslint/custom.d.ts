/**
 * Declaration module for the "eslint-plugin-react-hooks" package.
 * This module defines the types for the plugin, including its rules and configurations.
 */
declare module "eslint-plugin-react-hooks" {
  import type { ESLint, Rule } from "eslint";

  /** Represents the React Hooks ESLint plugin. */
  const plugin: Omit<ESLint.Plugin, "configs"> & {
    /** Plugin configuration options. */
    configs: {
      /** Partial rules configuration for the recommended settings. */
      recommended: Partial<Rules>;
    };
    /** Collection of ESLint rules provided by the plugin. */
    rules: Rule;
  };

  export default plugin;
}
