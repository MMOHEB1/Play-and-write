import {test, expect,Locator } from "@playwright/test";



test("Verifying multiSelect Dropdowns", async({page})=>{
    page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#colors").selectOption(['Red', 'Blue', 'Green']);
    await page.locator("#colors").selectOption([{label:'Green'}, {label:'Red'}]);


})