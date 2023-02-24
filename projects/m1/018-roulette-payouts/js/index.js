// Array containing the numbers of the red areas of the roulette wheel
const areasReadGreen = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];

// Insert Arrey areas grenn in to Arrey Areas Red for case "0 and case "00
areasReadGreen.push(["00", "0"]);

// Array containing the numbers of the Roulette payout range from 1 to 18
const intervalPayment = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// Variable declaration of type Number
let valueOddEven = 0, searchAreasRed = 0, searchIntervalPayment = 0;

// Variable declaration of type String
let roulette_PayOutsResul = "";

// Random number generator " Math.random() " to simulate the spin of the American Rulette wheel 
let nambersRandom = Math.floor(Math.random() * (36 + 1 + 1));

// Function for searching an element of an Array
function searchElementsArrayRedGreen(arrayReadGreen, numberSearch) { for (let i = 1; i < (arrayReadGreen.length - 1); i++) { if (arrayReadGreen[i] === numberSearch) { return true; } } }

// Function for searching an element of an Array
function searchElementsArray(contentArray, numberSearch) { for (let i = 1; i < contentArray.length; i++) { if (contentArray[i] === numberSearch) { return true; } } }
//  Conditional if statement to establish whether the generated numbers are even or odd 
if (nambersRandom % 2) { valueOddEven = false; }
else { valueOddEven = true; }

// Call to the function for elements in an array for Red areas.
searchAreasRed = searchElementsArrayRedGreen(areasReadGreen, nambersRandom);

// Call to the function to search for elements in an array for the payout interval of the American Rule.
searchIntervalPayment = searchElementsArray(intervalPayment, nambersRandom);

// Conditional if statement to display whether PAYS 00 or PAYS 0 
if (nambersRandom === 37) { roulette_PayOutsResul = "Pay Area Green - Spin --> " + areasReadGreen[18][0]; }
else if (nambersRandom === 0) { roulette_PayOutsResul += "Pay Area Green - Spin --> " + areasReadGreen[18][1]; }
else {
    // Conditional if stacktement to display SPIN and PAY NUMBER
    if (searchAreasRed === true) {
        roulette_PayOutsResul += "The spin resulted in --> " + nambersRandom + "\nPay                  --> " + nambersRandom + "\nPay                  --> Area Red";
    } else {
        roulette_PayOutsResul += "The spin resulted in --> " + nambersRandom + "\nPay                  --> " + nambersRandom + "\nPay                  --> Area Black";
    }
    // Conditional statement if to display if the extracted number is EVEN or ODD
    if (valueOddEven === true) {
        roulette_PayOutsResul += "\nPay                  --> Number Even";
    } else {
        roulette_PayOutsResul += "\nPay                  --> Number Odd";
    }
    // Conditional statement if to display the RANGE of NUMBERS that have to PAY 
    if (searchIntervalPayment === true) {
        roulette_PayOutsResul += "\nPay from             -->  1 to 18";
    } else {
        roulette_PayOutsResul += "\nPay from             --> 19 to 36";
    }
}

// Final printout of the results stored in the variables
console.log(roulette_PayOutsResul);