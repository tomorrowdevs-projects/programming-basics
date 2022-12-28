// Array of original prices
const listPrice = [4.95, 9.95, 14.95, 19.95, 24.95];
// Discount percentage
const discount = 0.6;

for(let i = 0; i < listPrice.length; i++){
  // Calculate the discount amount and the new price
  let discountedPrice = (listPrice[i] * discount).toFixed(2);
  let newPrice = (listPrice[i] - discountedPrice).toFixed(2);

  // Print the original price, discount, and new price
  console.log("Full Price: $" + listPrice[i]);
  console.log("Discount: 60%");
  console.log("Discounted Price: $" + newPrice);
  console.log("---------");
}