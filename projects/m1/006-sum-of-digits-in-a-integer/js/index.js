// declare variable

let userNumber = "";

// user input request

do {userNumber = prompt('Enter a number', '')
  } while (userNumber.length != 4);

// extract single character

let firstNumber = userNumber.slice(0, 1);
let secondNumber = userNumber.slice(1, 2);
let thirdNumber = userNumber.slice(2, 3);
let fourthNumber = userNumber.slice(3, 4);

// convert character in number and sum them

let sumNumbers = parseInt(firstNumber) + parseInt(secondNumber)  + parseInt(thirdNumber)  + parseInt(fourthNumber);

// display mathematical sum and result

alert(firstNumber + "+" + secondNumber + "+" + thirdNumber + "+" + fourthNumber + "=" + sumNumbers);