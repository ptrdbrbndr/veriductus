import { test, expect } from "../../testing/vibe-core/base.fixture";

test.describe("Over pagina", () => {
  test("toont titel en social proof stats", async ({ page }) => {
    await page.goto("/over");
    await expect(page.getByTestId("over-titel")).toBeVisible();
    await expect(page.getByTestId("stat-12plus")).toBeVisible();
    await expect(page.getByTestId("stat-150plus")).toBeVisible();
    await expect(page.getByTestId("stat-98pct")).toBeVisible();
    await page.vibeCheck("over-pagina");
  });

  test("CTA knoppen zijn zichtbaar", async ({ page }) => {
    await page.goto("/over");
    await expect(page.getByTestId("over-contact-cta")).toBeVisible();
    await expect(page.getByTestId("over-gilde-cta")).toBeVisible();
    await page.vibeCheck("over-cta");
  });
});
