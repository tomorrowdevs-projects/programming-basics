/* function " functionCalculationShippingTotal " for calculating the total price of article/article shipment;
   - variable " priceShipment "            --> shipping first article
   - variable " priceShippingArticleNext " --> shipping next article
   - IF " condition for the base price of the first article shipping
       - return base price price
   - ELSE " for the shipping price for each subsequent article of the same order
       - variable " numberNextArticle "    --> next number of articles
       - I return the base price price + the price for the next article */
function functionCalculationShippingTotal(numberItems) {
    let priceShipment = 10.99;
    let priceShippingArticleNext = 2.99;
    if (numberItems === 1) {
        return priceShipment;
    } else {
        numberNextArticle = numberItems - 1;
        return priceShipment = (numberNextArticle * priceShippingArticleNext) + priceShipment;
    }
}
// variable " number_Shipping_Article " --> stores the number of articles purchased by the user
let number_Shipping_Article = parseInt(prompt("Entered Number Shipping Article --> "));
// variable " shipping_Total "          --> stores the call to the function that restores the total price value of the shipping item/items
let shipping_Total = functionCalculationShippingTotal(number_Shipping_Article);
// variable " message_Result "          --> stores the message containing the number of items and the total price for their shipment
let message_Result = `The total price for shipping n ${number_Shipping_Article} items is --> €. ${shipping_Total}`;
// display the result of the variable   --> " message_Result ".
console.log(`\n${message_Result} \n`);