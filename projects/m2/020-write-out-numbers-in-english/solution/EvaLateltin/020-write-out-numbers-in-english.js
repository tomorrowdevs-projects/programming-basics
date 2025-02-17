/*
LOGIC
Create an object that stores: 
- All numbers from 0 to 20
- An object of all the multiple of ten until one hundred
Create a prompt function that gets a number from the user: the number is between 0 and 999

Create a function that: 
- create an empty array
- get the length of the entered number
- if it is a 3 digit number, search for the first number in the object and then add to the empty array the number + "hundred"
- if the second digit is 1, search for the 2 and 3 digit in the object and then add to the empty array the corresponding number
- if the second is not 1, search for the 2 digit in the object.tens and search for the 3 digit in the object, add to the empty array the corresponding number 
*/

const corrNumbers = {
  0: "",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  tens: {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
  },
};

function writeNumber(number, initialValue) {
  let translatedNumber = initialValue;
  // Hundreds
  if (number.length === 3) {
    translatedNumber.push(corrNumbers[number[0]] + " hundred");
    writeNumber(number.splice(1), translatedNumber);
    //Tens
  } else if (number.length === 2) {
    if (number[0] == 1) {
      translatedNumber.push(corrNumbers[number.join("")]);
      return translatedNumber.join(" ");
    } else {
      translatedNumber.push(corrNumbers.tens[number[0]]);
      writeNumber(number.splice(1), translatedNumber);
    }
    // Units
  } else if (number.length === 1) {
    translatedNumber.push(corrNumbers[number[0]]);
    return translatedNumber.join(" ");
  }
  return translatedNumber.join(" ");
}

const enteredNumber = prompt("Enter a number between 0 and 999").split("");
console.log(writeNumber(enteredNumber, []));
