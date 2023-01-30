// constant declarationst
const priceBasePlan = 15;
const minutes_PlanBase = 50;
const sms_PlanBase = 50;
const minute_Additional = 0.25;
const sms_Additional = 0.15;
const service_911 = 0.44;
const salesTax_5_Percent = 5 / 100;
// variable declarations
let minutes_UserIn, sms_UserIn, minAdd, minAdd_Price, smsAdd, smsAdd_Price, salesTax, totalNet, totalInvoice;

minutes_UserIn = parseInt(prompt(`Insert the minutes used during the current month`));
sms_UserIn = parseInt(prompt(`Insert text messages used during the current month`));
// displays the price of the telephone plan as requested by the exercise
console.log("\nBASIC PRICE OF THE OHONE PLAN  € " + priceBasePlan.toFixed(2));
console.log("**************************************");
// if the minutes are greater than those of the monthly plan, it calculates and displays the minutes and price of the extra minutes used during the month
if (minutes_UserIn > minutes_PlanBase && !(minutes_UserIn < minutes_PlanBase)) {
  minAdd = minutes_UserIn - minutes_PlanBase;
  minAdd_Price = (minute_Additional * minAdd);
  alert("\nAdditional minutes used          N\u00B0  " + minAdd);
  alert("Additional Minutes price       €  " + minAdd_Price.toFixed(2) + "\n");
} else if (minutes_UserIn <= minutes_PlanBase || isNaN(minutes_UserIn)) { //  when there are no extra minutes used, set the price of the minutes to 0 with the Number() method returning 0 so that they are not displayed
  minAdd_Price = Number();
}
// if the SMS are greater than those of the monthly plan, it calculates and displays the price of the extra SMS used during the month
if (sms_UserIn > sms_PlanBase && !(sms_UserIn < sms_PlanBase)) {
  smsAdd = sms_UserIn - sms_PlanBase;
  smsAdd_Price = sms_Additional * smsAdd;
  alert("Additional SMS used              N\u00B0  " + smsAdd);
  alert("Additional SMS price           €  " + smsAdd_Price.toFixed(2) + "\n");
} else if (sms_UserIn <= sms_PlanBase || isNaN(sms_UserIn)) { // when there are no SMS used in addition, set the SMS price to 0 with the Number() method which returns 0 so that they are not displayed
  smsAdd_Price = Number();
}
// display the 911 call centre service
alert("Service 911 price              €  " + service_911.toFixed(2));
// calculate and display the net total of the telephone plan invoice
totalNet = priceBasePlan + minAdd_Price + smsAdd_Price + service_911;
alert("Net total of the phone plan    € " + totalNet.toFixed(2));
// calculate and display the 5% sales tax applied
salesTax = totalNet * salesTax_5_Percent;
alert("Sales tax 5%                   €  " + salesTax.toFixed(2) + "\n");
 // calculate and display the invoice amount of the telephone plan
totalInvoice = totalNet + salesTax;
alert("Total Invoice                  € " + totalInvoice.toFixed(2) + "\n");