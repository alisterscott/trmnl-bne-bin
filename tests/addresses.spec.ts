import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("can see a invalid house address when nothing is returned by the API for a house address search", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "invalidhouse.trmnlp.yml");
  const destFile = path.join(__dirname, "..", ".trmnlp.yml");

  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source file not found: ${sourceFile}`);
  }

  if (!fs.existsSync(destFile)) {
    throw new Error(`Destination file not found: ${destFile}`);
  }

  const originalContent = fs.readFileSync(destFile, "utf-8"); // Save original content to restore later

  fs.copyFileSync(sourceFile, destFile);

  try {
    await page.goto("/full");
    const trmnlFrame = page.frameLocator("iframe");
    await expect(trmnlFrame.locator("div.title.error")).toHaveText(
      "Well this is awkward",
    );
    await expect(trmnlFrame.locator("div.value.error")).toHaveText(
      "Unable to find '666 Franklin St, Highgate Hill'. Please check your plugin settings.",
    );
    await expect(trmnlFrame.locator("div.title_bar span.instance")).toHaveText(
      "Unknown Address",
    );
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});

test("can see a invalid unit address when nothing is returned by the API for a unit address search", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "invalidunit.trmnlp.yml");
  const destFile = path.join(__dirname, "..", ".trmnlp.yml");

  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source file not found: ${sourceFile}`);
  }

  if (!fs.existsSync(destFile)) {
    throw new Error(`Destination file not found: ${destFile}`);
  }

  const originalContent = fs.readFileSync(destFile, "utf-8"); // Save original content to restore later

  fs.copyFileSync(sourceFile, destFile);

  try {
    await page.goto("/full");
    const trmnlFrame = page.frameLocator("iframe");
    await expect(trmnlFrame.locator("div.title.error")).toHaveText(
      "Well this is awkward",
    );
    await expect(trmnlFrame.locator("div.value.error")).toHaveText(
      "Unable to find '8/888 Franklin St, Highgate Hill'. Please check your plugin settings.",
    );
    await expect(trmnlFrame.locator("div.title_bar span.instance")).toHaveText(
      "Unknown Address",
    );
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});
