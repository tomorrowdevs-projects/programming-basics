/*
Write a recursive function that converts a non-negative decimal number to binary.
Treat 0 and 1 as base cases which return a string containing the appropriate digit.
Write a main program that uses your recursive function to convert a non-negative integer entered by the user 
from decimal to binary. 
Your program should display an appropriate error message if the user enters a negative 
value.
*/

function getBinaryNumber(number) {

  /*
  * The function transforms a number in base 10 to a number in base 2 with recursion
  Ex: n = 15;
  I call => 15 / 2 = 7 | 15 % 2 = 1 (number = 7)
  II call => 7 / 2 = 3 | 7 % 2 = 1 (number = 3)
  III call => 3 / 2 = 1 | 3 % 2 = 1 (number = 1)
  IIII call number = 1 return number in string type
  III number = "1" + (3 % 2) = "11"
  II number = "1" + (7 % 2) = "111"
  I number = "1" + (15 % 2) = "1111"

  * @param {number} 
  * @return {string} number converted to a binary number
  */

  // negative or non-numbered check
  if (number < 0 || isNaN(number)) {
    alert("You must enter a positive number")

   // base of recursion
  } else if (number === 0 || number === 1) {
    return number.toString();
  } else {
    // recursive step
    return getBinaryNumber(Math.trunc(number / 2)) + number % 2;
  }
}

// main program
const numberToConvert = parseInt(prompt("Enter the number you want to convert to binary digits.\n(Must be a positive number)"));
alert(getBinaryNumber(numberToConvert));
