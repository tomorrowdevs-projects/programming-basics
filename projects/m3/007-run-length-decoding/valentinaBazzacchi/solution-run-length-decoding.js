// MAIN PROGRAM
const encodedList = ['A', 3, 'B', 4, 'C', 2, 'D', 1];
let decodedList;
console.log(decoding(encodedList)); // [ 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'C', 'C', 'D' ]

function decoding(list) {
	// Letter will assume the value of the letter (at index 0 of the list) at each call of the function
	let letter = list[0];
	// Counter will assume the value of the number (at index 1 of the list) at each call of the function
	let counter = list[1];
	// Base Case
	// When the list has no more elements the function returns a new empty list 
	if (list.length === 0) {
		return decodedList = [];
	
	// Recursive Case
	// The function calls itself by cutting the list by two elements at a time
	} else if (list.length > 0) {
		decoding(list.slice(2));
	}
	// If counter is equal to one, the letter at index 0 will be added to the top of the decoded list only once
	if (counter === 1) {
		decodedList.unshift(letter);
	}
	// if the counter is greater than one, another recursive function is called to repeat the letters
	if (counter > 1) {
		repeatLetter(decodedList, letter, counter);
	}
	return decodedList;
} // end function


function repeatLetter(list, letter, counter) {
	// Base Case
	if (counter === 0) {
		return list;
	// Recursive Case	
	// The function calls itself by decreasing the counter by one at each call
	} else {
		repeatLetter(list, letter, counter - 1);
		// At each call the letter is added to the top of the list until the counter becomes zero
		return list.unshift(letter);
	}
} // end function

