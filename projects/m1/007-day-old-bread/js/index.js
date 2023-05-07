const prompt = require('prompt-sync')();
const sellingBread = parseInt(prompt('Quante pagnotte di pane vuoi comprare?: '), 10);

const freshBread = 3.49;
const oldBread = 3.49 - (3.49*60/100);
const realPrice = (sellingBread * freshBread).toFixed(2);
const discountPrice = (sellingBread * (3.49*60/100)).toFixed(2);
const finalPrice = (sellingBread * oldBread).toFixed(2);

const maxLenght = Math.max(realPrice.length, discountPrice.length, finalPrice.length);

const realPricePadded = realPrice.padStart(maxLenght, " ");
const discountPricePadded = discountPrice.padStart(maxLenght, " ");
const finalPricePadded = finalPrice.padStart(maxLenght, " ");

console.log(`Costo totale ${realPricePadded} Euro`);
console.log(`Sconto totale ${discountPricePadded} Euro`);
console.log(`Prezzo finale ${finalPricePadded} Euro`);