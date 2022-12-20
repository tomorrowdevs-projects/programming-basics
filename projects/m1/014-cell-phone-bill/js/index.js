//asking user the day and month of birth
let minutesCallsByUser = prompt("Insert your total minutes of call in the previous month.");
let messagesSentByUser = prompt("Insert your total messages sent in the previous month.");

//convert string in numbers
minutesCallsByUser = parseInt(minutesCallsByUser);
messagesSentByUser = parseInt(messagesSentByUser);

// defining plan & costs
const planCalls = 50;
const planMessages = 50;
const planCost = 15.00;
const plan911Support = 0.44;
const costForCalls = 0.25;
const costForMessages = 0.15;
const planTaxes = 0.05;

// function to calculate charge in minutes and messages surpluses
function calcPlanSurplus(usedByUser, includedByPlan) {
  if(usedByUser > 50){
    usedByUser = usedByUser - includedByPlan;
  } else{
    usedByUser = 0;
  }
  return usedByUser;
}

// calculate charge in min and messages
minutesCallsByUser = calcPlanSurplus(minutesCallsByUser, planCalls);
messagesSentByUser = calcPlanSurplus(messagesSentByUser, planMessages);

// calculate all costs, taxes, fee and total
let minutesSurplusCost = minutesCallsByUser * costForCalls;
let messagesSurplusCost = messagesSentByUser * costForMessages;
let billCalcNet = planCost + minutesSurplusCost + messagesSurplusCost + plan911Support;
let billCalcTaxes = billCalcNet * planTaxes;
let billTotal = billCalcNet + billCalcTaxes;

// defining different messages for the alert
const messagePlanCost = planCost.toFixed(2) + "€ for Plan base cost + \n";
const messageMinutesSurplusCost = minutesSurplusCost.toFixed(2) + "€ for " + minutesCallsByUser + " minutes in surplus + \n";
const messageMessagesSurplusCost = messagesSurplusCost.toFixed(2) + "€ for " + messagesSentByUser + " messages in surplus + \n";

// these mssages are created to be included in a single variable
const messagePlan911Support = plan911Support.toFixed(2) + "€ for emergency calls support + \n";
const messageBillCalcTaxes = billCalcTaxes.toFixed(2) + "€ for 5% taxes \n";
const messageDivider = "-----------------------\n";
const messageBillTotal = billTotal.toFixed(2) + "€ of Total";

// variable include the previous 4 messages
const message911TaxesDividerAndTotal = messagePlan911Support + messageBillCalcTaxes + messageDivider + messageBillTotal;

// alert for each case
/*if(minutesCallsByUser > 0 && messagesSentByUser > 0){
  alert(messagePlanCost + 
        messageMinutesSurplusCost + 
        messageMessagesSurplusCost + 
        message911TaxesDividerAndTotal);
} else if(minutesCallsByUser > 0 && messagesSentByUser == 0){
  alert(messagePlanCost + 
        messageMinutesSurplusCost + 
        message911TaxesDividerAndTotal);
} else if(minutesCallsByUser == 0 && messagesSentByUser > 0){
  alert(messagePlanCost + 
        messageMessagesSurplusCost + 
        message911TaxesDividerAndTotal);
} else{
  alert(messagePlanCost + 
        message911TaxesDividerAndTotal);
}*/

let finalMessage = messagePlanCost;

if(minutesCallsByUser > 0){
  finalMessage += messageMinutesSurplusCost;
}

if(messagesSurplusCost > 0){
  finalMessage += messageMessagesSurplusCost;
}

finalMessage += message911TaxesDividerAndTotal;

alert(finalMessage);