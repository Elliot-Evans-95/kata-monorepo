import { stringCalculator } from "./string-calculator";

describe("stringCalculator", () => {
  it("should work", () => {
    expect(stringCalculator()).toEqual("not-string-calculator");
  });
});
