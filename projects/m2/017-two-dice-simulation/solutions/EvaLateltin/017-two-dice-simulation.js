/*
LOGIC
Create an object that stores the result of the dices. At the beginning, the value for each key will be 0 (later it will be increased).
Create a function that simulate the roll of two dices; the function return their sum. 
-> create a random number from 1 to 6 for each dice
-> return the sum of each dice

In the object, add the value 1 to the key that equals the result of the rolls of dices.

Create a loop that: 
- calls 1000 times the function that rolls the dices
- each time, it returns the frequency of each total (absolute value and percentage value)
- also return the expected probability
*/

let rolls = 0;
const rollResults = {
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
};

const rollProbability = {
  2: 1 / 36,
  3: 2 / 36,
  4: 3 / 36,
  5: 4 / 36,
  6: 5 / 36,
  7: 6 / 36,
  8: 5 / 36,
  9: 4 / 36,
  10: 3 / 36,
  11: 2 / 36,
  12: 1 / 36,
};

function rollOfDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function sumOfTwoDices() {
  return rollOfDice() + rollOfDice();
}

while (rolls < 1000) {
  const result = sumOfTwoDices();
  rollResults[result] += 1;
  rolls++;
  console.log(
    `The sum of the dices is ${result}. 
In ${rolls} rolls, we got ${rollResults[result]} times the value ${result} - ${(
      (rollResults[result] / rolls) *
      100
    ).toFixed(2)}% of times. 
The expected probability to get ${result} is ${(
      rollProbability[result] * 100
    ).toFixed(2)}%.`
  );
}
