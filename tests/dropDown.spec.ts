import {test, expect,Locator } from "@playwright/test";



test("Verify DropDown", async({page})=>{

    page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#country").selectOption('Canada');

//Check the number of options in the dropdown(count):
    //this snippet below just prints the number of options in the dropdown
    const countryCount:number= await page.locator("#country>option").count();
    console.log("number of country in this dropdown:", countryCount)

    //But this snippet verfies the number of options in the dropdown with the toHaveCount() method
    const countryCount2:Locator= page.locator("#country>option");
    await expect(countryCount2).toHaveCount(10);

});