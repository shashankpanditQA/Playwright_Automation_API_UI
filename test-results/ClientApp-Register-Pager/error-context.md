# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientApp.spec.js >> Register Pager
- Location: tests/ClientApp.spec.js:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.col-text')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Join Rahul Shetty for a QA Career Meetup in CHENNAI — Book Your Spot" [ref=e11] [cursor=pointer]:
      - /url: http://qasummit.org/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - heading "Your Orders" [level=1] [ref=e26]
    - table [ref=e27]:
      - rowgroup [ref=e28]:
        - row "Order Id Product Image Name Price Ordered Date View Delete" [ref=e29]:
          - columnheader "Order Id" [ref=e30]
          - columnheader "Product Image" [ref=e31]
          - columnheader "Name" [ref=e32]
          - columnheader "Price" [ref=e33]
          - columnheader "Ordered Date" [ref=e34]
          - columnheader "View" [ref=e35]
          - columnheader "Delete" [ref=e36]
      - rowgroup [ref=e37]:
        - row "69d7da36f86ba51a6556ae39 iphone 13 pro $ 55000 Thu Apr 09 View Delete" [ref=e38]:
          - rowheader "69d7da36f86ba51a6556ae39" [ref=e39]
          - cell [ref=e40]:
            - img [ref=e41]
          - cell "iphone 13 pro" [ref=e42]
          - cell "$ 55000" [ref=e43]
          - cell "Thu Apr 09" [ref=e44]
          - cell "View" [ref=e45]:
            - button "View" [ref=e46] [cursor=pointer]
          - cell "Delete" [ref=e47]:
            - button "Delete" [ref=e48] [cursor=pointer]
        - row "69d79db5f86ba51a655604c8 iphone 13 pro $ 55000 Thu Apr 09 View Delete" [ref=e49]:
          - rowheader "69d79db5f86ba51a655604c8" [ref=e50]
          - cell [ref=e51]:
            - img [ref=e52]
          - cell "iphone 13 pro" [ref=e53]
          - cell "$ 55000" [ref=e54]
          - cell "Thu Apr 09" [ref=e55]
          - cell "View" [ref=e56]:
            - button "View" [ref=e57] [cursor=pointer]
          - cell "Delete" [ref=e58]:
            - button "Delete" [ref=e59] [cursor=pointer]
        - row "69d79d69f86ba51a655603a0 iphone 13 pro $ 55000 Thu Apr 09 View Delete" [ref=e60]:
          - rowheader "69d79d69f86ba51a655603a0" [ref=e61]
          - cell [ref=e62]:
            - img [ref=e63]
          - cell "iphone 13 pro" [ref=e64]
          - cell "$ 55000" [ref=e65]
          - cell "Thu Apr 09" [ref=e66]
          - cell "View" [ref=e67]:
            - button "View" [ref=e68] [cursor=pointer]
          - cell "Delete" [ref=e69]:
            - button "Delete" [ref=e70] [cursor=pointer]
        - row "69d79d21f86ba51a655602de iphone 13 pro $ 55000 Thu Apr 09 View Delete" [ref=e71]:
          - rowheader "69d79d21f86ba51a655602de" [ref=e72]
          - cell [ref=e73]:
            - img [ref=e74]
          - cell "iphone 13 pro" [ref=e75]
          - cell "$ 55000" [ref=e76]
          - cell "Thu Apr 09" [ref=e77]
          - cell "View" [ref=e78]:
            - button "View" [ref=e79] [cursor=pointer]
          - cell "Delete" [ref=e80]:
            - button "Delete" [ref=e81] [cursor=pointer]
        - row "69d79cc5f86ba51a6556006a iphone 13 pro $ 55000 Thu Apr 09 View Delete" [ref=e82]:
          - rowheader "69d79cc5f86ba51a6556006a" [ref=e83]
          - cell [ref=e84]:
            - img [ref=e85]
          - cell "iphone 13 pro" [ref=e86]
          - cell "$ 55000" [ref=e87]
          - cell "Thu Apr 09" [ref=e88]
          - cell "View" [ref=e89]:
            - button "View" [ref=e90] [cursor=pointer]
          - cell "Delete" [ref=e91]:
            - button "Delete" [ref=e92] [cursor=pointer]
        - row "69d79bf0f86ba51a6555fcda iphone 13 pro $ 55000 Thu Apr 09 View Delete" [ref=e93]:
          - rowheader "69d79bf0f86ba51a6555fcda" [ref=e94]
          - cell [ref=e95]:
            - img [ref=e96]
          - cell "iphone 13 pro" [ref=e97]
          - cell "$ 55000" [ref=e98]
          - cell "Thu Apr 09" [ref=e99]
          - cell "View" [ref=e100]:
            - button "View" [ref=e101] [cursor=pointer]
          - cell "Delete" [ref=e102]:
            - button "Delete" [ref=e103] [cursor=pointer]
        - row "69d79391f86ba51a6555e356 iphone 13 pro $ 55000 Thu Apr 09 View Delete" [ref=e104]:
          - rowheader "69d79391f86ba51a6555e356" [ref=e105]
          - cell [ref=e106]:
            - img [ref=e107]
          - cell "iphone 13 pro" [ref=e108]
          - cell "$ 55000" [ref=e109]
          - cell "Thu Apr 09" [ref=e110]
          - cell "View" [ref=e111]:
            - button "View" [ref=e112] [cursor=pointer]
          - cell "Delete" [ref=e113]:
            - button "Delete" [ref=e114] [cursor=pointer]
    - generic [ref=e115]: "* If orders Will be more than 7 your last order will get deleted"
  - generic [ref=e117]:
    - button "Go Back to Shop" [ref=e118] [cursor=pointer]
    - button "Go Back to Cart" [ref=e119] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { text } from 'node:stream/consumers';
  3   | 
  4   | test('Register Pager', async ({ page }) => {
  5   | 
  6   |     const productName = "iphone 13 pro";
  7   |     const email = "numberTest@guru.com";
  8   | 
  9   |     await page.goto("https://rahulshettyacademy.com/client");
  10  | 
  11  |     await page.locator("#userEmail").fill(email);
  12  |     await page.locator("#userPassword").fill("Kartik@123.");
  13  |     await page.locator('#login').click();
  14  | 
  15  |     await page.waitForLoadState('networkidle');
  16  | 
  17  |     const products = page.locator('.card-body');
  18  |     const counts_products = await products.count();
  19  | 
  20  |     for (let i = 0; i < counts_products; i++) {
  21  |         const text = await products.nth(i).locator('b').textContent();
  22  | 
  23  |         if (text.trim() === productName) {
  24  |             await products.nth(i).locator("text=Add To Cart").click();
  25  |             break;
  26  |         }
  27  |     }
  28  | 
  29  |     await page.locator("[routerlink*='cart']").click();
  30  |     await page.locator("div li").first().waitFor();
  31  | 
  32  |     const bool = await page.locator(`h3:has-text("${productName}")`).isVisible();
  33  |     expect(bool).toBeTruthy();
  34  | 
  35  |     await page.locator("text=Checkout").click();
  36  | 
  37  |     await page.locator("[placeholder*='Select Country']").pressSequentially("Ind", { delay: 100 });
  38  | 
  39  |     const results = page.locator(".ta-results");  // fixed space
  40  |     await results.waitFor();
  41  | 
  42  |     const optionsCount = await results.locator("button").count(); // await added
  43  | 
  44  |     for (let i = 0; i < optionsCount; i++) {
  45  |         let text = await results.locator("button").nth(i).textContent();
  46  | 
  47  |         if (text.trim() === 'India') {  // fixed match
  48  |             await results.locator("button").nth(i).click();
  49  |             break;
  50  |         }
  51  |     }
  52  | 
  53  |     await page.locator("input.input.txt").first()
  54  |         .fill("4542 9931 9292 2293");
  55  | 
  56  |     const dropdowns_credit = page.locator("select.input.ddl");
  57  |     await dropdowns_credit.first().selectOption("09");
  58  |     await dropdowns_credit.nth(1).selectOption("16");
  59  | 
  60  |     await page.locator(".field:has-text('Name on Card')")
  61  |         .locator("input.txt")
  62  |         .fill("Shashank Pandit");
  63  | 
  64  |     await page.locator(".field")
  65  |         .filter({ hasText: "CVV Code" })
  66  |         .locator("input")
  67  |         .fill("123");
  68  | 
  69  |     await page.locator(".field")
  70  |         .filter({ hasText: "Apply Coupon" })
  71  |         .locator("input")
  72  |         .fill("rahulshettyacademy");
  73  | 
  74  |     await page.locator("button:has-text('Apply Coupon')")
  75  |         .click();
  76  | 
  77  |     await page.locator(".action__submit").click();
  78  | 
  79  |     // ✅ Correct validation
  80  |     await expect(page.locator(".hero-primary"))
  81  |         .toContainText("Thankyou for the order");
  82  | 
  83  |     const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  84  |     console.log(orderId);
  85  | 
  86  |     await page.locator("button[routerlink*='myorders']").click();
  87  |      await page.locator("tbody").waitFor();
  88  |      const rows = page.locator("tbody tr")
  89  | 
  90  |      for(let i=0;i<rows.count;i++)
  91  |      {
  92  |            const rowOrderId = await rows.nth(i).locator("th").textContent();
  93  | 
  94  |            if(orderId.includes(rowOrderId))
  95  |            {
  96  |                 await rows.nth(i).locator("button").first().click();
  97  |                 break;
  98  |            }
  99  |      }
  100 | 
> 101 |        const orderIdDeatils = await page.locator(".col-text").textContent();
      |                                                               ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  102 |        expect(await rows.includes(orderIdDeatils.trim())).toBeTruthy();
  103 | 
  104 | });
  105 | 
  106 | 
  107 | 
```