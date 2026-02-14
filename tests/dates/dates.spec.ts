import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("can see a message when bin collection day is today", async ({ page }) => {
  const sourceFile = path.join(__dirname, "today.trmnlp.yml");
  const destFile = path.join(__dirname, "..", "..", ".trmnlp.yml");

  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source file not found: ${sourceFile}`);
  }

  if (!fs.existsSync(destFile)) {
    throw new Error(`Destination file not found: ${destFile}`);
  }

  const originalContent = fs.readFileSync(destFile, "utf-8"); // Save original content to restore later

  fs.copyFileSync(sourceFile, destFile);

  try {
    const routes = ["/quadrant", "/full", "/half_vertical", "/half_horizontal"];

    for (const route of routes) {
      await test.step(`Testing route: ${route}`, async () => {
        await page.goto(route);
        await page.getByRole("link", { name: "Poll" }).click();
        const trmnlFrame = page.frameLocator("iframe");
        await expect(trmnlFrame.locator("div.title.today")).toHaveText(
          "Bin collection day",
        );
        await expect(trmnlFrame.locator("div.value.today")).toHaveText(
          " Make sure you bring your bins back inReport a missed collection or problem at tinyurl.com/bne-bin",
        );
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});

test("can see a message when bin collection day is tomorrow but this week", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "tomorrowthisweek.trmnlp.yml");
  const destFile = path.join(__dirname, "..", "..", ".trmnlp.yml");

  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source file not found: ${sourceFile}`);
  }

  if (!fs.existsSync(destFile)) {
    throw new Error(`Destination file not found: ${destFile}`);
  }

  const originalContent = fs.readFileSync(destFile, "utf-8"); // Save original content to restore later

  fs.copyFileSync(sourceFile, destFile);

  try {
    const routes = ["/quadrant", "/full", "/half_vertical", "/half_horizontal"];

    for (const route of routes) {
      await test.step(`Testing route: ${route}`, async () => {
        await page.goto(route);
        await page.getByRole("link", { name: "Poll" }).click();
        const trmnlFrame = page.frameLocator("iframe");
        await expect(trmnlFrame.locator("div.title.tomorrow")).toHaveText(
          "Your bin collection is tomorrow!",
        );
        await expect(trmnlFrame.locator("div.value.tomorrow")).toHaveText(
          " Make sure you put your bins out by 5:30am tomorrow",
        );
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});

test("can see a message when bin collection day is tomorrow but next week", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "tomorrownextweek.trmnlp.yml");
  const destFile = path.join(__dirname, "..", "..", ".trmnlp.yml");

  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source file not found: ${sourceFile}`);
  }

  if (!fs.existsSync(destFile)) {
    throw new Error(`Destination file not found: ${destFile}`);
  }

  const originalContent = fs.readFileSync(destFile, "utf-8"); // Save original content to restore later

  fs.copyFileSync(sourceFile, destFile);

  try {
    const routes = ["/quadrant", "/full", "/half_vertical", "/half_horizontal"];

    for (const route of routes) {
      await test.step(`Testing route: ${route}`, async () => {
        await page.goto(route);
        await page.getByRole("link", { name: "Poll" }).click();
        const trmnlFrame = page.frameLocator("iframe");
        await expect(trmnlFrame.locator("div.title.tomorrow")).toHaveText(
          "Your bin collection is tomorrow!",
        );
        await expect(trmnlFrame.locator("div.value.tomorrow")).toHaveText(
          " Make sure you put your bins out by 5:30am tomorrow",
        );
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});

test("can see a message when bin collection day beyond tomorrow this week (Wednesday)", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "beyondtomorrowthisweek.trmnlp.yml");
  const destFile = path.join(__dirname, "..", "..", ".trmnlp.yml");

  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source file not found: ${sourceFile}`);
  }

  if (!fs.existsSync(destFile)) {
    throw new Error(`Destination file not found: ${destFile}`);
  }

  const originalContent = fs.readFileSync(destFile, "utf-8"); // Save original content to restore later

  fs.copyFileSync(sourceFile, destFile);

  try {
    const routes = ["/quadrant", "/full", "/half_vertical", "/half_horizontal"];

    for (const route of routes) {
      await test.step(`Testing route: ${route}`, async () => {
        await page.goto(route);
        await page.getByRole("link", { name: "Poll" }).click();
        const trmnlFrame = page.frameLocator("iframe");
        await expect(trmnlFrame.locator("div.title.later")).toHaveText(
          "Your bin collection is this Wednesday",
        );
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});

test("can see a message when bin collection day beyond tomorrow next week (Monday)", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "beyondtomorrownextweek.trmnlp.yml");
  const destFile = path.join(__dirname, "..", "..", ".trmnlp.yml");

  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source file not found: ${sourceFile}`);
  }

  if (!fs.existsSync(destFile)) {
    throw new Error(`Destination file not found: ${destFile}`);
  }

  const originalContent = fs.readFileSync(destFile, "utf-8"); // Save original content to restore later

  fs.copyFileSync(sourceFile, destFile);

  try {
    const routes = ["/quadrant", "/full", "/half_vertical", "/half_horizontal"];

    for (const route of routes) {
      await test.step(`Testing route: ${route}`, async () => {
        await page.goto(route);
        await page.getByRole("link", { name: "Poll" }).click();
        const trmnlFrame = page.frameLocator("iframe");
        await expect(trmnlFrame.locator("div.title.later")).toHaveText(
          "Your bin collection is next Monday",
        );
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});

test("can see a message when it cant work out bin collection day (no data)", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "nodata.trmnlp.yml");
  const destFile = path.join(__dirname, "..", "..", ".trmnlp.yml");

  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source file not found: ${sourceFile}`);
  }

  if (!fs.existsSync(destFile)) {
    throw new Error(`Destination file not found: ${destFile}`);
  }

  const originalContent = fs.readFileSync(destFile, "utf-8"); // Save original content to restore later

  fs.copyFileSync(sourceFile, destFile);

  try {
    const routes = ["/quadrant", "/full", "/half_vertical", "/half_horizontal"];

    for (const route of routes) {
      await test.step(`Testing route: ${route}`, async () => {
        await page.goto(route);
        await page.getByRole("link", { name: "Poll" }).click();
        const trmnlFrame = page.frameLocator("iframe");
        await expect(trmnlFrame.locator("div.title.error")).toHaveText(
          "Well this is awkward",
        );
        await expect(trmnlFrame.locator("div.value.error")).toHaveText(
          "Unable to find your bin collection schedule. Please check your plugin API settings.",
        );
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});
