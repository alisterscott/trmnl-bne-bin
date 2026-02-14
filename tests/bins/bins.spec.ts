import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("can see red and yellow bins for weeks where the zone matches the schedule", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "redyellow.trmnlp.yml");
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
        await expect(trmnlFrame.locator("div.red div.title")).toHaveText(
          "RED LID",
        );
        await expect(trmnlFrame.locator("div.red div.value")).toHaveText(
          "General Waste",
        );
        await expect(trmnlFrame.locator("div.yellow div.title")).toHaveText(
          "YELLOW LID",
        );
        await expect(trmnlFrame.locator("div.yellow div.value")).toHaveText(
          "Recycling",
        );
        await expect(
          trmnlFrame.locator("div.green div.title"),
        ).not.toBeVisible();
        await expect(
          trmnlFrame.locator("div.green div.value"),
        ).not.toBeVisible();
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});

test("can see red and green bins where the zone matches the schedule and green bins is enabled", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "redgreen.trmnlp.yml");
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
        await expect(trmnlFrame.locator("div.red div.title")).toHaveText(
          "RED LID",
        );
        await expect(trmnlFrame.locator("div.red div.value")).toHaveText(
          "General Waste",
        );
        await expect(trmnlFrame.locator("div.green div.title")).toHaveText(
          "GREEN LID",
        );
        await expect(trmnlFrame.locator("div.green div.value")).toHaveText(
          "Garden Waste",
        );
        await expect(
          trmnlFrame.locator("div.yellow div.title"),
        ).not.toBeVisible();
        await expect(
          trmnlFrame.locator("div.yellow div.value"),
        ).not.toBeVisible();
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});

test("can see only the red bin where the zone matches the schedule and green bins is disabled", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "redgreendisabled.trmnlp.yml");
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
        await expect(trmnlFrame.locator("div.red div.title")).toHaveText(
          "RED LID",
        );
        await expect(trmnlFrame.locator("div.red div.value")).toHaveText(
          "General Waste",
        );
        await expect(
          trmnlFrame.locator("div.green div.title"),
        ).not.toBeVisible();
        await expect(
          trmnlFrame.locator("div.green div.value"),
        ).not.toBeVisible();
        await expect(
          trmnlFrame.locator("div.yellow div.title"),
        ).not.toBeVisible();
        await expect(
          trmnlFrame.locator("div.yellow div.value"),
        ).not.toBeVisible();
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});

test("can see next weeks bins when bins have already been collected this week", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "nextweek.trmnlp.yml");
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
        await expect(trmnlFrame.locator("div.red div.title")).toHaveText(
          "RED LID",
        );
        await expect(trmnlFrame.locator("div.red div.value")).toHaveText(
          "General Waste",
        );
        await expect(trmnlFrame.locator("div.yellow div.title")).toHaveText(
          "YELLOW LID",
        );
        await expect(trmnlFrame.locator("div.yellow div.value")).toHaveText(
          "Recycling",
        );
        await expect(
          trmnlFrame.locator("div.green div.title"),
        ).not.toBeVisible();
        await expect(
          trmnlFrame.locator("div.green div.value"),
        ).not.toBeVisible();
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});
