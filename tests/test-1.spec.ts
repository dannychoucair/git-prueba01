import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Shopping cart (0)' }).click();
});