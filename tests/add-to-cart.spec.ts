import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

test.describe("Add to Cart", () => {

    test('add USB hub to cart', async({page}) => {
        await test.step("User go to URL Amazon", async () => {
            await page.goto('https://www.amazon.com.mx/');
            await page.screenshot({path: "./Evidence/add-to-cart/Captures" + Date.now() + "screenshot.png"});
        });

        await test.step("User search 'USB Hub' in the input browser", async({}) => {
            await expect(page.locator('#twotabsearchtextbox')).toBeVisible();
            await page.fill('#twotabsearchtextbox', 'USB Hub');
            await page.keyboard.press('Enter');
            await page.screenshot({path: "./Evidence/add-to-cart/Captures" + Date.now() + "screenshot.png"});
            await page.pause();
            
        });

        

       
        
        


    });

});