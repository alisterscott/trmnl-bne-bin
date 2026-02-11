import { test, expect } from "@playwright/test";

test("trmnlp", async ({ page }) => {
  await page.goto("/full");
  const content = await page
    .frameLocator("iframe")
    .locator("div.view")
    .textContent();
  console.log(content);
});
