const prompt = require('prompt-sync')();

var smallBottle = parseFloat(prompt("How many bottle holding 1 liter or less? "));
var bigBottle = parseFloat(prompt("How many bottle holding more then 1 liter? "));

var refund = (smallBottle * 0.10) + (bigBottle * 0.25);

console.log("The total refund is: " + refund.toFixed(2) + "€");