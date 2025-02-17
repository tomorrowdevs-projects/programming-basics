/* A bakery sells loaves of bread for €3.49 each. Day old bread is discounted by 60 percent. 
Write a program that begins by reading the number of loaves of day old bread being purchased from the user. 
Then your program should display the regular price for the bread, the discount because it is a day old, and the total price. 
Each of these amounts should be displayed on its own line with an appropriate label. 
All of the values should be displayed using two decimal places, and the decimal points in all of the numbers should be aligned when reasonable values are entered by the user.*/


const regularPriceBread = 3.49;
const priceOldBread = regularPriceBread - (regularPriceBread * 60 / 100);

// Usersnumber of loaves of day old bread
const userInputOldBread = parseInt(prompt("Write down the amount of old bread you bought", 0));

// Price tot Bread and discount Bread
const userTotPaid = userInputOldBread * regularPriceBread;
const breadPriceDiscount = userInputOldBread * priceOldBread;
const totDiscount = userTotPaid - breadPriceDiscount;

alert(`You purchased ${userInputOldBread} of day old bread for a total of 
\nTotal price Bread:  ${userTotPaid.toFixed(2)}€\nDiscount:              -${totDiscount.toFixed(2)}€ \nTotal:                       ${breadPriceDiscount.toFixed(2)}€`)



