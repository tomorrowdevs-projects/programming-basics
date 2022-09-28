let smallBottles = prompt('Do you have bottles equal to or less than one liter?');
let bigBottle = prompt('Do you have bottles of more than one liter?');
//console.log(smallBottles + " " + bigBottle)

let refundSmallBottles =  smallBottles * 0.10;
let refundBigBottles = bigBottle * 0.25;
//console.log(`Refund for small bottles: ${(refundSmallBottles).toFixed(2)}. \nRefund for big bottles: ${(refundBigBottles).toFixed(2)}.`);

let totRefunt = refundSmallBottles + refundBigBottles;
alert(`Refund: ${(totRefunt.toFixed(2))}`);