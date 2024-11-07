import { getEslintConfig } from "../src/index";

describe("getEslintConfig", () => {
  it("returns a valid ESLint configuration object", () => {
    const eslintConfig = getEslintConfig();

    // Basic structure checks
    expect(eslintConfig).toHaveProperty("env");
    expect(eslintConfig).toHaveProperty("extends");
    expect(eslintConfig).toHaveProperty("parserOptions");
    expect(eslintConfig).toHaveProperty("plugins");
    expect(eslintConfig).toHaveProperty("rules");
    expect(eslintConfig).toHaveProperty("ignorePatterns");
  });
});
