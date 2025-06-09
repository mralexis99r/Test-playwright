import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

test.describe("Add to Cart", () => {

    test('add USB hub to cart', async({page}) => {
        await test.step("User go to URL Amazon", async () => {
            await page.goto('https://www.amazon.com.mx/');
        });


    });

});