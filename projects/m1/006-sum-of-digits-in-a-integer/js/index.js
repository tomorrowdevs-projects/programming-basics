// richiesta input all'utente
do {userNumber = prompt('Enter a number', '')
  } while (userNumber.length != 4);

let firstNumber = userNumber.slice(0, 1);
let secondNumber = userNumber.slice(1, 2);
let thirdNumber = userNumber.slice(2, 3);
let fourthNumber = userNumber.slice(3, 4);

let sumNumbers = parseInt(firstNumber) + parseInt(secondNumber)  + parseInt(thirdNumber)  + parseInt(fourthNumber);

console.log (firstNumber + "+" + secondNumber + "+" + thirdNumber + "+" + fourthNumber + "=" + sumNumbers);