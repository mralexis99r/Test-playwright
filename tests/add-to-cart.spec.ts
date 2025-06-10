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
            await page.waitForTimeout(2000) //added timeout for await for the screenshot
            await page.screenshot({path: "./Evidence/add-to-cart/" + Date.now() + "screenshot.png"});
            
        });

        await test.step("User click on result of the search", async ({}) => {

            await page.locator('.s-main-slot .s-result-item').first().waitFor({ state: 'visible' });
            await page.locator('.s-main-slot .s-result-item').nth(0).click();
            await page.waitForTimeout(2000) //Added timeout for the screenshot
            await page.screenshot({ path: "./Evidence/add-to-cart/" + Date.now() + "screenshot.png" });
        
        });

        await test.step("User click on 'Add to Cart'", async ({}) => {

            await page.click("#add-to-cart-button");
            await page.waitForTimeout(2000) //Added timeout for the screenshot
            await page.screenshot({ path: "./Evidence/add-to-cart/" + Date.now() + "screenshot.png" });
            
        
        });

        await test.step("User click on 'proceedToRetailCheckout'", async ({}) => {

            await page.getByRole('button', {name: 'Proceder al pago'}).click();
            await page.waitForTimeout(2000) //added timeout for the screenshot
            await page.screenshot({ path: "./Evidence/add-to-cart/" + Date.now() + "screenshot.png" });
            
        
        });


        
        

       
        
        


    });

});