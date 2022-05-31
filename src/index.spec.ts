// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import { fizzbuzz, computeValue, isMultipleOf } from "./index";
expect.extend(matchers);

describe("Fizzbuzz tests", () => {
  it("That's a 1 test!", function () {
    expect(fizzbuzz(1)).toEqual(["1"]);
  });

  it("That's a 2 test!", function () {
    expect(fizzbuzz(2)).toEqual(["1", "2"]);
  });

  it("That's a 3 test!", function () {
    expect(fizzbuzz(3)).toEqual(["1", "2", "fizz"]);
  });
});

describe("computeValue tests", () => {
  it("Should return the number itself as a string by default", function () {
    expect(computeValue(1)).toEqual("1");
  });

  it("Should return the number itself as a string by default", function () {
    expect(computeValue(2)).toEqual("2");
  });

  it("Should equal 'fizz' for multiple of 3", function () {
    expect(computeValue(3)).toEqual("fizz");
  });

  it("Should equal 'fizz' for multiple of 3", function () {
    expect(computeValue(6)).toEqual("fizz");
  });

  it("Should equal 'buzz' for multiple of 5", function () {
    expect(computeValue(5)).toEqual("buzz");
  });

  it("Should equal 'fizzbuzz' for multiple of 3 and 5", function () {
    expect(computeValue(3 * 5)).toEqual("fizzbuzz");
  });
});

describe("Tests isMultipleOf", () => {
  it("Should return false for numbers that aren't multiple of", function () {
    expect(isMultipleOf(2)(1)).toEqual(false);
  });

  it("Should return true for numbers that are multiple of", function () {
    expect(isMultipleOf(2)(4)).toEqual(true);
  });

  it("Should return true for numbers that are multiple of", function () {
    expect(isMultipleOf(2)(2)).toEqual(true);
  });
});
