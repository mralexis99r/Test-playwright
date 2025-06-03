import { test, expect } from '@playwright/test';


test.describe("Test Suite", async () => {

    test('User go to facebook page', async ({ page }) => {
        await test.step("User go to URL", async () => {
            await page.goto('https://facebook.com/');
            await page.screenshot({path: "./Evidence/Captures" + Date.now() + "screenshot.png"});
        });

        await test.step("User can see the page", async () => {
            await expect(page.locator('img[alt="Facebook"]')).toBeVisible();
            await page.screenshot({path: "./Evidence/Captures" + Date.now() + "screenshot.png"});

        });

    });

    test('login with credentials', async ({ page }) => {
        await test.step("User go to URL", async () => {
            await page.goto('https://facebook.com/login');
        });

        await test.step("User can see the page", async () => {
            await expect(page.locator('img[alt="Facebook"]')).toBeVisible();

        });

        await test.step("Fill Login with credentials", async () => {
           await page.locator('[name="email"]').fill('8126165476');
           await page.screenshot({path: "./Evidence/Captures" + Date.now() + "screenshot.png"});

        });

        await test.step("Fill password", async() => {
            await page.locator('[name="pass"]').fill('Doomed2016');
            await page.screenshot({path: "./Evidence/Captures" + Date.now() + "screenshot.png"});
        });

        await test.step("Click on Login", async() => {
            await page.locator('[name="login"]').click();
            await page.screenshot({path: "./Evidence/Captures" + Date.now() + "screenshot.png"});
        });

        /*await page.pause(); -- por si quiero pausar algo-- */ 

    
    });

});

