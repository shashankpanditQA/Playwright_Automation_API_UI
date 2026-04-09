import { test, expect } from '@playwright/test';




test('browser context playwright program', async ({browser})=>
{
    const context = await browser.newContext();
    const page =  await context.newPage();
    const cards = await page.locator(".card-body a")
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title())

    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("Learning@830$3mK2");
    
    const dropdwn =  page.locator("select.form-control");
    await dropdwn.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
     await page.locator("#okayBtn").click();
     console.log( await page.locator(".radiotextsty").last().isChecked());
      expect (page.locator(".radiotextsty").last()).toBeChecked();
     await page.locator("#terms").click()
     expect (page.locator("#terms")).toBeChecked()
     await page.locator("#signInBtn").click();
    console.log(await page.locator(".card-body a").nth(0).textContent())
    
     const textValues = await cards.allTextContents();
     console.log(textValues)

});


test('Negitive Test invalid Credentails ', async ({browser})=>
{
    const context = await browser.newContext();
    const page =  await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title())

    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("kartik@123.");
    await page.locator("#signInBtn").click();
    await expect(page.locator("[style*='block']")).toContainText("Incorrect")
    await console.log(await page.locator("[style*='block']").textContent())
    

    /// to get all title of product 

   
});

test("Windlow handling concept",async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const downloadLink = page.locator("a[href*='documents-request']");

    const [newPage] = await Promise.all(
        [
            context.waitForEvent("page"),
            downloadLink.click(),
        ])
       const text = await newPage.locator(".red").innerText();
      const domain = text.split("@")[1].split(" ")[0];
       console.log(domain);

});




// test('page playwright program', async ({ page }) => {
//     await page.goto("https://google.com");
    

//     await expect(page).toHaveTitle("Google")
// });

// test.only('page playwright program', async ({ page }) => {
//     await page.goto("https://google.com");
//     console.log(await page.title());

//     await expect(page).toHaveTitle("Google")
// });