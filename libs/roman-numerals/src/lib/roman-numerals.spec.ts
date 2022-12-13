import {numberToRomanNumeral, romanNumeralToNumber} from "./roman-numerals";

describe("numberToRomanNumeral", () => {
  it("returns a string", () => {
    const expected = ''
    const actual = numberToRomanNumeral()

    expect(actual).toEqual(expected);
  });
});

describe("romanNumeralToNumber", () => {
  it("returns a number", () => {
    const expected = 0
    const actual = romanNumeralToNumber()

    expect(actual).toEqual(expected);
  });
});
