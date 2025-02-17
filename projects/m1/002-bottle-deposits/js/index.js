// Data type request
const prompt = require('prompt-sync')();
const bottleOneL = parseInt(prompt('Enter the number of 1-liter bottles: '), 10);
const bottlePlusOneL = parseInt(prompt('Enter the number of bottles larger than 1 liter: '), 10);

// Calculate total containers collected by the user
const cashRefoundOneL = 0.10;
const cashRefoundPlusOneL = 0.25;
let cashRefoundTotal = 0;

// Calculate overall refund
let totalRefoundOneL = 0;
let totalRefoundPlusOneL = 0;
const totalBottle = bottleOneL + bottlePlusOneL;

if (bottleOneL >= 1) {
  totalRefoundOneL = bottleOneL * cashRefoundOneL;
  console.log("The number of 1-liter containers you collected is " + bottleOneL);
}
if (bottlePlusOneL >= 1) {
  totalRefoundPlusOneL = bottlePlusOneL * cashRefoundPlusOneL;
  console.log("The number of containers larger than 1 liter you collected is " + bottlePlusOneL);
}
cashRefoundTotal = totalRefoundOneL + totalRefoundPlusOneL;
console.log("The total refund you can expect for returning " + totalBottle + " containers is $" + cashRefoundTotal.toFixed(2));
