// Insert the price of the products to be discounted in an Array.
const price_Product = [4.95, 9.95, 14.95, 19.95, 24.95];
// Discount percentage.
let percent_Discount = 60;
// Discount table function.
function caculateDiscount(price, percent) {
    let price_P;
    let discount;
    let price_D;
    let printTable = "";
    // loop to generate this table
    for (let i = 0; i < price.length; i++) {
        // Price of the product to be discounted.
        price_P = price[i];
        // Calculation of the " 60% " discount. on the product.
        discount = (price_P * percent) / 100;
        // Calculation of the price of the product already discounted by " 60% "
        price_D = (price_P - discount).toFixed(2);
        // Variable that contains all the results of the discount table.
        resultDiscount = `\nPrice Produc   -->  ${price_P} \nDiscount       -->  ${discount} \nPrice Descount -->  ${price_D} \n`;
        // printTable = console.log(resultDiscount);
    }
    printTable = resultDiscount;
    // I return the variable that contains all the results of the discount table to display it
    return printTable;
}
// Call to the function to store the results returned by the function in a variable used for displaying the table.
let resultTablePrecie = caculateDiscount(price_Product, percent_Discount);
// Discount table display.
console.log(resultTablePrecie)