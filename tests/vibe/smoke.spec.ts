import { test, expect } from '../../testing/vibe-core/base.fixture';

/**
 * Veriductus — Smoke tests
 * Controleert dat de publieke website correct laadt voor alle drie doelgroepen:
 * - Klanten (opdrachtgevers)
 * - Gilde-ondernemers
 * - Potentiele deelnemers
 */

test('homepage laadt zonder fouten', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Veriductus/i);
  await page.vibeCheck('homepage-geladen');
});

test('navigatie is zichtbaar en bereikbaar', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('nav-diensten')).toBeVisible();
  await expect(page.getByTestId('nav-gilde')).toBeVisible();
  await expect(page.getByTestId('nav-contact')).toBeVisible();
  await page.vibeCheck('navigatie-zichtbaar');
});

test('contactformulier is aanwezig en invulbaar', async ({ page }) => {
  await page.goto('/contact');
  await expect(page.getByTestId('contact-naam')).toBeVisible();
  await expect(page.getByTestId('contact-email')).toBeVisible();
  await expect(page.getByTestId('contact-bericht')).toBeVisible();
  await expect(page.getByTestId('contact-submit')).toBeVisible();
  await page.vibeCheck('contactformulier-aanwezig');
});

test('aanmeldpagina voor potentiele deelnemers bestaat', async ({ page }) => {
  await page.goto('/word-gilde-lid');
  await expect(page.getByTestId('aanmeld-email')).toBeVisible();
  await expect(page.getByTestId('aanmeld-submit')).toBeVisible();
  await page.vibeCheck('aanmeldpagina-geladen');
});

test('API intake-route weigert lege submissions', async ({ request }) => {
  const response = await request.post('/api/intake', {
    data: {},
    headers: { 'Content-Type': 'application/json' },
  });
  expect(response.status()).toBe(400);
});

test('API intake-route lekt geen stack trace', async ({ request }) => {
  const response = await request.post('/api/intake', {
    data: { email: 'ongeldig-geen-naam' },
    headers: { 'Content-Type': 'application/json' },
  });
  const body = await response.text();
  expect(body).not.toContain('at ');
  expect(body).not.toContain('node_modules');
  // vibeCheck via page vereist browser-context — API-test is voldoende
});

test('privacyverklaring is bereikbaar', async ({ page }) => {
  await page.goto('/privacy');
  await expect(page).toHaveTitle(/privacy/i);
  await page.vibeCheck('privacyverklaring-geladen');
});
