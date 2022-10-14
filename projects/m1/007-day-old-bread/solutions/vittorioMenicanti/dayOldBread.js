

//Day Old Bread

const breadQuantities = parseFloat(prompt('Enter quantities of bread:'));

const breadPrice = 3.49;

const oldBread = 60;

let totalPrice = breadQuantities * breadPrice;

let discount = (oldBread/100)*breadPrice;

let discountedPrice = totalPrice - discount;

console.log(`Bread Quantities Purchased: ${breadQuantities} Breads`);

console.log(`Bread Price is: ${breadPrice.toFixed(2)}`);

console.log(`Total price is: ${totalPrice.toFixed(2)}`);

console.log(`Discount applied is: ${60}%`);

console.log(`Total dicounted price is: ${discountedPrice.toFixed(2)}`);

console.log(`Thanks for buying at our place,See you!`);

