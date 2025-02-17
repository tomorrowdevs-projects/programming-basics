
// An online retailer provides express shipping for many of its items at a rate of €10.99 for the first item in an order, and €2.99 for each subsequent item in the same order.

const prompt = require ("prompt-sync")();

const products = parseInt(prompt("Insert number of a products: "));

function shippingCost(){
    const baseRate = 10.99;
    const additionalRate = 2.99;
    const additionalProducts= products-1
    const totalShipping = (additionalProducts * additionalRate) + baseRate
    
    return `Total products: ${products}\nTotal shipping: ${totalShipping.toFixed(2)}€`;
    
}
console.log(shippingCost());