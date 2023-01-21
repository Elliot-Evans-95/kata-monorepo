/* eslint-disable */
export default {
  displayName: "tic-tac-toe",
  preset: "../../jest.preset.js",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/libs/tic-tac-toe",
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ]
};
