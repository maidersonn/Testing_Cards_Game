const { shuffle, isMatch, isFinished, success } = require("./utils");

test("with an array, return same array disordered", () => {
  // evnetualmente no pasará porque no es 100%seguro que cambie al haber un ramdom
  expect(shuffle([2, 3, 4, 6, 7, 89, 0, 8])).not.toEqual([
    2, 3, 4, 6, 7, 89, 0, 8,
  ]);
});

test("with two elements, true if equal or false if not", () => {
  expect(isMatch(45, 45)).toBe(true);
  expect(isMatch(45, "45")).toBe(false);
  expect(isMatch(45, 56)).toBe(false);
});

test("with an array.length and number, return true if equals", () => {
  expect(isFinished([2, 3, 4], 3)).toEqual(true);
});

test("given array, return another array with equal content", () => {
  expect(success([])).toEqual([]);
  expect(success([2, 3])).toEqual([2, 3]);
  expect(success(["2, 3", { a: 3 }, [12], 3])).toEqual([
    "2, 3",
    { a: 3 },
    [12],
    3,
  ]);
});
