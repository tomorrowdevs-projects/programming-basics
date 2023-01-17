let numberOfArticles = parseInt(prompt("Enter the number of items you intend to purchase."));

generatePrice(numberOfArticles);

function generatePrice(numberOfArticlesUser){

  const firstProductShippingCost = 10.99;
  const shippingCostOtherProducts = 2.99;
  let sumTotalPriceShipping = 0;

  sumTotalPriceShipping = firstProductShippingCost + ((numberOfArticlesUser - 1) * shippingCostOtherProducts);

  alert("The total cost of shipping is: €" + sumTotalPriceShipping.toFixed(2));

}