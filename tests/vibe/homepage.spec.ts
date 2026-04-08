import { test, expect } from "../../testing/vibe-core/base.fixture";

test.describe("Homepage", () => {
  test("laadt correct met titel", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Veriductus/i);
    await page.vibeCheck("homepage-geladen");
  });
});
