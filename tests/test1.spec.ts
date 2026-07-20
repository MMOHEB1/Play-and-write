import{test, Expect,Locator} from "@playwright/test";


test("test dyanmic stop/start button", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    for(let i=0; i<5; i++){
        const Button:Locator = page.locator('//button[text()="STOP" or text()="START"]');
        await Button.click;

        await page.waitForTimeout(2000);


    }


}) 