/*A particular cell phone plan includes 50 minutes of air time and 50 text messages for € 15.00 a month. 
Each additional minute of air time costs € 0.25, while additional text messages cost € 0.15 each. 
All cell phone bills include an additional charge of € 0.44 to support 911 call centers, and the entire bill (including the 911 charge) is subject to 5 percent sales tax. 
Write a program that reads the number of minutes and text messages used in a month from the user. 
Display the base charge, additional minutes charge (if any), additional text message charge (if any), the 911 fee, tax and total bill amount.
 Only display the additional minute and text message charges if the user incurred costs in these categories. 
Ensure that all of the charges are displayed using 2 decimal places.*/


const callMinutes = 50;
const mex = 50;
const costCall = 0.25;
const costMex = 0.15;
const phonePlan = 15;
const addChargeCost = 0.44;
const fee = 5/100; 

// User Input
const userMinutes = Number(prompt("Type Type in how many minutes you've been on the phone this month", 0))
const userMex = Number(prompt("type in how many messages you have sent this month", 0))

if (userMinutes <= callMinutes && userMex <= mex ) {
  const totFee = (phonePlan + addChargeCost) * fee;
  const totBill = phonePlan + addChargeCost + totFee;
  alert(`Cost base charge: ${phonePlan.toFixed(2)}\n991 support ${addChargeCost.toFixed(2)}\nSales tax: ${totFee.toFixed(2)}\nTotal: ${totBill.toFixed(2)}`);
  
} else if (userMinutes > callMinutes || userMex > mex ) {
  const diffMinutesPlan = userMinutes - callMinutes;
  const diffMexPlan = userMex - mex;
  const addCostMinutes = diffMinutesPlan * costCall;
  const addCostMex = diffMexPlan * costMex;
  const totFee = (phonePlan + addChargeCost + addCostMex + addCostMinutes) * fee;
  const totBill = phonePlan + addChargeCost + addCostMinutes + addCostMex + totFee;
  alert(`${totBill.toFixed(2)}`);
}