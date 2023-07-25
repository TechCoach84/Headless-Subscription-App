import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["lcov"],
  coverageDirectory: "test-coverage",
};
export default createJestConfig(config);
