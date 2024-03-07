const shuffle = require("./utils");

test("with an array, return same array disordered", () => {
  expect(shuffle([2, 3, 4, 6, 7, 89, 0, 8])).not.toEqual([
    2, 3, 4, 6, 7, 89, 0, 8,
  ]);
});
