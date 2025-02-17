//cell phone plan
const maxPlanUsed = 50;
const pricePlan = 15.00;
let extraMinute;// 0.25;
let extxaMessage;// 0.15;
const emergenzeSupport = 0.44;

// reads the number of minutes and text messages used in a month
const userMinute = +prompt('Please, enter the number of minutes that you used in this month');
const userMessage = +prompt('Please, enter the number of messages that you used in this month');
//additional minutes
if(userMinute > maxPlanUsed){
  extraMinute =  ((userMinute - maxPlanUsed) * 0.25).toFixed(2);
} else {
  extraMinute = 0;
}
//additional messages
if(userMessage >= maxPlanUsed){
  extxaMessage =  ((userMessage - maxPlanUsed) * 0.15).toFixed(2);
} else {
  extxaMessage = 0;
}
console.log(extraMinute)
const tax = (((pricePlan + +extraMinute + +extxaMessage + emergenzeSupport)*5)/100).toFixed(2);
const totalPrice = (pricePlan + +extraMinute + +extxaMessage + +emergenzeSupport + +tax)

alert(`Your cell phone bill:\nBase price of the plan €${pricePlan}\nAdditional minute €${extraMinute}\nAdditional message €${extxaMessage}\n Emergenze support €${emergenzeSupport}\n Tax €${tax}\nTotal price of the plan €${totalPrice}`)