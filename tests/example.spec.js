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
  await expect(page.getByLabel("Principiante")).toBeChecked();
});

test("has medium", async ({ page }) => {
  await page.getByLabel("Medio").check();
  await expect(page.getByLabel("Medio")).toBeChecked();
});

test("has expert", async ({ page }) => {
  await page.getByLabel("Experto").check();
  await expect(page.getByLabel("Experto")).toBeChecked();
});

test("whith beginner click 6 tags created", async ({ page }) => {
  await page.getByLabel("Principiante").click();
  const list = page.locator(".beginner");
  await expect(list).toHaveCount(6);
});

test("whith medium click 8 tags created", async ({ page }) => {
  await page.getByLabel("Medio").click();
  const list = page.locator(".medium");
  await expect(list).toHaveCount(8);
});

test("whith expert click 12 tags created", async ({ page }) => {
  await page.getByLabel("Experto").click();
  const list = page.locator(".expert");
  await expect(list).toHaveCount(12);
});
