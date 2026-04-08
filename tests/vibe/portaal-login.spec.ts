import { test, expect } from "../../testing/vibe-core/base.fixture";

test.describe("Portaal login", () => {
  test("toont login formulier", async ({ page }) => {
    await page.goto("/portaal/login");
    await expect(page.getByTestId("login-email")).toBeVisible();
    await expect(page.getByTestId("login-wachtwoord")).toBeVisible();
    await expect(page.getByTestId("login-submit")).toBeVisible();
    await page.vibeCheck("portaal-login");
  });

  test("redirect naar login als niet ingelogd", async ({ page }) => {
    await page.goto("/portaal");
    await page.waitForURL("**/portaal/login");
    await expect(page.getByTestId("login-email")).toBeVisible();
    await page.vibeCheck("portaal-auth-redirect");
  });
});
