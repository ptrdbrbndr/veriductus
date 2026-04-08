import { test, expect } from "../../testing/vibe-core/base.fixture";

const DIENST_SLUGS = [
  "test-automatisering",
  "qa-architectuur",
  "kwaliteitsmonitoring",
  "cicd-integratie",
  "team-coaching",
  "security-testing",
];

test.describe("Diensten overzicht", () => {
  test("toont 6 dienstkaarten", async ({ page }) => {
    await page.goto("/diensten");
    for (const slug of DIENST_SLUGS) {
      await expect(page.getByTestId(`dienst-${slug}`)).toBeVisible();
    }
    await page.vibeCheck("diensten-overzicht");
  });

  test("diensten CTA knop is zichtbaar", async ({ page }) => {
    await page.goto("/diensten");
    await expect(page.getByTestId("diensten-cta")).toBeVisible();
    await page.vibeCheck("diensten-cta");
  });
});

test.describe("Dienstdetailpagina's", () => {
  for (const slug of DIENST_SLUGS) {
    test(`${slug} — laadt correct`, async ({ page }) => {
      await page.goto(`/diensten/${slug}`);
      await expect(page.getByTestId("dienst-titel")).toBeVisible();
      await expect(page.getByTestId("dienst-detail-cta")).toBeVisible();
      await expect(page.getByTestId("dienst-quick-scan-cta")).toBeVisible();
      await page.vibeCheck(`dienst-detail-${slug}`);
    });
  }
});
