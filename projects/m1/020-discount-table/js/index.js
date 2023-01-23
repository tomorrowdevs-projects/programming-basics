//Array for original prices
const originalPrices = [4.95, 9.95, 14.95, 19.95, 24.95];

//Discount to apply
const discountToApply = 0.6;

//Defining messages
const messageIntro = "Products in offer (everything " + (discountToApply * 100) + "% Off)\n"
let messagePrices = "";

//Calculate discounts and discounted prices. Add result to message
for(let i = 0; i < originalPrices.length; i++){
  //Calc discount and discounted prices
  let pricesToDiscount = (originalPrices[i] * discountToApply).toFixed(2);
  let pricesDiscounted = (originalPrices[i] - pricesToDiscount).toFixed(2);

  //Add results to message
  messagePrices += "---------- \n"
    + "Product N° " + parseInt(i+1) + " \n"
    + originalPrices[i] + "$ (Original price) - " 
    + pricesToDiscount + "$ (Discount) = \n" 
    + pricesDiscounted + "$ (Discounted Price) \n" 
    + "----------";
}

//Display message with all prices
alert(messageIntro.toUpperCase() + "----------" + messagePrices + "----------");