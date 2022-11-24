const breadPrice = 3.49;
//Day old bread is discounted by 60 percent;
const dayOldBreadPrice = breadPrice - ((60 / 100) * breadPrice);
//Write a program that begins by reading the number of loaves of day old bread being purchased from the user.
//All of the values should be displayed using two decimal places

const loavesPurchased = prompt ("How many loaves did you buy?");
const totalBreadPrice = (breadPrice * loavesPurchased).toFixed(2);
const totalPriceSpent = (dayOldBreadPrice * loavesPurchased).toFixed(2);
const totalDiscount = (totalBreadPrice - totalPriceSpent).toFixed(2);

//display the regular price for the bread, the discount because it is a day old, and the total price
//Each of these amounts should be displayed on its own line with an appropriate label. 
alert("Total bread price: €" + totalBreadPrice + "\nTotal Discount: €" + totalDiscount + "\nTotal Price: €" + totalPriceSpent)