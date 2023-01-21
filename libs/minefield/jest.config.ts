/* eslint-disable */
export default {
  displayName: "minefield",
  preset: "../../jest.preset.js",
  coverageDirectory: "../../coverage/libs/minefield",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ]
};
