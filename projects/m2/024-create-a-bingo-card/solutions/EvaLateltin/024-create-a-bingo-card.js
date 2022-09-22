/*
LOGIC
Create a function that pushed to a Set a random number, until the set size is equal to five. 
Pass as paramethers two values: a minimum and a maximum value of the random number
Return the set as an array using the method Array.from - sorting the numbers in ascending order.

Create an object that stores BINGO letters as keys.
For each letter, call the function and pass as minimum/maximum values: 
- B: 1/15
- I: 16/30
- N: 31/45
- G: 46/60
- O: 61/75
*/

function fiveRandomNumbers(min, max) {
  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < 5) {
    uniqueNumbers.add(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return Array.from(uniqueNumbers).sort((a, b) => a - b);
}

const bingoCard = {
  B: fiveRandomNumbers(1, 15),
  I: fiveRandomNumbers(16, 30),
  N: fiveRandomNumbers(31, 45),
  G: fiveRandomNumbers(46, 60),
  O: fiveRandomNumbers(61, 75),
};

console.log(bingoCard);
