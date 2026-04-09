import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';

test('Register Pager', async ({ page }) => {

    const productName = "iphone 13 pro";
    const email = "numberTest@guru.com";

    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Kartik@123.");
    await page.locator('#login').click();

    await page.waitForLoadState('networkidle');

    const products = page.locator('.card-body');
    const counts_products = await products.count();

    for (let i = 0; i < counts_products; i++) {
        const text = await products.nth(i).locator('b').textContent();

        if (text.trim() === productName) {
            await products.nth(i).locator("text=Add To Cart").click();
            break;
        }
    }

    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();

    const bool = await page.locator(`h3:has-text("${productName}")`).isVisible();
    expect(bool).toBeTruthy();

    await page.locator("text=Checkout").click();

    await page.locator("[placeholder*='Select Country']").pressSequentially("Ind", { delay: 100 });

    const results = page.locator(".ta-results");  // fixed space
    await results.waitFor();

    const optionsCount = await results.locator("button").count(); // await added

    for (let i = 0; i < optionsCount; i++) {
        let text = await results.locator("button").nth(i).textContent();

        if (text.trim() === 'India') {  // fixed match
            await results.locator("button").nth(i).click();
            break;
        }
    }

    await page.locator("input.input.txt").first()
        .fill("4542 9931 9292 2293");

    const dropdowns_credit = page.locator("select.input.ddl");
    await dropdowns_credit.first().selectOption("09");
    await dropdowns_credit.nth(1).selectOption("16");

    await page.locator(".field:has-text('Name on Card')")
        .locator("input.txt")
        .fill("Shashank Pandit");

    await page.locator(".field")
        .filter({ hasText: "CVV Code" })
        .locator("input")
        .fill("123");

    await page.locator(".field")
        .filter({ hasText: "Apply Coupon" })
        .locator("input")
        .fill("rahulshettyacademy");

    await page.locator("button:has-text('Apply Coupon')")
        .click();

    await page.locator(".action__submit").click();

    // ✅ Correct validation
    await expect(page.locator(".hero-primary"))
        .toContainText("Thankyou for the order");

    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);

    await page.locator("button[routerlink*='myorders']").click();
     await page.locator("tbody").waitFor();
     const rows = page.locator("tbody tr")

     for(let i=0;i<rows.count;i++)
     {
           const rowOrderId = await rows.nth(i).locator("th").textContent();

           if(orderId.includes(rowOrderId))
           {
                await rows.nth(i).locator("button").first().click();
                break;
           }
     }

       const orderIdDeatils = await page.locator(".col-text").textContent();
       expect(await rows.includes(orderIdDeatils.trim())).toBeTruthy();

});


