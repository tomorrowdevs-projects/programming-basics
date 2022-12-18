/*While the popularity of cheques as a payment method has diminished in recent years, some companies 
still issue them to pay employees or vendors. The amount being paid normally appears on a cheque twice, with one occurrence written using digits, and the other occurrence written using English words.

Repeating the amount in two different forms makes it much more difficult for an unscrupulous employee or vendor to modify the amount on the cheque before depositing it. In this exercise, your task is to 
create a function that takes an integer between 0 and 999 as its only parameter, and returns a string containing the English words for that number.

For example, if the parameter to the function is 142 then your function should return “one hundred forty two”.

Use one or more dictionaries to implement your solution rather than large if/elif/else constructs. 
Include a main program that reads an integer from the user and displays its value in English words.*/

function getNumebrInLetter(num, objHundred, objTeen, objDecimal) {
  
// declare a variable for the final string number letter
  let numberInLtter = "";
  
  // check input: no letter no length +4
  if (isNaN(num)) {
    return "You have to dial a number";
  } else if (num.length >= 4) {
    return "Sorry, You must digit a number between 0 and 999";
  
  } else {
  // I replace missing parts with zero, useful for future conditions
    
    const indexNum = num.padStart(3,0);
    
  // I replace missing parts with zero, useful for future conditions
    const hundreds = indexNum[0];
    const dozens = indexNum[1];
    const unit = indexNum[2];

      if (hundreds != 0) {
        numberInLtter += objHundred[hundreds] + " hundred and ";
      } 
    
      if (dozens != 0 && dozens > 1) {
        numberInLtter += objDecimal[dozens] + " ";
      } else if (dozens == 1) {
        numberInLtter += objTeen[unit];
      }
    
      if (unit != 0 && dozens != 1) {
        numberInLtter += objHundred[unit];
      }
    
      if (hundreds == 0 && dozens == 0 && unit == 0) {
        numberInLtter += "zero";
      }
    }
  return numberInLtter;
}

const ojbNumberUnitHund = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
}

const ojbNumberTeen = {
  0: "ten",
  1: "eleven",
  2: "twelve",
  3: "thirteen",
  4: "fourteen",
  5: "fifteen",
  6: "sixteen",
  7: "seventeen",
  8: "eighteen",
  9: "nineteen",
}

const objNumberDecimal = {
  1: "",
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety"
}

const userInput = prompt("Write a number and I will turn it into its equivalent in English words:")

alert(getNumebrInLetter(userInput, ojbNumberUnitHund, ojbNumberTeen, objNumberDecimal))
