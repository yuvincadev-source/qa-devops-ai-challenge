const { test, expect } = require('@playwright/test');

test('Página de ejemplo', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});