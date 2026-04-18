const {test,expect} = require('@playwright/test');

test('Verify the landing page for RS', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveTitle("Practice Page");
});