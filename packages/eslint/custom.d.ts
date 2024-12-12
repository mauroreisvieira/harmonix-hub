declare module "eslint-plugin-react-hooks" {
  import type { ESLint, Rule } from "eslint";
  const plugin: Omit<ESLint.Plugin, "configs"> & {
    configs: {
      recommended: Partial<Rules>;
    };
    rules: Rule;
  };
  export default plugin;
}
