import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
import products from '../data/products.json'; // <-- here brings data

test.describe('Add to Cart', () => {
  for (const product of products) {
    test(`Add ${product.name} to cart`, async ({ page }) => {
      // STEP 1: GO TO AMAZON
      await page.goto('https://www.amazon.com.mx/');

      // STEP 2: SEARCH PRODUCT
      await page.locator('#twotabsearchtextbox').fill(product.name);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(2000);

      // STEP 3: CLICK TO RESULT
      await page.locator('.s-main-slot .s-result-item').first().click();
      await page.waitForTimeout(2000);

      // STEP 4: ADD TO CART
      await page.click('#add-to-cart-button');
      await page.waitForTimeout(2000);

      // STEP 5: PROCEED TO CHECKOUT
      await page.getByRole('button', { name: /proceder al pago/i }).click();
      await page.waitForTimeout(2000);
    });
  }
});