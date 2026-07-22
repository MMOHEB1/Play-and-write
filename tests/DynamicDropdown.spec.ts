import {test, expect,Locator } from "@playwright/test";


test("Verifying Dynamic Dropdowns", async({page})=>{
    page.goto("https://www.flipkart.com/");

    await page.locator("input[name='q']").fill("mobile");
    page.waitForTimeout(3000);


//command + shift + p to get the dynamic dropdown stuck to find the elements in DOM
    // const numOptions:number= await page.locator("ul>li").count();

    // console.log("number of items in dropDown when mobile is typed:", numOptions);


})
