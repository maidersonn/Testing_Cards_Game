// @ts-check
const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5500/");
});

test("has title", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(
    page.getByRole("heading", {
      name: "Cada oveja con su pareja !",
    })
  ).toBeVisible();
});

test("has begginer", async ({ page }) => {
  await page.getByLabel("Principiante").check();
});

test("has medium", async ({ page }) => {
  await page.getByLabel("Medio").check();
});

test("has expert", async ({ page }) => {
  await page.getByLabel("Experto").check();
});
/*
test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
*/
