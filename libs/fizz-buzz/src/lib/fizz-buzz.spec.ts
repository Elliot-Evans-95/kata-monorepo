import { fizzBuzz } from "./fizz-buzz";

describe("fizzBuzz", () => {
  it("should work", () => {
    expect(fizzBuzz()).toEqual("fizz-buzz");
  });
});
