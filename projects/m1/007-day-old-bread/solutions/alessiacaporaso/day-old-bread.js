const breadPrice = 3.49;
const discount = (breadPrice * 60) / 100;
// number of pieces of bread
let numberBreadUser = parseInt(prompt('How many pieces do you want to buy?'));
//price bread without discount
const priceBreadBought =  (numberBreadUser * breadPrice).toFixed(2);
// discount old bread
const discountOldBread = (discount * numberBreadUser).toFixed(2);
// tot price
const totPrice = (priceBreadBought - discountOldBread).toFixed(2); 
alert(`The price of bread is:\n${priceBreadBought}\nDiscount is:\n${discountOldBread}\nPrice total is:\n${totPrice}`)