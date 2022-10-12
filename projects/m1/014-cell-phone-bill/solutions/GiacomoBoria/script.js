/*A particular cell phone plan includes 50 minutes of air time and 50 text messages for € 15.00 a month. 
Each additional minute of air time costs € 0.25, while additional text messages cost € 0.15 each. 
All cell phone bills include an additional charge of € 0.44 to support 911 call centers, and the entire bill (including the 911 charge) is subject to 5 percent sales tax. 
Write a program that reads the number of minutes and text messages used in a month from the user. 
Display the base charge, additional minutes charge (if any), additional text message charge (if any), the 911 fee, tax and total bill amount. 
Only display the additional minute and text message charges if the user incurred costs in these categories. Ensure that all of the charges are displayed using 2 decimal places.*/

const callMinutes = 50;
const mex = 50;
const costCall = 0.25;
const costMex = 0.15;
const phonePlan = 15;
const addSupport911 = 0.44;
const fee = 5/100; 

  // User Input
const userMinutes = Number(prompt("Type Type in how many minutes you've been on the phone this month", 0))
const userMex = Number(prompt("Type in how many messages you have sent this month", 0))

  // Base Bill
if (userMinutes <= callMinutes && userMex <= mex ) {
  const totFee = (phonePlan + addSupport911) * fee;
  const totBill = phonePlan + addSupport911 + totFee;
  alert(`Your basic phone rate: ${phonePlan.toFixed(2)}€\nRate 991 support ${addSupport911.toFixed(2)}€\nTax\(5\%\): ${totFee.toFixed(2)}€\nTotal: ${totBill.toFixed(2)}€`);
  
  // Condition add minutes and minutes
} else if (userMinutes > callMinutes && userMex > mex ) {
  const diffMinutesPlan = userMinutes - callMinutes;
  const diffMexPlan = userMex - mex;
  const addCostMinutes = diffMinutesPlan * costCall;
  const addCostMex = diffMexPlan * costMex;
  const totFee = (phonePlan + addSupport911 + addCostMinutes + addCostMex) * fee;
  const totBill = phonePlan + addSupport911 + addCostMinutes + addCostMex + totFee;
  alert(`Your basic phone rate: ${phonePlan.toFixed(2)}€\nRate 991 support: ${addSupport911.toFixed(2)}€\nAdditional minutes charge: ${addCostMinutes.toFixed(2)}€\nAdditional message charge: ${addCostMex.toFixed(2)}€\nTax\(5\%\): ${totFee.toFixed(2)}€\nTotal: ${totBill.toFixed(2)}€`);

  // Condition add minutes
} else if (userMinutes > callMinutes) {
  const diffMinutesPlan = userMinutes - callMinutes;
  const addCostMinutes = diffMinutesPlan * costCall;
  const totFee = (phonePlan + addSupport911 + addCostMinutes) * fee;
  const totBill = phonePlan + addSupport911 + addCostMinutes + totFee;
  alert(`Your basic phone rate: ${phonePlan.toFixed(2)}€\nAdditional minutes charge ${addCostMinutes}€\nRate 991 support ${addSupport911.toFixed(2)}€\nTax\(5\%\): ${totFee.toFixed(2)}€\nTotal: ${totBill.toFixed(2)}€`);

  // Condition add mex
} else if (userMex > mex ) {
  const diffMexPlan = userMex - mex
  const addCostMex = diffMexPlan * costMex;
  const totFee = (phonePlan + addSupport911 + addCostMex) * fee;
  const totBill = phonePlan + addSupport911 + addCostMex + totFee;
  alert(`Your basic phone rate: ${phonePlan.toFixed(2)}€\nAdditional message charge ${addCostMex.toFixed(2)}€\nRate 991 support ${addSupport911.toFixed(2)}€\nTax\(5\%\): ${totFee.toFixed(2)}€\nTotal: ${totBill.toFixed(2)}€`);
} 