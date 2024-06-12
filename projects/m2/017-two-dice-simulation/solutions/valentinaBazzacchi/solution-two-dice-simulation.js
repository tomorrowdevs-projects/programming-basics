// Function to simulate the rolling of a pair of six-sided dice
function oneRoll(){
  let dice1 = Math.floor((Math.random() * 6) + 1);
  //console.log("dice 1: " + dice1);
  let dice2 = Math.floor((Math.random() * 6) + 1);
  //console.log("dice 2: " + dice2);
  return dice1 + dice2;
}
// Initialize a variable that will contain the result of 1000 rolls as an empty obj
let totalRolls = {}; 
// Function to simulate 1000 rolls of two dice --> returns object
function thousandRolls() {
  let rollnum = 1;
  // Repeat for 1000 times
  while (rollnum <= 1000) {
    // Add parameters to the object --> key: named as the current roll num, value: the result of a single roll by calling the function
    totalRolls[rollnum] = oneRoll();
    // Increment the roll num by one
    rollnum++;
  } // end while
  return totalRolls; 
} // end function

// Assing the result of the called function to the variable 
totalRolls = thousandRolls();

// Loop trought the object containing the 1000 rolls to display them in ascending order
/*
for (roll in totalRolls) {
  console.log("Roll n. " + roll + " Result: " +  totalRolls[roll]); 
}
*/

// Initialize a variable that will contain the number of times that each total occurs as an empty obj
let totals = {};
// Function to count the number of times that each total occurs --> returns object 
function totalsOccurrence(obj) {
  // Iterate the numbers that rapresent the possible totals of a two-dice roll
  for (let i = 2; i <= 12; i++) {
  totals[i] = 0; // Add a parameter to the "totals" obj --> key: possible result/total of a roll, value: starts from 0
    // Iterate for all the parameters in the passed-by-argument object (= roll in totalRolls) 
    for (roll in obj) {
      // If the value of the current roll is equal to "i" (each possible total from 2 to 12)
      if (obj[roll] === i) {
      // Add one to the value that pair with the key named as the current "i" (possible total) 
      totals[i] += 1;
      }
    } // end for...in
  } // end for
return totals; // --> key: result/total + value: number of time this total occurs
} 

// Assing the result of the called function to the variable 
totals = totalsOccurrence(totalRolls);

// Declare the variable that will contain the percentage of the frequency for each total
let freq; 
// Declare the variable that will contain the percentage expected by probability theory for each total
let prob;

// Calculate the frequency and the probability for each total
for (let total in totals) {
  freq = (totals[total] * 100) / 1000;
  if (total <= 7) {
    prob = ((total - 1) / 36) * 100;
  } else {
    prob = ((13 - total) / 36) * 100;
  }
  // Display the results: total + num of times that total occurs + frequency for that total + probability for that total
  console.log("Total: " + total + "\nNum of times: " + totals[total] + "\nFrequency: " + freq + "%" + "\nProbability: " + prob.toFixed(1) + "%");
} // end for...in