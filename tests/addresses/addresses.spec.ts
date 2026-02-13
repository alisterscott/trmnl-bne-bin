import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("can see a invalid house address when nothing is returned by the API for a house address search", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "invalidhouse.trmnlp.yml");
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
        const trmnlFrame = page.frameLocator("iframe");
        await expect(trmnlFrame.locator("div.title.error")).toHaveText(
          "Well this is awkward",
        );
        await expect(trmnlFrame.locator("div.value.error")).toHaveText(
          "Unable to find '666 Franklin St, Highgate Hill'. Please check your plugin settings.",
        );
        await expect(
          trmnlFrame.locator("div.title_bar span.instance"),
        ).toHaveText("Unknown Address");
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});

test("can see a invalid unit address when nothing is returned by the API for a unit address search", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "invalidunit.trmnlp.yml");
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
        const trmnlFrame = page.frameLocator("iframe");
        await expect(trmnlFrame.locator("div.title.error")).toHaveText(
          "Well this is awkward",
        );
        await expect(trmnlFrame.locator("div.value.error")).toHaveText(
          "Unable to find '8/888 Franklin St, Highgate Hill'. Please check your plugin settings.",
        );
        await expect(
          trmnlFrame.locator("div.title_bar span.instance"),
        ).toHaveText("Unknown Address");
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});

test("can see a valid house address when it is returned by the API for a house address search", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "validhouse.trmnlp.yml");
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
        const trmnlFrame = page.frameLocator("iframe");
        await expect(
          trmnlFrame.locator("div.title_bar span.instance"),
        ).toHaveText("100 FRANKLIN ST, HIGHGATE HILL");
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});

test("can see a valid unit address when it is returned by the API for a house address search", async ({
  page,
}) => {
  const sourceFile = path.join(__dirname, "validunit.trmnlp.yml");
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
        const trmnlFrame = page.frameLocator("iframe");
        await expect(
          trmnlFrame.locator("div.title_bar span.instance"),
        ).toHaveText("10/100 FRANKLIN ST, HIGHGATE HILL");
      });
    }
  } finally {
    fs.writeFileSync(destFile, originalContent, "utf-8"); // Restore original content
  }
});
