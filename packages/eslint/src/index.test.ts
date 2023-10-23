import { ESLint } from "eslint";
import baseConfig from "./index";

describe("Eslint Config", () => {
  it("should be a configuration object compatible with Eslint", async () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new ESLint({
        baseConfig,
      });
    }).not.toThrow();
  });
});
