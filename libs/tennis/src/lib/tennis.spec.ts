import { tennis } from "./tennis";

describe("Tennis", () => {
  test("Creation of Tennis Match", () => {
    expect(tennis()).toEqual("tennis");
  });
});
