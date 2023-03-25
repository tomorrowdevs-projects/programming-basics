/* function to define the total price of the travel
    - variable " price_Additional_Single_Meter " --> calculates the price for the metre
    - variable " price_Additional_Single_Kilometre " --> calculates the total distance price
    - variable " price_Total_Travel " --> total travel price */
function priceDistanceFunction(distance) {

    price_Additional_Single_Metro = 0.25 / 140;
    price_Additional_Single_Kilometre = price_Additional_Single_Metro * 1000;
    price_Total_Travel = (price_Additional_Single_Kilometre * distance) + 4;
    return price_Total_Travel;

}

// variable " distance_To_Go " in which user input is stored --> travel kilometres
let distance_To_Go = parseInt(prompt("Enter the kilometers travelled --> "));
// call to the function " priceDistanceFunction " to calculate the price of the taxi travel in kilometres
let price_Travel = priceDistanceFunction(distance_To_Go);
// variable " message_Result " in which the output message is stored --> total price according to the kilometres entered by the user
let message_Result = `The total fare for a distance  km  " ${distance_To_Go} " is --> €. ${price_Travel.toFixed(2)}`;
// display of the variable " message_Result " in which the result is stored
console.log(`\n${message_Result} \n`);