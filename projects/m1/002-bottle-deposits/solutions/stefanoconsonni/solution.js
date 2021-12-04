let numOfSmallBottles = prompt("How many bottles holding one liter (or less) do you have?");
let numOfBigBottles = prompt("How many bottles holding more than one liter do you have?");

let refundFromSmallBottles = numOfSmallBottles * 0.1;
let refundFromBigBottles = numOfBigBottles * 0.25;

let expectedRefund = refundFromSmallBottles + refundFromBigBottles;
alert(`The expected refund is: $ ${expectedRefund.toFixed(2)}`);
