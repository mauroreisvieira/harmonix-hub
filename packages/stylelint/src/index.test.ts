import { getStyleLintConfig } from "./index";

describe("getStyleLintConfig", () => {
  it("returns a valid Stylelint configuration object", () => {
    const stylelintConfig = getStyleLintConfig();

    // Basic structure checks
    expect(stylelintConfig).toHaveProperty("customSyntax");
    expect(stylelintConfig).toHaveProperty("extends");
    expect(stylelintConfig).toHaveProperty("plugins");
    expect(stylelintConfig).toHaveProperty("rules");
  });
});
