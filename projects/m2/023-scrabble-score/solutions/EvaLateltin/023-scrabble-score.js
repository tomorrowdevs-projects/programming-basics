/*
Create an object that stores the value of each word.
Create a prompt that gets a word from the user
Use the function of reverse lookup to get the key of each letter value. 
Use the reduce function to sum the result of the reverse lookup of each letter
*/

const letterScore = {
  1: ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

const enteredWord = prompt("Enter a word to get the score")
  .toUpperCase()
  .split("");

function reverseLookup(object, value) {
  return Object.keys(object).find((key) => object[key].includes(value));
}

const score = enteredWord.reduce(
  (previousValue, currentValue) =>
    +previousValue + +reverseLookup(letterScore, currentValue),
  0
);

console.log(score);
