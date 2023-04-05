/*
LOGIC
Create a function that get a value from the user. 
If the value is less than 0, or is not a number, show an error message.
If the value is 0, return 0.
If the value is 1, return 1. 
Otherwise, return the remainder of the value divided by 2 and sum it to the recursive function of the value divided by 2.
*/

const enteredValue = +prompt("Enter a positive number.");

function decimalToBinary(value) {
  if (isNaN(value) || value < 0) {
    return "Enter a positive number";
  }
  return value === 0
    ? 0
    : value === 1
    ? 1
    : String(decimalToBinary(Math.floor(value / 2))) + String(value % 2);
}

console.log(decimalToBinary(enteredValue));
