// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5500/");
  // Expect a title "to contain" a substring.
  await expect(
    page.getByRole("heading", {
      name: "Cada oveja con su pareja !",
    })
  ).toBeVisible();
});
