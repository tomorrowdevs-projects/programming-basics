/*
LOGIC
Create a recursive function that create all the possible combinations of n coins. 
Initially, store these combinations as arrays and check if their sum is equal to the entered number of coins. 
Then, multiply each coin for their value and then add them all together. 
Store all of these combination in an array.
When the recursive function has ended, check if the array of combinations contains the entered dollar amount. 
If yes, return true, else return false.
*/

const coins = +prompt("Enter a number of coins."); // Number of coins
const coinValues = [0.25, 0.1, 0.05, 0.01]; // Value of coins: quarters, dimes, nickels and pennies
const combinationArray = []; // This array will contain the possible values of the combination of the n entered coins
const dollarAmount = +prompt("Enter an amount of dollars.");

// The array in the argument is used for recursion purpose; a default value is set when initialize the function so it is not required any parameter.
function getCombinations(array = []) {
  // This loop create all possible combinations of coins in array form: [quarters, dimes, nickels, pennies]
  for (let i = coins; i >= 0; i--) {
    let tempResult = [i].concat(array);
    if (tempResult.length === coinValues.length) {
      // Check if the sum of the coins in the combination is equal to the entered coin amount
      if (tempResult.reduce((acc, curr) => acc + curr) === coins) {
        //Map: multiply each coin's quantity times the coin's value
        // Reduce: return the sum of all the coins used
        tempResult = tempResult
          .map((value, index) => value * coinValues[index])
          .reduce((acc, curr) => acc + curr);
        combinationArray.push(tempResult);
      }
    } else {
      // Run the function again if the coin's combination is not long enough
      getCombinations(tempResult);
    }
  }
}
getCombinations();

console.log(combinationArray.includes(dollarAmount));
