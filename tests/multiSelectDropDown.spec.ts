import {test, expect,Locator } from "@playwright/test";



test("Verifying multiSelect Dropdowns", async({page})=>{
    page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#colors").selectOption(['Red', 'Blue', 'Green']);
    await page.locator("#colors").selectOption([{label:'Green'}, {label:'Red'}]);


})

test("Verifying sorted dropDowns", async({page})=>{
    page.goto("https://testautomationpractice.blogspot.com/");

    const sortedArray:Locator= page.locator("#animals>options");

    const newTrimmed:string[]= (await sortedArray.allTextContents()).map(input => input.trim());

    const originalArray:string[]=[...newTrimmed]; //this is called spread operator, it prevents the .sort() function from affecting previous arraysLists
    const newSortedArray:string[]=[...newTrimmed].sort();

    expect(originalArray).toEqual(sortedArray);


})

test("Verifying duplicate dropDowns", async({page})=>{
    page.goto("https://testautomationpractice.blogspot.com/");
    const sortedArray:Locator= page.locator("#animals>options");
    const newTrimmed:string[]= (await sortedArray.allTextContents()).map(input => input.trim());
//Set does not allow duplicates so we can use that to find duplicates

    const setArray = new Set<string>(); //Dupes not allowed
    const dupes:string[]=[]; // allowed to have dupes

    for(const option of newTrimmed){

        if(setArray.has(option)){
            dupes.push(option)
        }else{
            setArray.add(option);
        }
    }

    console.log(dupes)

    expect(dupes.length).toBe(0);

    



})