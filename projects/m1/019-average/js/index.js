let numberQuantity = +prompt("Insered the number of the collection of values --> ");
// Empty Array Creation.
const averageNamberAray = []
//Declaration of variables of type Integer with value Zero.
let numberUser = 0;
let sumNumbersAverage = 0;
let resultAverage = 0;
// Declaration of variables of type Sringa
let messageError = "";
let ouputAverage = "";
// Function to check if a number has remainder.
function functionRest(numberRest) {
    if (numberRest % 2) { return true; }
    else { return false; }
}
// First check for zero.
if (numberQuantity === 0) {
    messageError = "\nERROR! --> You have entered an invalid value.\n";
    console.log(messageError);
}
else {
    // While loop to insert the numbers one by one into the empty array
    while (i < numberQuantity) {
        numberUser = +prompt("Insered the numbers to calculate the average --> ");
        //  Second check for zero.
        if (numberUser === 0) {
            messageError = "\nERROR! --> You have entered an invalid value.\n";
            console.log(messageError);
        }
        else {
            // Populate the empty averageNamberAray array
            averageNamberAray.push(numberUser)
            i++;
        }
    }
    // Average calculation.
    for (i = 0; i < averageNamberAray.length;) {
        sumNumbersAverage = (sumNumbersAverage + averageNamberAray[i++]);
        resultAverage = ((sumNumbersAverage / averageNamberAray.length));
    }
    //Call the "functionRest" function to check if the rest is a floating point number to adopt the toFixed() method.
    let resultAvarageRest = functionRest(resultAverage);
    //  Condition to determine whether it is a floating-point or integer number using the function " functionRest ".
    if (resultAvarageRest === true) {
        // Case floating point numbers
        ouputAverage = "\nAverage --> " + resultAverage.toFixed(2) + "\n";
    }
    else if (resultAvarageRest === false) {
        // Integer case numbers.
        ouputAverage += "\nAverage --> " + resultAverage + "\n";
    }
    // View the rest.
    console.log(ouputAverage);
}