/*
LOGIC
I° part
Create a variable that stores the value n from the user. 
Create a function that:
- has an array that stores all the divisors
- has a loop that push the number to the array if the remainder is === 0
- reduce the array in the sum of all the values stored inside it
- compare the value input from the user with the reduced array
- return true if they are equal, otherwise false

II° part
Create a loop that goes from 1 to 10,000 that calls the previous function and returns an array of all the perfect numbers.
*/

// I° part
let inputNumber = parseInt(prompt("Enter an integer number."));

function checkIfIsPerfectNumber(number) {
  const divisors = [];

  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  return (
    divisors.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    ) === number
  );
}
console.log(
  "Is the number you picked perfect? " + checkIfIsPerfectNumber(inputNumber)
);

// II° part
const perfectNumbersArray = [];
for (let i = 0; i <= 10000; i++) {
  if (checkIfIsPerfectNumber(i)) {
    perfectNumbersArray.push(i);
  }
}
console.log(
  "From 1 to 10,000 there are the following perfect numbers: " +
    perfectNumbersArray
);
