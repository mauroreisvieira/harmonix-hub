import type { JestConfigWithTsJest } from "ts-jest";

export const jestConfig = (): JestConfigWithTsJest => {
  return {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
      "^.+\\.ts?$": "ts-jest",
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
  }
};
