/*A particular cell phone plan includes 50 minutes of air time and 50 text messages for € 15.00 a month. 
Each additional minute of air time costs € 0.25, while additional text messages cost € 0.15 each. 
All cell phone bills include an additional charge of € 0.44 to support 911 call centers, and the entire bill (including the 911 charge) is subject to 5 percent sales tax.*/

const prompt = require('prompt-sync')();


let minute = prompt('Insert minutes: ');
let sms = prompt('Insert sms: ');
let base = 15;
let support = 0.44;
let percentage = 1.05;

if (minute > 50 && sms <= 50) {
    let addMinuteCost = (minute - 50) * 0.25;
    let total = (base + addMinuteCost + support) * percentage;
    console.log(`The base charge cost is: ${base.toFixed(2)}€\nAdditional minute cost is: ${addMinuteCost.toFixed(2)}€\nThe support cost is: ${support.toFixed(2)}€\nThe total is ${total.toFixed(2)}€`)
} else if (minute > 50 && sms > 50) {
    let addMinuteCost = (minute - 50) * 0.25;
    let addSmsCost = (sms - 50) * 0.15;
    let total = (base + addMinuteCost + addSmsCost + support) * percentage;
    console.log(`The base charge cost is: ${base.toFixed(2)}€\nAdditional minute cost is: ${addMinuteCost.toFixed(2)}€\nAdditional sms cost is: ${addSmsCost.toFixed(2)}€\nThe support cost is: ${support.toFixed(2)}€\nThe total is ${total.toFixed(2)}€`)
} else if (minute <= 50 && sms > 50) {
    let addSmsCost = (sms - 50) * 0.15;
    let total = (base + addSmsCost + support) * percentage;
    console.log(`The base charge cost is: ${base.toFixed(2)}€\nAdditional sms cost is: ${addSmsCost.toFixed(2)}€\nThe support cost is: ${support.toFixed(2)}€\nThe total is ${total.toFixed(2)}€`)
}