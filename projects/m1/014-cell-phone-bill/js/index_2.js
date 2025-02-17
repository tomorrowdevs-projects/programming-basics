// constant declarationst
const priceBasePlan = 15;
const minutes_PlanBase = 50;
const sms_PlanBase = 50;
const minute_Additional = 0.25;
const sms_Additional = 0.15;
const service_911 = 0.44;
const sales_Tax_Const = (5 / 100);
// variable declarations
let minutes_UserIn, sms_UserIn, minAdd_Price, smsAdd_Price, salesTax, totalNet, totalInvoice, invoiceMonthly;

minutes_UserIn = parseInt(prompt(`Insert the minutes used during the current month`));
sms_UserIn = parseInt(prompt(`Insert text messages used during the current month`));
// if the minutes are greater than those of the monthly plan, it calculates and displays the price of the extra minutes used during the month
if (minutes_UserIn >= minutes_PlanBase) {
  minAdd_Price = (minute_Additional * (minutes_UserIn - minutes_PlanBase));
} else if (minutes_UserIn <= minutes_PlanBase || isNaN(minutes_UserIn)) { // if the minutes are less than or equal to those of the basic plan, I set the price of the minutes to 0 with Number('')
  minAdd_Price = Number("");
}
// if the SMS are greater than those of the monthly plan, it calculates and displays the price of the extra SMS used during the month
if (sms_UserIn >= sms_PlanBase) {
  smsAdd_Price = (sms_Additional * (sms_UserIn - sms_PlanBase));
} else if (sms_UserIn <= sms_PlanBase || isNaN(sms_UserIn)) { // if the SMS  are less than or equal to those of the basic plan, I set the price of the minutes to 0 with Number('')
  smsAdd_Price = Number("");
}
//  alert() variable for the basic plan price 
invoiceMonthly = "BASIC PRICE OF THE OHONE PLAN    € " + priceBasePlan.toFixed(2) + "\n";
// condition for the display of additional minutes that if the price is greater than zero there have been additional minutes  
if (minAdd_Price > Number("")) {
  // alert() variable if extra minutes are made from the basic plan
  invoiceMonthly += "Additional minutes used  N\u00B0" + (minutes_UserIn - minutes_PlanBase) 
                 + "\nAdditional Minutes price         €  " + minAdd_Price.toFixed(2) + "\n";
}
// condition for the display of additional SMS that if the price is greater than 0 there have been additional SMS  
if (smsAdd_Price > Number("")) {
  // alert() variable if extra SMS are made from the basic plan
  invoiceMonthly += "Additional SMS used      N\u00B0" + (sms_UserIn - sms_PlanBase) + "\nAdditional SMS price             €  " + smsAdd_Price.toFixed(2) + "\n";
}
// calculation - net invoice 
totalNet = (priceBasePlan + service_911 + minAdd_Price + smsAdd_Price);
// calculation - 5% sales tax 
salesTax = (totalNet * sales_Tax_Const);
// calculation - total invoice
totalInvoice = totalNet + salesTax;
// 911 service cost display variable and calculation - net invoice - 5% sales tax - total invoice
invoiceMonthly += 
    "Service 911 price                €  " + service_911.toFixed(2) + "\n"
  + "Net total of the phone plan      € "  + totalNet.toFixed(2) + "\n"
  + "Total Sales tax 5%               €  " + salesTax.toFixed(2) + "\n"
  + "****************************************\n"
  + "Total Invoice                    € "  + totalInvoice.toFixed(2) + "\n";
// Telephone plan display
alert(invoiceMonthly);