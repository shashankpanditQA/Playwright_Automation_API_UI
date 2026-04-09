
import { test, expect, request } from '@playwright/test';
const loginPayload = {userEmail:"numberTest@guru.com",userPassword:"Kartik@123."};

test.beforeAll(async () => {

    const apicontext = await request.newContext();

    const apiresponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data:loginPayload
        })
         expect(apiresponse.ok()).toBeTruthy()
         const loginResponseJosn = await apiresponse.json();
         const tokenid = loginResponseJosn.token;
       console.log(tokenid);

});

test('API Login Test', async () => {
    console.log("Test executed");
});