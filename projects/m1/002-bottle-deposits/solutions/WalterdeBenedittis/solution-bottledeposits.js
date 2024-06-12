const smallDeposit = 0.10;
const bigDeposit = 0.25;

let smallContainers = prompt("How many drink containers holding one liter or less do you have?");
let bigContainers = prompt("How many drink containers holding more than one liter do you have?");
smallTotal = smallDeposit * smallContainers;
bigTotal = bigDeposit * bigContainers;
let totalRefund = smallTotal + bigTotal;
alert("Congratulations! Your Total Refund is: " +totalRefund.toFixed(2) + "$" );