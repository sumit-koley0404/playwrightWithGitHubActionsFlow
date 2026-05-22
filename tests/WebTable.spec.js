const { test, expect } = require("@playwright/test");

test("WebTable Using Loop", async ({ page }) => {

    await page.goto("https://letcode.in/table");
    const table = page.locator("#simpletable");
    const rows = table.locator("tbody tr");
    const rowsCount = await rows.count();

    for (let i = 0; i < rowsCount; i++) {
        const row = rows.nth(i);
        const texts = await row.locator("td").allTextContents();
        if (texts.includes("Iron")) {
            const checkBox = row.locator("input[type='checkbox']");
            await checkBox.check();
            await expect(checkBox).toBeChecked();
            await page.waitForTimeout(2000);
        }
    }

})
 