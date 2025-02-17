// Array containing the numbers of the red areas of the roulette wheel
const areasRead = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];

// Array containing the numbers of one of the two payment ranges --> 1 to 18 of the roulette wheel
const intervalPayment = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// Array containing the numbers of one of the two payment ranges --> 1 to 18 of the roulette wheel
const pay0Pay00_PayInterval = ["0", "00", "1-18", "19-36"];

// Variable declarations
let numbersRandom, i;

// String variable declaration
let roulette_PayOutsResul = "";

// Random number generator " Math.random() " to simulate the spin of the American Rulette wheel 
numbersRandom = Math.floor(Math.random() * 37);

// Function for searching an element of an Array
function arraySearchComparingNumbers(arraySeekElement, numberSearch) {
    for (i = 0; i < arraySeekElement.length; i++) {
        if (arraySeekElement[i] === numberSearch) { return true; }
    }
}

// Function to establish whether a number or equal or odd.
function OddEven(namberCheck) {
    if (namberCheck % 2) { return false; }
    else { return true; }
}

//  Function to establish what are the red areas of American roulette.
let arraySeekToCompareRedAreas = arraySearchComparingNumbers(areasRead, numbersRandom);

// Function to establish the payment interval of American roulette.
let arrayintervalPayment = arraySearchComparingNumbers(intervalPayment, numbersRandom);

// Function for verification of equal or odd gods.
let checkNumberOddEven = OddEven(numbersRandom);

// Conditional if statement to display whether PAYS 00 or PAYS 0 
if (numbersRandom === 37) {
    roulette_PayOutsResul = ("Pay  Areas Grenn -->    " + pay0Pay00_PayInterval[1]);
} else if (numbersRandom === 0) {
    roulette_PayOutsResul += ("Pay  Areas Grenn -->    " + pay0Pay00_PayInterval[0]);
} else {

    // Conditional if statement to display SPIN and PAY NUMBER
    if (arraySeekToCompareRedAreas === true) {
        roulette_PayOutsResul += "The spin resulted in --> " + numbersRandom + "\nPay                  --> " + numbersRandom + "\nPay                  --> Area Red\n";
    } else {
        roulette_PayOutsResul += "The spin resulted in --> " + numbersRandom + "\nPay                  --> " + numbersRandom + "\nPay                  --> Area Black\n";
    }

    // Conditional statement if to display if the extracted number is EVEN or ODD
    if (checkNumberOddEven /*=== true*/) {
        roulette_PayOutsResul += "Pay                  --> Number Even\n";
    } else {
        roulette_PayOutsResul += "Pay                  --> Number Odd\n";
    }

    // Conditional statement if to display the RANGE of NUMBERS that have to PAY 
    // according to the number that came out of the spin of the Roulette wheel
    if (arrayintervalPayment/* === true*/) {
        roulette_PayOutsResul += "Pay Interval         -->  " + pay0Pay00_PayInterval[2] + "\n";
    } else {
        roulette_PayOutsResul += "Pay Interval         --> " + pay0Pay00_PayInterval[3] + "\n"
    }
}

// Final printout of the results stored in the variables
console.log("\n" + roulette_PayOutsResul);

//Check Areas Red
console.log("Areas Red --> " + areasRead);