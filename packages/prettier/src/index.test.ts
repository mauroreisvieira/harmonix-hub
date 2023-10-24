import { check } from "prettier";
import { getPrettierConfig } from "./index";

describe("Prettier Config", () => {
  it("should be a configuration object compatible with Prettier", async () => {
    const formatted = await check("export const X = 1234;\n", {
      ...getPrettierConfig,
      parser: "typescript",
    });

    expect(formatted).toBeTruthy();
  });
});
