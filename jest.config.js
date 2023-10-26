module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js?$",
  moduleFileExtensions: ["js", "json", "node"],
  setupFiles: ["dotenv/config"], // Load environment variables for tests
  coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
  collectCoverageFrom: ["src/**/*.js"],
  coverageReporters: ["text", "lcov"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
