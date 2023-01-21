import { leapYears } from "./leap-years";

describe("leapYears", () => {
  it("should work", () => {
    expect(leapYears()).toEqual("leap-years");
  });
});
