// Import a function to display all possible combinations given a list of numbers 
// and the value of the length of the combination. 
// Combinations with repeated numbers will also be considered

import { combineWithRepetitions } from './combine-with-repetitions.js';

// Function to get the sum of all numbers contained in an array
// Set initial value equal to zero to handle empty arrays
function possibleAmount(arr) {
	return arr.reduce((total, num) => { return total + num }, 0)
} // end function


function possibleChange(amount, coins, combos) {
    // Base Case
	if (possibleAmount(combos) === 0) {
		return false;
    // Recursive Case    
	} else {
		if (possibleAmount(combos[0]) === amount) {
			return true;
		} else {
			return possibleChange(amount, coins, combos.splice(1));
		}
	}
} // end function


// Main Program
const values = [25, 10, 5, 1];
let amount = prompt("Enter a dollar amount") * 100;
let coins = +prompt("Enter the number of coin for the change");
const combos = combineWithRepetitions(values, coins);

if (possibleChange(amount, coins, combos)) {
	alert(`The entered amount can be formed using ${coins} coins`);
} else {
	alert(`The entered amount can't be formed using ${coins} coins`);
}
