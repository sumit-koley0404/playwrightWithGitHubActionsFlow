const{test,expect}=require('@playwright/test');

test('Login test',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('#userEmail').fill("sumitkoley727@gmail.com");
    await page.locator('#userPassword').fill("Sumit@123");
    await page.locator('#login').click();
    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');
})