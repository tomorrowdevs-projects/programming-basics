/*
LOGIC
Create a variable that stores the value n from the user. 
Create an array that stores all the divisors
Write a loop that push the number to the array if the remainder is === 0
Alert the array, each value in a separate line
*/

let number = parseInt(prompt("Enter an integer number."));
const divisors = [];

for (let i = 0; i < number; i++) {
  if (number % i === 0) {
    divisors.push(i);
  }
}
alert(divisors.join("\r\n"));
