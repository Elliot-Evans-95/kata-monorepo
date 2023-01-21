/* eslint-disable */
export default {
  displayName: "dark-theme",
  preset: "../../jest.preset.js",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/libs/dark-theme",
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ]
};
