let breadPrice = 3.49;

const prompt = require('prompt-sync')();

let totalBread = prompt('How many bread you want? ');
let totalPrice = (breadPrice * totalBread).toFixed(2);
let discountTotalPrice = (totalPrice * 0.40).toFixed(2);
let discount = (totalPrice - discountTotalPrice).toFixed(2);

console.log(`Subtotal: ${totalPrice}€`);
console.log(`Discount: ${discount}€`);
console.log(`Total: ${discountTotalPrice}€`);