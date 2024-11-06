import type { JestConfigWithTsJest } from "ts-jest";

export const jestConfig = (): JestConfigWithTsJest => {
    return {
        preset: "ts-jest",
        testEnvironment: "jsdom",
        transform: {
            "^.+\\.jsx?$": "babel-jest",
            "^.+\\.tsx?$": "ts-jest",
        },
        transformIgnorePatterns: ["<rootDir>/node_modules/"],
    };
};
