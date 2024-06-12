let userInteger = prompt('please enter a four-digit number ');

let firstNumber = userInteger[0];
let secondNumber = userInteger[1];
let thirdNumber  = userInteger[2];
let fourthNumber = userInteger[3];

let total = (+firstNumber + +secondNumber + +thirdNumber + +fourthNumber);

//The long variant 

//let total = (Number(firstNumber) + Number(secondNumber) + Number(thirdNumber) + Number(fourthNumber));


alert(`the sum of the numbers entered is: ${firstNumber} + ${secondNumber} + ${thirdNumber} + ${fourthNumber} = ${total}`)