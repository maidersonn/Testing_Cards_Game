/**
 * @jest-environment jsdom
 */

test("the html is created", () => {
  const beginner = document.getElementById("beginner");
  expect(beginner).not.toBe(null);
});
