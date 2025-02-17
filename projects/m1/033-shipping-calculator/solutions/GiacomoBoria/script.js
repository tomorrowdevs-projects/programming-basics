/*An online retailer provides express shipping for many of its items at a rate of €10.99 for the first item in an order, and €2.99 for each subsequent item in the same order.

Write a function that takes the number of items in the order as its only parameter{.}

Return the shipping charge for the order as the function’s result.

Include a main program that reads the number of items purchased from the user and displays the shipping charge.

*/

function calcPriceOrder(totalOrders) {
  
    const firstShipping = 10.99;
    const otherShipping = 2.99;
  
    if (totalOrders == 1) {
      alert(`the shipping cost of your order is: ${firstShipping} €`);
    } else if (totalOrders > 1) {
      totalOrders -= 1;
      alert(`the shipping cost of your orders is: ${firstShipping + (totalOrders * otherShipping)} €`);
    } else {
      alert("Sorry, error input.\nTry again.");
    }
  }
  
  const orders = Number(prompt("Type the total of the orders you placed:"))
  
  calcPriceOrder(orders)