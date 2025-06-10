import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
import products from '../data/products.json'; // <-- here brings data

test.describe("Add to Cart", () => {
  for (const product of products) {
    test(`Add ${product.name} to cart`, async ({ page }) => {

      // STEP 1: GO TO AMAZON
      await test.step("User go to URL Amazon", async () => {
        await page.goto('https://www.amazon.com.mx/');
        await page.waitForTimeout(5000);
        await page.screenshot({ path: `./Evidence/add-to-cart/${Date.now()}-step1.png` });
      });

      // STEP 2: SEARCH PRODUCT
      await test.step(`User search '${product.name}' in the input browser`, async () => {
        await page.locator('#twotabsearchtextbox').fill(product.name);
        await page.keyboard.press('Enter');
        await page.waitForTimeout(5000);

        // CHECK FOR CAPTCHA
        const isCaptcha = await page.locator('#captchacharacters').isVisible();
        if (isCaptcha) {
          console.log(`❌ CAPTCHA detected while searching: ${product.name}. Skipping test...`);
          test.skip(true, 'Captcha appeared');
        }

        await page.screenshot({ path: `./Evidence/add-to-cart/${Date.now()}-step2.png` });
      });

      // STEP 3: CLICK TO FIRST RESULT
      await test.step("User click on first result", async () => {
        await page.waitForSelector('.s-main-slot .s-result-item');
        await page.locator('.s-main-slot .s-result-item').first().click();
        await page.waitForTimeout(5000);
        await page.screenshot({ path: `./Evidence/add-to-cart/${Date.now()}-step3.png` });
      });

      // STEP 4: ADD TO CART
      await test.step("User click on 'Add to Cart'", async () => {
        await page.click('#add-to-cart-button');
        await page.waitForTimeout(5000);
        await page.screenshot({ path: `./Evidence/add-to-cart/${Date.now()}-step4.png` });
      });

      // STEP 5: PROCEED TO CHECKOUT
      await test.step("User click on 'Proceed to Checkout'", async () => {
        const checkoutButton = page.locator('input.a-button-input[type="submit"]');
        await checkoutButton.waitFor({ state: 'visible' });
        await checkoutButton.click();
        await page.waitForTimeout(3000);
        await page.screenshot({ path: `./Evidence/add-to-cart/${Date.now()}-step5.png` });
      });

    });
  }
});