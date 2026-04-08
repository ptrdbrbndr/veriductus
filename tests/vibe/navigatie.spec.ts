import { test, expect } from "../../testing/vibe-core/base.fixture";

test.describe("Navigatie", () => {
  test("nav bevat alle hoofdlinks", async ({ page }) => {
    await page.goto("/diensten");
    const nav = page.getByTestId("nav");
    await expect(nav).toBeVisible();
    await expect(nav.getByText("Diensten")).toBeVisible();
    await expect(nav.getByText("Over ons")).toBeVisible();
    await expect(nav.getByText("Whitepaper")).toBeVisible();
    await expect(nav.getByText("Contact")).toBeVisible();
    await page.vibeCheck("navigatie-links");
  });

  test("structured data is aanwezig", async ({ page }) => {
    await page.goto("/diensten");
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd).toBeAttached();
    const content = await jsonLd.textContent();
    expect(content).toContain("ProfessionalService");
    expect(content).toContain("Veriductus");
    await page.vibeCheck("structured-data");
  });
});
