
//Discount Table:

 /*A particular retailer is having a 60 percent off sale on a variety of discontinued products. The retailer would like to help its customers determine the reduced price of the merchandise by having a printed discount table on the shelf that shows the original prices and the prices after the discount has been applied.

Write a program that uses a loop to generate this table, showing the original price, the discount amount, and the new price for purchases of $4.95, $9.95, $14.95, $19.95 and $24.95. Ensure that the discount amounts and the new prices are rounded to 2 decimal places when they are displayed. */


const prices = [4.95, 9.95, 14.95, 19.95 ,24.95];


for(let i = 0; i <=prices.length -1; i++){

    //discount formula for each price/item in the array
    let discount = ((prices[i] * 60) / 100).toFixed(2);

    //difference between full price and discount
    let discountDifference = (prices[i] - discount).toFixed(2);


    alert(` Full price is : ${prices[i]}
            The discounted price is: ${discount}
            The difference between the full price and discounted price is: ${discountDifference}`);

}