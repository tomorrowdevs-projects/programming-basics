
const LOAFPRICE =  3.49;
const LOAFPRICEOLD = ( 3.49 / 100 ) * 60;

let loafNumber = prompt("Hi, and welcome to 'Golden Bakery'!\nA loaf of bread is $ 3.49, but if you buy a one day old loaf of bread you'll get a 60% off discount each!\nPlease, enter the number of day old bread loaves you'd like to purchase: ");
loafNumber = Math.floor(loafNumber);

let totalAmountDis = (loafNumber * LOAFPRICEOLD).toFixed(2); 
let totalAmount = (loafNumber * LOAFPRICE).toFixed(2);
let discount = (totalAmount - totalAmountDis).toFixed(2);


alert("Thank you for your purchase!\n$" + totalAmount + " : was the full price.\n$" + discount + " : is the discount applied.\n$" + totalAmountDis + " : is your total!");