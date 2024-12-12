import { stylelintConfig } from "../src/index";

describe("stylelintConfig", () => {
  it("returns a valid style lint configuration object", () => {
    // Basic structure checks
    expect(stylelintConfig).toHaveProperty("customSyntax");
    expect(stylelintConfig).toHaveProperty("extends");
    expect(stylelintConfig).toHaveProperty("plugins");
    expect(stylelintConfig).toHaveProperty("rules");
  });
});
