import { expect, test, Locator } from "@playwright/test";

test("Verify Checkbox", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.waitForTimeout(3000);
    
    const sundayCheckBox:Locator = page.getByLabel('sunday');
    await sundayCheckBox.check();

    expect(sundayCheckBox).toBeChecked();

    const checkBoxDays:string[]= ["Sunday","Saturday","Monday","Tuesday","Wednesday","Thursday","Friday"];

    const target:Locator[]=checkBoxDays.map(index => page.getByLabel(index));
    expect(target.length).toBe(7);

    for(const checkBox of target){
        await checkBox.check();
        await expect(checkBox).toBeChecked();
    }

    for(const checkBox of target.slice(-3)){
        await checkBox.uncheck();
        await expect(checkBox).not.toBeChecked();
        console.log("Unchecked days:", checkBox);
    }



    for(const checkBox of target){
        if (await checkBox.isChecked()){
            await checkBox.uncheck();
            await expect(checkBox).not.toBeChecked();
        }else{
            await checkBox.check();
            await expect(checkBox).toBeChecked();
        }
    }


//Checking random checkBoxes now:

const indexes:number[]=[1,3,6];

for (const i of indexes){
    await target[i].check();
    await expect(target[i]).toBeChecked();
}

//get specific day of week:

const dayName:string="Wednesday";

for(const dayLabel of checkBoxDays){

    if(dayLabel.toLowerCase() === dayName.toLocaleLowerCase()){
        const CheckedDayLabel:Locator= page.getByLabel(dayLabel);
        await CheckedDayLabel.check;
        await expect(CheckedDayLabel).toBeChecked;
    }
}

    // await page.waitForTimeout(3000);

});