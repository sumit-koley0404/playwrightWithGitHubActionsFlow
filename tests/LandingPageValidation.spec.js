const{test,expect}=require('@playwright/test');

test('Landing Page Validation',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // Validate the page title
    await expect(page).toHaveTitle('Automation Testing Practice');
})