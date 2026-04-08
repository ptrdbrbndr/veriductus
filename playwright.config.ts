import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/vibe',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: 'testing/vibe-reports', open: 'never' }]],
  use: {
    baseURL: process.env.VIBE_BASE_URL || 'http://localhost:3001',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: process.env.CI ? undefined : {
    command: 'npx next dev -p 3001',
    url: process.env.VIBE_BASE_URL || 'http://localhost:3001',
    reuseExistingServer: true,
    timeout: 60000,
    env: { COMING_SOON: 'false' },
  },
});
