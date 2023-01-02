const {shuffleArray} = require('./utils')

describe("shuffleArray should", () => {
  it("return an array", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(arr);
    expect(Array.isArray(shuffled)).toBe(true); // shuffled should be an array
  });

  it("return an array of the same length as the argument sent in", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(arr);
    expect(shuffled.length).toEqual(arr.length);
  });

  it("contain all the same items as the original array", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(arr);
    expect(shuffled.sort()).toEqual(arr.sort()); // sort the arrays so they can be compared
  });

  it("shuffle the items around", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(arr);
    expect(shuffled).not.toEqual(arr); // shuffled should not be equal to the original array
  });
});
