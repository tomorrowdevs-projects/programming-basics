// Main Program
let userNumber = prompt("Enter the number of units");
let testNumber = /^\d+$/;
// Verify user input for the number of units, if isn't correct --> Error Message + Exit the Program!
if (!testNumber.test(userNumber)) {
    alert("Invalid number of units!")
// Else read the unit of measure by the user and call the function
} else {
    let userUnit = prompt("Enter the unit of measure: cup, tablespoon or teaspoon");
    reduceMeasures(userNumber, userUnit);
}

function reduceMeasures(number, unit) {
    let cup, tbsp, tsp;

    if (unit == "cup" || unit ==  "cups") {
    cup = number;
    return alert(cup + " cup/s");

    } else if (unit == "tablespoon" || unit == "tablespoons")  {
    cup = Math.floor( number / 16);
    tbsp = number % 16;
    return alert(cup + " cup/s, " + tbsp + " tbsp");

    } else if (unit == "teaspoon" || unit == "teaspoons") {
    cup = Math.floor( number / 48),
    tsp = number % 48;
    tbsp = Math.floor( tsp / 3);
    tsp = tsp % 3;
    return alert(cup + " cup/s, " + tbsp + " tbsp, " + tsp + " tsp");
    // If the unit of measure entered by the user is not among those specified in the previous conditions --> Error Message!
    } else {
    alert ("Invalid unit of measure!");
    }

} // end function