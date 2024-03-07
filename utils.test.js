const shuffle = require("./utils");
const isMatch = require("./utils");

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
