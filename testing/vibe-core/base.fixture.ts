import { test as base, expect, Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import * as path from 'path';
import * as fs from 'fs';

// Ensure reports directory exists
const reportsDir = path.resolve(__dirname, '../vibe-reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

type VibeError = {
  type: 'console' | 'pageerror' | 'network';
  message: string;
};

type VibePage = Page & {
  vibeCheck: (name: string) => Promise<void>;
};

type VibeFixtures = {
  page: VibePage;
  authContext: void;
};

export const test = base.extend<VibeFixtures>({
  page: async ({ page }, use, testInfo) => {
    const errors: VibeError[] = [];

    // Monitor console errors
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push({ type: 'console', message: msg.text() });
      }
    });

    // Monitor uncaught JS errors
    page.on('pageerror', (err) => {
      errors.push({ type: 'pageerror', message: err.message });
    });

    // Monitor network failures (404, 500)
    page.on('response', (response) => {
      const status = response.status();
      if (status === 404 || status >= 500) {
        errors.push({
          type: 'network',
          message: `[${status}] ${response.url()}`,
        });
      }
    });

    // Attach vibeCheck method to page
    (page as VibePage).vibeCheck = async (name: string) => {
      // Screenshot first (always capture state)
      const screenshotPath = path.join(reportsDir, `vibe-${name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      await testInfo.attach(`vibe-${name}`, { path: screenshotPath, contentType: 'image/png' });

      // Accessibility scan
      const a11yResults = await new AxeBuilder({ page }).analyze();
      const criticalViolations = a11yResults.violations.filter(
        (v) => v.impact === 'critical' || v.impact === 'serious'
      );

      if (criticalViolations.length > 0) {
        const summary = criticalViolations
          .map((v) => `  [${v.impact}] ${v.id}: ${v.description}`)
          .join('\n');
        console.warn(`[vibe-check] A11y violations on "${name}":\n${summary}`);
        await testInfo.attach(`a11y-${name}`, {
          body: JSON.stringify(criticalViolations, null, 2),
          contentType: 'application/json',
        });
      }

      // Fail on any collected errors
      if (errors.length > 0) {
        const errorSummary = errors.map((e) => `  [${e.type}] ${e.message}`).join('\n');
        throw new Error(
          `[vibe-check] "${name}" failed with ${errors.length} error(s):\n${errorSummary}`
        );
      }
    };

    await use(page as VibePage);
  },

  authContext: async ({ browser }, use) => {
    const authStatePath = path.resolve(__dirname, 'auth-state.json');
    if (fs.existsSync(authStatePath)) {
      // Auth state is applied via storageState in playwright.vibe.config.ts per project
      // This fixture is a hook for future authenticated test suites
    }
    await use();
  },
});

export { expect };
