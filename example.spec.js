const { test, expect } = require('@playwright/test');

test('Basic test', async ({ page }) => {
  await page.goto('https://www.daraz.pk/');
  await expect(page).toHaveTitle(/Online Shopping/);
});