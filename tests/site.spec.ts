import { expect, test } from "@playwright/test";

const pages = ["/", "/stay", "/stay/barrel-house-suite", "/our-story", "/restaurant", "/discover-statia", "/contact", "/faq", "/privacy"];

for (const path of pages) {
  test(`${path} renders without browser errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(path, { waitUntil: "networkidle" });
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test("booking and restaurant actions use verified external destinations", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('.site-header a[href="https://www.booking.com/hotel/bq/barrel-house-st-eustatius.html"]').first()).toHaveAttribute("target", "_blank");
  await expect(page.locator('a[href="https://barrel-house-statia.resos.com/booking"]').first()).toHaveAttribute("target", "_blank");
});

test("mobile menu opens, works, and closes after navigation", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "Mobile-only interaction");
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await page.getByRole("link", { name: "Stay", exact: true }).click();
  await expect(page).toHaveURL(/\/stay$/);
  await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
});

test("suite gallery supports keyboard navigation and close", async ({ page }) => {
  await page.goto("/stay/barrel-house-suite");
  const gallery = page.getByRole("button", { name: /^Open image 1 of/ });
  await gallery.scrollIntoViewIfNeeded();
  await gallery.click();
  await expect(page.getByRole("dialog", { name: "Suite image gallery" })).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator(".lightbox figcaption")).toContainText("02 / 10");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Suite image gallery" })).toBeHidden();
});

test("below-fold property images load when scrolled into view", async ({ page }) => {
  await page.goto("/");
  const image = page.locator(".suite-main-image img");
  await image.scrollIntoViewIfNeeded();
  await expect(image).toHaveJSProperty("complete", true);
  expect(await image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  await page.locator(".suite-feature").screenshot({ path: "qa/home-suite-section.png" });
});
