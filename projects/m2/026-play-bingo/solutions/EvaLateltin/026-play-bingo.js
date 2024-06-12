/*
LOGIC 
Generate a single bingo card (from exercise 024). Create a second bingo card with the same values of the original bingo card. 
The copy will be used to cross out drawn numbers.

Create an array of all possible combinations of number drawn.

Define the variables:
- minimum calls
- maximum calls 
- average calls

Create a function that simulate n calls - it will take n as paramether and it will loop n times.
Each time the function is called it will: 
- Use the shuffle function to shuffle the combinations of numbers drawn.
- Use the function to check for a winning card. 
- Update the minimum, maximum and avarage calls variables, if necessary. 

Simulate 1000 calls.
*/

// SOLUTION EXERCISE 026: PLAY BINGO
let copiedBingoCard = structuredClone(originalBingoCard);

const possibleDrawnNumbers = new Array(90).fill(0).map((_, index) => index + 1);

const statistics = {
  minimumCalls: 2000,
  maximumCalls: 0,
  averageCalls: [],
  averageCallsResult: 0,
  numberOfCalls: 0,
  tempRepetitions: 0,
  averageCallsCalc() {
    this.averageCallsResult =
      this.averageCalls.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      ) / this.averageCalls.length;
  },
  updateStatistics() {
    this.numberOfCalls++;
    this.minimumCalls =
      this.tempRepetitions < this.minimumCalls
        ? this.tempRepetitions
        : this.minimumCalls;
    this.maximumCalls =
      this.tempRepetitions > this.maximumCalls
        ? this.tempRepetitions
        : this.maximumCalls;
    this.averageCalls.push(this.tempRepetitions);
    this.tempRepetitions = 0;
    this.averageCallsCalc();
  },
};

function callSimulation(times) {
  while (statistics.numberOfCalls < times) {
    checkIfWinningCard(shuffle(possibleDrawnNumbers));
    statistics.updateStatistics();
    copiedBingoCard = structuredClone(originalBingoCard);
    bingoState = false;
  }
  console.log(statistics);
}

callSimulation(1000);
