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

test("with click on card, disabled true", async ({ page }) => {
  await page.getByLabel("Principiante").click();
  const button = await page.getByRole("button").first();
  await button.click();
  await expect(button).toBeDisabled();
});

test("whith click on card change background", async ({ page }) => {
  await page.getByLabel("Principiante").click();
  const button = page.getByRole("button").first();
  const reverseImage = await button.evaluate((e) => {
    return window.getComputedStyle(e).getPropertyValue("background-image");
  });
  await button.click();
  const newImage = await button.evaluate((e) => {
    return window.getComputedStyle(e).getPropertyValue("background-image");
  });
  expect(reverseImage).not.toBe(newImage);
});

test("In Pricipiante page: with two cards click and diferent image, cards' disabled false after 1 sec. If same image disable true", async ({
  page,
}) => {
  await page.getByLabel("Principiante").click();
  const card1 = page.locator("button").locator("nth=0");
  const card2 = page.locator("button").locator("nth=-1");
  await card1.click();
  await card2.click();
  const card1Image = await card1.evaluate((e) => {
    return window.getComputedStyle(e).getPropertyValue("background-image");
  });
  const card2Image = await card2.evaluate((e) => {
    return window.getComputedStyle(e).getPropertyValue("background-image");
  });
  if (card1Image != card2Image) {
    await expect(card1).not.toBeDisabled({ timeout: 2000 });
  } else {
    await expect(card1).toBeDisabled({ timeout: 2000 });
  }
});

test("In Medio page: with two cards click and diferent image, cards' disabled false after 1 sec. If same image disable true", async ({
  page,
}) => {
  await page.getByLabel("Medio").click();
  const card1 = page.locator("button").locator("nth=0");
  const card2 = page.locator("button").locator("nth=-1");
  await card1.click();
  await card2.click();
  const card1Image = await card1.evaluate((e) => {
    return window.getComputedStyle(e).getPropertyValue("background-image");
  });
  const card2Image = await card2.evaluate((e) => {
    return window.getComputedStyle(e).getPropertyValue("background-image");
  });
  if (card1Image != card2Image) {
    await expect(card1).not.toBeDisabled({ timeout: 2000 });
  } else {
    await expect(card1).toBeDisabled({ timeout: 2000 });
  }
});

test("In Experto page: with two cards click and diferent image, cards' disabled false after 1 sec. If same image disable true", async ({
  page,
}) => {
  await page.getByLabel("Experto").click();
  const card1 = page.locator("button").locator("nth=0");
  const card2 = page.locator("button").locator("nth=-1");
  await card1.click();
  await card2.click();
  const card1Image = await card1.evaluate((e) => {
    return window.getComputedStyle(e).getPropertyValue("background-image");
  });
  const card2Image = await card2.evaluate((e) => {
    return window.getComputedStyle(e).getPropertyValue("background-image");
  });
  if (card1Image != card2Image) {
    await expect(card1).not.toBeDisabled({ timeout: 2000 });
  } else {
    await expect(card1).toBeDisabled({ timeout: 2000 });
  }
});

test("In Pricipiante page: with all cards matched , new element is shown", async ({
  page,
}) => {
  await page.evaluate((e) => {
    matches = [1, 1, 1, 1, 1, 1];
  });

  await page.getByLabel("Principiante").click();
  await page.locator("button").first().click();
  await expect(page.locator(".playAgain")).toHaveText("Volver a jugar");
});
