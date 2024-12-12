import { jestConfig } from "@harmonix-hub/testing";

module.exports = {
  ...jestConfig,
  testEnvironment: "jsdom",
};
