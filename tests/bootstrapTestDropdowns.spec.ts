import {test, expect, Locator } from "@playwright/test";



test("Testing Boostrap hidden drop downs", async({page})=>{


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();

    await page.getByText("PIM").click();
//Click on the drop down by looking for the 2nd dropdown link
    await page.locator("form i").nth(2).click;
    await page.waitForTimeout(3000);
//find all the elements from the dropDown
    const options:Locator = page.locator("div[role='listbox'] span");

    const count:number= await options.count();

    console.log("number:", count);

})