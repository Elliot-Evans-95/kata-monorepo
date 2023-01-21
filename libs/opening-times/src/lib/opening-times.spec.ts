import {OpeningTimes} from "./opening-times";

describe("Opening Times", () => {
  it("should work", () => {
    const expected = "opening-times-kata"
    const actual = new OpeningTimes()

    expect(actual).toBe(expected);
  });
});
