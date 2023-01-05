//define prices and plan
const planMonth = 15.00;
const additionalCallsCost = 0.25;
const additionalMessagesCost = 0.15;
const charge911 = 0.44;
const billTax = 0.05;

//asking the user how many minutes of calls and messages he/she made in the previous month and convert it in Int
let lastMonthMinutes = parseInt(prompt("How many minutes of calls you made in the previous month?"));
let lastMonthMessages = parseInt(prompt("How many messages you sent in the previous month?"));

//calculate additional minutes and messages
if(lastMonthMinutes > 50){
  lastMonthMinutes = lastMonthMinutes - 50;
} else{
  lastMonthMinutes = 0;
}
if(lastMonthMessages > 50){
  lastMonthMessages = lastMonthMessages - 50;
} else{
  lastMonthMessages = 0;
}

//calculate minutes and messages costs
let lastMonthMinutesCosts = 0;
if(lastMonthMinutes > 0){
  lastMonthMinutesCosts = lastMonthMinutes * additionalCallsCost;
} else{
  lastMonthMinutesCosts = 0;
}
let lastMonthMessagesCosts = 0;
if(lastMonthMessages > 0){
  lastMonthMessagesCosts = lastMonthMessages * additionalMessagesCost;
} else{
  lastMonthMessagesCosts = 0;
}

//calculate all other costs
let calcBillNet = planMonth + lastMonthMinutesCosts + lastMonthMessagesCosts + charge911;
let calcBillTax = calcBillNet * billTax;
let calcBillTotal = calcBillNet + calcBillTax;

//display last Month Bill
  // defining message with base plan cost
  let yourLastMonthBill = planMonth.toFixed(2) + "€ (base plan cost) \n";

  //if user has additional minutes, add cost and amount
  if(lastMonthMinutes > 0){
    yourLastMonthBill += 
      lastMonthMinutesCosts.toFixed(2) + "€ (" + lastMonthMinutes + " additional minutes) \n";
  }
  //if user has additional messages, add cost and amount
  if(lastMonthMessages > 0){
    yourLastMonthBill += 
      lastMonthMessagesCosts.toFixed(2) + "€ (" + lastMonthMessages + " additional messages) \n";
  }
  //add 911 support, tax and total
  yourLastMonthBill += 
    charge911.toFixed(2) + "€ (emergency call support) \n" +
    calcBillTax.toFixed(2) + "€ (5% tax) \n" +
    "----------------------- \n" +
    calcBillTotal.toFixed(2) + "€ Bill Total";

  //display Bill
  alert(yourLastMonthBill);