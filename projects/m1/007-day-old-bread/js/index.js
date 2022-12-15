// Asking bread quantity

let breadQuantity = prompt("How many loaves of bread are you buying?");

let singleBreadPrice = 3.49;

//Appling discount

let discountValue = 0.6;

let breadPrice = breadQuantity * singleBreadPrice;

let breadDiscount = breadPrice * discountValue;

let breadDiscounted = breadPrice - breadDiscount;

console.log("breadPrice " + breadPrice.toLocaleString("it-IT", {style: "currency",currency: "EUR",}) + "\nbreadDiscount " + breadDiscount.toLocaleString("it-IT", {style: "currency",currency: "EUR",}) + "\nbreadDiscounted " + breadDiscounted.toLocaleString("it-IT", {style: "currency",currency: "EUR",}));
