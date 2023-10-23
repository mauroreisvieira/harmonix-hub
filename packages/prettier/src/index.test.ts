import { check } from "prettier";
import baseConfig from "./index";

describe("Prettier Config", () => {
  it("should be a configuration object compatible with Prettier", async () => {
    const formatted = await check("export const X = 1234;\n", {
      ...baseConfig,
      parser: "typescript",
    });

    expect(formatted).toBeTruthy();
  });
});
