/*
Create an object that stores the roman numerals and the corresponding number.
Create a prompt that get a value from the user. We assume that the user inputs a positive number that is between 0 and 3999.
Create a function that: 
- Return "" if the number is 0
- Otherwise, it finds the first value in the object that is less than the entered value
- The values in the objects are ordered in descending order, meaning that the greatest value is first
- The function return the key corresponding to this value, and it run this function again, using the difference between the entered value and the first value.
- The function keeps running until it reaches 0, where an empty string is returned.

Create another function: 
- It get a roman numeral as parameter
- Split the roman numeral to an array
- run a loop through all the elements that: 
    - add the current element if it is greater than the following element
    - subtract the current element if it is less than the following element
- return the sum 
*/

const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

// FROM NUMBER TO ROMAN NUMERAL

const enteredValue = prompt("Enter a number between 1 and 3999");

function getRomanNumeral(number) {
  const romanKey = Object.keys(romanNumerals).find(
    (key) => romanNumerals[key] <= number
  );
  const romanValue = romanNumerals[romanKey];
  return number === 0 ? "" : romanKey + getRomanNumeral(number - romanValue);
}

console.log(`The roman number is: ${getRomanNumeral(enteredValue)}`);

// FROM ROMAN NUMERAL TO NUMBER

const enteredRomanValue = prompt("Enter a roman numeral.")
  .toUpperCase()
  .split("");

function getNumber(romanNumber) {
  const translatedRomanNumber = romanNumber.map(
    (value) => romanNumerals[value]
  );
  let sum = 0;
  for (let i = 0; i < translatedRomanNumber.length; i++) {
    translatedRomanNumber[i] < translatedRomanNumber[i + 1]
      ? (sum -= translatedRomanNumber[i])
      : (sum += translatedRomanNumber[i]);
  }
  return sum;
}

console.log(`The number is: ${getNumber(enteredRomanValue)}`);
